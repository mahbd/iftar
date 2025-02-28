"use server";

import { OrderedItem, Status } from "@prisma/client";
import prisma from "@/prisma/client";
import axios from "axios";
import { auth } from "@/prisma/auth";
import { item_hash } from "@/lib/data";
import { headers } from "next/headers";

type OrderForm = {
  name: string;
  phone: string;
  location: string;
  finalPrice: number;
  isPreOrder?: boolean;
  ipAddr?: string;
  deliveryDate?: Date;
  items?: OrderedItem[];
  prevId?: string;
};

type OrderResponse = {
  id?: number;
  db_id?: string;
  isSuccessful: boolean;
  message: string;
};

const allowedTime = () => {
  const now = new Date();
  const dhakaTime = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Dhaka",
    hour: "2-digit",
    hourCycle: "h23", // Ensures 24-hour format
    minute: "2-digit",
  }).format(now);

  const [hour] = dhakaTime.split(":").map(Number);

  return !(hour >= 16 && hour < 20);
};

export const createOrder = async (order: OrderForm): Promise<OrderResponse> => {
  if (process.env.ACCEPT_ORDER === "false") {
    let bypass = false;
    if (process.env.NOT_ACCEPT_REASON) {
      if (
        process.env.NOT_ACCEPT_REASON.toLowerCase().includes(
          "preorder allowed",
        ) &&
        order.isPreOrder
      ) {
        bypass = true;
      }
    }
    if (!bypass) {
      return {
        isSuccessful: false,
        message: process.env.NOT_ACCEPT_REASON || "Order is disabled",
      };
    }
  }

  if (!order.isPreOrder && !allowedTime()) {
    return {
      isSuccessful: false,
      message:
        "Ordering is not allowed between 4 PM and 8 PM. Please try later for tomorrow's order.",
    };
  }

  const session = await auth();
  if (!session || !session.user || !session.user.id) {
    return {
      isSuccessful: false,
      message: "User not found",
    };
  }
  const user = await prisma.user.findUnique({
    where: {
      id: session.user.id,
    },
  });
  if (!user || user.isSpammer) {
    return {
      isSuccessful: false,
      message:
        "Our system has detected you as a spammer. Please message here https://www.facebook.com/profile.php?id=61573538348162.",
    };
  }

  const headersList = await headers();
  const headerData = JSON.stringify(
    {
      "sec-ch-ua-platform": headersList.get("sec-ch-ua-platform"),
      "sec-ch-ua": headersList.get("sec-ch-ua"),
      "sec-ch-ua-mobile": headersList.get("sec-ch-ua-mobile"),
      "user-agent": headersList.get("user-agent"),
    },
    null,
    2,
  );
  const updatedUserPromise = prisma.user.update({
    where: {
      id: session.user.id,
    },
    data: {
      name: order.name,
      phone: order.phone,
      location: order.location,
      deviceInfo: headerData,
    },
  });
  const items = order.items?.filter((item) => item.quantity > 0);
  delete order.items;
  if (items?.length && items.length > 0) {
    const createOrderPromise = prisma.order.create({
      data: {
        ...order,
        userId: session.user.id,
        orderedItems: {
          create: items,
        },
      },
    });

    const totalOrders = await prisma.order.count();

    let message = `Order No: ${totalOrders + 1}\nName: ${order.name}\nPhone: ${order.phone}\nLocation: ${order.location}\nTotal: ${order.finalPrice}`;
    for (const item of items) {
      message += `\n${item.name}: ${item.quantity} x ${item_hash[item.name].info == "৳" ? "৳" : item.discountedPrice} = ${item_hash[item.name].info == "৳" ? item.quantity : item.quantity * item.discountedPrice}`;
    }
    if (order.isPreOrder && order.deliveryDate) {
      message += `\n\nPre-Order`;
      message += `\nDelivery Date: ${order.deliveryDate.toDateString()}`;
    }
    await sendMessage(message);
    await updatedUserPromise;
    const orderRes = await createOrderPromise;

    return {
      id: totalOrders + 1,
      isSuccessful: true,
      db_id: orderRes.id,
      message: "Order created successfully",
    };
  } else {
    return {
      isSuccessful: false,
      message: "No items found in the order",
    };
  }
};

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID = "-4765580246";

async function sendMessage(message: string) {
  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
  try {
    const response = await axios.post(url, {
      chat_id: CHAT_ID,
      text: message,
      parse_mode: "Markdown",
    });
    console.log("Message sent:", response.data);
  } catch (error) {
    console.error("Error sending message:", error);
  }
}

export const changeOrderStatus = async (
  id: string,
  status: Status,
): Promise<boolean> => {
  const order = await prisma.order.update({
    where: {
      id,
    },
    data: {
      status,
    },
  });
  return !!order;
};
