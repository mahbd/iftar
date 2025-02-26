"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { useEffect, useState } from "react";

interface Props {
  link: string;
  fields: string[];
}

const SearchBar = ({ link, fields }: Props) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const search = searchParams.get("search");
    if (search) {
      const query = search.split(",");
      setSearchValue(query[0].split(":")[1]);
    }
  }, [searchParams]);

  const onSearch = (searchValue: string) => {
    let searchStr = "";
    for (const field of fields) {
      searchStr += `${field}:${searchValue},`;
    }
    router.push(`${link}?search=${searchStr}`);
  };

  return (
    <div className={"flex"}>
      <Input
        placeholder={"Search"}
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            onSearch(searchValue);
          }
        }}
      />
      <SearchIcon
        className={"-ms-8 bg-blue-700 px-2 w-8 h-8 z-10"}
        onClick={() => onSearch(searchValue)}
      />
    </div>
  );
};

export default SearchBar;
