import prisma from "@/prisma/client";
import { Prisma } from "@prisma/client";
import { Suspense } from "react";
import SearchBar from "@/app/admin/SearchBar";
import Link from "next/link";

interface UserPageProps {
  searchParams: Promise<{
    search?: string;
  }>;
}

const UsersPage = async ({ searchParams }: UserPageProps) => {
  let orFilters: Prisma.UserWhereInput[] = [];
  const search = (await searchParams).search;

  if (search) {
    const queries = search.split(",").filter(Boolean);
    orFilters = queries
      .map((query) => {
        const [field, value] = query.split(":");
        if (field && value) {
          return {
            [field]: {
              contains: value,
              mode: "insensitive",
            },
          };
        }
        return null;
      })
      .filter(Boolean) as Prisma.UserWhereInput[];
  }

  const users = await prisma.user.findMany({
    where: {
      OR: orFilters.length > 0 ? orFilters : undefined,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return (
    <div className={"px-2"}>
      <h1 className={"text-center font-bold text-xl"}>Users</h1>
      <Suspense>
        <SearchBar
          link={"/admin/users/"}
          fields={["name", "email", "phone", "location"]}
        />
      </Suspense>
      <div className={"flex flex-col gap-3"}>
        {users.map((user) => (
          <Link href={`/admin/users/${user.id}`} key={user.id}>
            <div
              key={user.id}
              className={`flex flex-wrap ${user.isSpammer ? "bg-red-400" : "bg-white/30"} p-2 rounded-lg gap-2`}
            >
              <div className={"text-nowrap"}>{user.name}</div>
              <div className={"text-nowrap"}>{user.email}</div>
              <div className={"text-nowrap"}>{user.phone}</div>
              <div className={"text-nowrap"}>{user.location}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default UsersPage;
