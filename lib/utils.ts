import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { ReadonlyURLSearchParams } from "next/navigation";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const createUrlWithParams = (
  searchParams: ReadonlyURLSearchParams,
  baseUrl: string,
) => {
  const params = searchParams.toString();
  if (params) {
    return `${baseUrl}?${params}`;
  }
  return baseUrl;
};
