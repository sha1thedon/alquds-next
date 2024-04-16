import Image from "next/image";
import DashboardNavItem from "./DashboardSideNavItem";

const dashboardNavItems = [
  {
    name: "Dashboard",
    slug: "",
  },
  {
    name: "Profile",
    slug: "profile",
  },
  {
    name: "Class",
    slug: "class",
  },
  {
    name: "Timetable",
    slug: "timetable",
  },
  {
    name: "Messages",
    slug: "messages",
  },
];

type DashboardSideNavProps = {};

export default function DashboardSideNav() {
  return (
    <section className="col-span-3 bg-blue bg-gradient-to-t from-blue to-blue2 pl-3">
      <Image
        className="object-contain block mx-auto my-10 pr-3"
        src="/logos/alquds_text.svg"
        width={300}
        height={300}
        alt="Al Quds Logo"
      />

      <ul>
        {dashboardNavItems.map((item, index) => (
          <DashboardNavItem
            key={index}
            name={item.name}
            url={`/dashboard/${item.slug}`}
            // active=
          />
        ))}
      </ul>
    </section>
  );
}
