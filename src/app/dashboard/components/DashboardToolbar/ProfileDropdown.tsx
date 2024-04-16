import { useState } from "react";
import { publish } from "@/lib/events/browser";

type ProfileDropdownProps = {
  name: string;
  user: "Student" | "Mentor";
};

export default function ProfileDropdown({ name, user }: ProfileDropdownProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  function handleDropdown() {
    publish("onOpenDropdown", { isOpen: dropdownOpen });
    // isOpen = !isOpen;
    setDropdownOpen(!dropdownOpen);
  }

  return (
    <div className="relative">
      <div onClick={handleDropdown} className="flex items-center">
        <span className="w-[40px] h-[40px] rounded-[100%] bg-orange"></span>
        <div className="pl-3">
          <h5 className="bold">{name}</h5>
          <h6>{user}</h6>
        </div>

        <button>down</button>
      </div>
    </div>
  );
}
