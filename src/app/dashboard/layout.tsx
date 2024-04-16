import Image from "next/image";
import { DashboardToolbar, DashboardSideNav } from "./components";
import { UserInfo } from "@/types/User";

export default function Layout({ children }: { children: React.ReactNode }) {
  const userInfo: UserInfo = {
    name: "John Doe",
    user: "Student",
  };

  return (
    <div className="grid grid-cols-12 min-h-screen">
      <DashboardSideNav />
      <div className="col-span-9">
        <DashboardToolbar userInfo={userInfo} />
        {children}
      </div>
    </div>
  );
}
