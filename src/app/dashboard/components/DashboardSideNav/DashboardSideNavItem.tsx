"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type DashboardSideNavItemProps = {
  name: string;
  url: string;
};

export default function DashboardSideNavItem({
  name,
  url,
}: DashboardSideNavItemProps) {
  const pathname = usePathname();

  const cleanedUrl = url.endsWith("/") ? url.slice(0, -1) : url;
  const isActive = pathname === cleanedUrl;

  return (
    <li
      className={`p-4 mt-2 ${
        isActive
          ? "bg-offwhite rounded-l-3xl after:bg-offwhite relative "
          : "text-white"
      }`}
    >
      <Link className="w-full h-full block" href={url}>
        {name}
      </Link>
    </li>
  );
}
