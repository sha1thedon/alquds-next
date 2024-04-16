"use client";
// components
import ProfileDropdown from "./ProfileDropdown";
import Dropdown from "./Dropdown";
// types
import { UserInfo } from "@/types/User";
// functions and hooks
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { isCustomEvent, subscribe, unsubscribe } from "@/lib/events/browser";
// import type { CustomEventListener } from "@/lib/events/browser";

type DashboardToolbarProps = {
  userInfo: UserInfo;
};

export default function DashboardToolbar({ userInfo }: DashboardToolbarProps) {
  const pathname = usePathname();
  const [showDropdown, setShowDropdown] = useState(false);

  const name =
    pathname === "/dashboard"
      ? "Dashboard"
      : pathname!
          .split("/")
          .pop()
          ?.replace(/^\w/, (c) => c.toUpperCase());

  useEffect(() => {
    subscribe("onOpenDropdown", (e: Event) => {
      if (!isCustomEvent(e)) throw new Error("not a custom event");
      console.log("dropdown is open", e.detail.isOpen);
      e.detail.isOpen ? setShowDropdown(false) : setShowDropdown(true);
    });

    return () =>
      unsubscribe("onOpenDropdown", (event: Event) => {
        if (!isCustomEvent(event)) throw new Error("not a custom event");
        console.log("UNSUBBBED");
        console.log(event);
      });
  }, []);

  return (
    <section>
      <div className="bg-white p-5 flex justify-between items-center relative">
        <h1 className="h1">{name}</h1>

        <div className="flex gap-3">
          <button>S</button>
          <button>N</button>

          <ProfileDropdown name={userInfo.name} user={userInfo.user} />
        </div>
      </div>
      {showDropdown && <Dropdown />}
    </section>
  );
}
