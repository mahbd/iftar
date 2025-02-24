"use server";

import { OrderedItem } from "@prisma/client";
import prisma from "@/prisma/client";
import axios from "axios";

type OrderForm = {
  name: string;
  phone: string;
  location: string;
  finalPrice: number;
  items?: OrderedItem[];
};

export const createOrder = async (order: OrderForm) => {
  const items = order.items?.filter((item) => item.quantity > 0);
  delete order.items;
  if (items?.length && items.length > 0) {
    const res = await prisma.order.create({
      data: {
        ...order,
        orderedItems: {
          create: items,
        },
      },
    });

    const totalOrders = await prisma.order.count({
      where: {
        createdAt: {
          gt: new Date(new Date().setHours(0, 0, 0, 0)),
        },
      },
    });

    let message = `Order No: ${totalOrders}\nName: ${order.name}\nPhone: ${order.phone}\nLocation: ${order.location}\nTotal: ${order.finalPrice}`;
    for (const item of items) {
      message += `\n${item.name}: ${item.quantity} x ${item.discountedPrice} = ${item.quantity * item.discountedPrice}`;
    }
    await sendMessage(message);
    return res;
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
