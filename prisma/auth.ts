import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/prisma/client";
import Google from "@auth/core/providers/google";
import Facebook from "@auth/core/providers/facebook";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [Google, Facebook],
});
