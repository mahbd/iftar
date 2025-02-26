import { auth, signIn } from "@/prisma/auth";
import prisma from "@/prisma/client";

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  if (!session || !session.user || !session.user.id) {
    signIn();
    return <div>Redirecting...</div>;
  }
  const user = await prisma.user.findUnique({
    where: {
      id: session.user?.id,
    },
  });
  if (user?.role !== "ADMIN") {
    return <div>Unauthorized</div>;
  }
  return <div className={"w-full md:max-w-7xl min-h-screen"}>{children}</div>;
}
