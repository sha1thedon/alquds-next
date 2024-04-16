import React, {ReactNode} from 'react'
import Link from 'next/link';

const upcomingActivities = [
    {
        name:"Biology",
        date: "8 th - 10th July 2021",
        time: "7pm - 8pm",
        iconcolour: "bg-blue2 w-8 h-8 rounded-full",
        backgroundcolour:"bg-blue w-8/12 rounded-xl p-3 flex items-center gap-3",
        link: '#'
    },
    {
        name:"Trigonometry Test",
        date: "13th July 2021",
        time: "8am - 9am",
        iconcolour: "bg-pink2 w-8 h-8 rounded-full",
        backgroundcolour:"bg-pink w-8/12 rounded-xl p-3 flex items-center gap-3",
        link: '#'
    },
    {
        name:"Decimal Homework Due",
        date: "18th July 2021",
        time: "8am - 9am",
        iconcolour: "bg-green2 w-8 h-8 rounded-full",
        backgroundcolour:"bg-green w-8/12 rounded-xl p-3 flex items-center gap-3",
        link: '#'
    },
    {
        name:"Chemistry",
        date: "23rd July 2021",
        time: "10am - 1pm",
        iconcolour: "bg-orange w-8 h-8 rounded-full",
        backgroundcolour:"bg-orange2 w-8/12 rounded-xl p-3 flex items-center gap-3",
        link: '#'
    }
];

// export default function UpcomingActivities1 () {
//     return (
//         <div className="bg-white p-5 rounded-xl">
//             <h3 className="font-bold text-xl">Upcoming Activities</h3>

//             <ul>
//                 {upcomingActivities.map((item,index) => (
//                     <li key={index} className="flex items-center justify-between mt-3">

//                         <div className={item.backgroundcolour}>
//                 <span className={item.iconcolour}>
//                 </span>
//               <div>
//                 <h4 className="font-bold text-lg">{item.name}</h4>
//                 <p>{item.date}</p>
//                 <h6 className="text-sm">{item.time}</h6>
//               </div>
//             </div>

//                     </li>

//                 ))}
//             </ul>

//         </div>
//     )
// }

export default function UpcomingActivities1() {
    return (
      <div className="bg-white p-5 rounded-xl">
        <h3 className="font-bold text-xl">Upcoming Activities</h3>
  
        <ul>
          {upcomingActivities.map((item, index) => (
            <li key={index} className="flex items-center justify-between mt-3">
              <Link href={item.link}>
                <div className={`w-full max-w-[300px] ${item.backgroundcolour} p-4 flex items-center justify-between`}>
                  <span className={item.iconcolour}></span>
                  <div className='ml-6'>
                    <h4 className="font-bold text-lg">{item.name}</h4>
                    <p>{item.date}</p>
                    <h6 className="text-sm">{item.time}</h6>
                  </div>
                  {/* Arrow icon for navigation */}
                  <span className="text-blue-500 cursor-pointer">&#8594;</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }