"use server";

import prisma from "@/prisma/client";

export const setSpammer = async (
  id: string,
  isSpammer: boolean,
): Promise<boolean> => {
  await prisma.user.update({
    where: {
      id,
    },
    data: {
      isSpammer,
    },
  });
  return true;
};
