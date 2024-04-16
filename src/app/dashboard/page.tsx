import { Timetable } from "./components";
import UpcomingActivities1 from "./components/UpcomingActivities/UpcomingActivities1";
import UpcomingActivities from "./components/UpcomingActivities/UpcomingActivities";

export default function Dashboard({}) {
  return (
    <main className="p-5">
      <section className="grid grid-cols-1">
        <h1 className="h-40">UPPER SECTION</h1>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2">
        <div></div>
        <Timetable />
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-2">
      <div></div>
        <UpcomingActivities children={undefined}/>
        {/* <UpcomingActivities1/> */}
        

      </section>
    </main>
  );
}
