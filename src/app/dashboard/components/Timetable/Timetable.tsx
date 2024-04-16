// CAN USE LOAD ON SCROLL HERE
// TBH ITS PROBALY NOT THAT DIFFICULT TO LOAD EVERYTHING

const timetableItems = [
  {
    name: "Maths",
    slug: "maths",
    date: "01/12/23",
    time: "0900 - 1000",
  },
  {
    name: "English",
    slug: "english",
    date: "02/12/23",
    time: "0900 - 1000",
  },
  {
    name: "Quran",
    slug: "quran",
    date: "03/12/23",
    time: "0900 - 1000",
  },
  {
    name: "Public speaking",
    slug: "public speaking",
    date: "04/12/23",
    time: "0900 - 1000",
  },
];

export default function Timetable() {
  const today = new Date();
  return (
    <div className="bg-white p-5 rounded-xl">
      <h3 className="font-bold text-xl">Timetable</h3>
      <h6>{today.toDateString()}</h6>

      <ul>
        {timetableItems.map((item, index) => (
          <li key={index} className="flex items-center justify-between mt-3">
            <p>{item.date}</p>

            <div className="bg-orange2 w-8/12 rounded-xl p-3 flex items-center gap-3">
              <span className="bg-orange w-8 h-8 rounded-full"></span>
              <div>
                <h4 className="font-bold text-lg">{item.name}</h4>
                <h6 className="text-sm">{item.time}</h6>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
