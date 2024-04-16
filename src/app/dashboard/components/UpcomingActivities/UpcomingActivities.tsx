// // UpcomingActivities.tsx

// import React from 'react';

// interface ActivityProps {
//   name: string;
//   date: string;
//   time: string;
//   backgroundcolour: string;
//   iconcolour: string;
// }

// interface UpcomingActivitiesContainerProps {
//   children: React.ReactNode;
// }

// const UpcomingActivityCard: React.FC<ActivityProps> = ({ name, date, time, backgroundcolour, iconcolour }) => {
//   return (
//     <div className={`upcoming-activity-card ${backgroundcolour}`}>
//       <div className={`icon ${iconcolour}`}></div>
//       <h3>{name}</h3>
//       <p>Date: {date}</p>
//       <p>Time: {time}</p>
//     </div>
//   );
// };

// const UpcomingActivitiesContainer: React.FC<UpcomingActivitiesContainerProps> = ({ children }) => {
//   return (
//     <div className="upcoming-activities-container">
//       <h2>Upcoming Activities</h2>
//       <a href="#">View All</a>
//       {children}
//     </div>
//   );
// };

// const activities = [
//   {
//     name: "Biology",
//     date: "8th - 10th July 2021",
//     time: "7pm - 8pm",
//     backgroundcolour: 'bg-blue',
//     iconcolour: 'bg-blue2',
//   },
//   {
//     name: "Trigonometry Test",
//     date: "13th July 2021",
//     time: "8am - 9am",
//     backgroundcolour: 'bg-pink',
//     iconcolour: 'bg-pink2',
//   },
//   {
//     name: "Decimal Homework Due",
//     date: "18th July 2021",
//     time: "8am - 9am",
//     backgroundcolour: 'bg-green',
//     iconcolour: 'bg-green2',
//   },
//   {
//     name: "Chemistry",
//     date: "23rd July 2021",
//     time: "10am - 1pm",
//     backgroundcolour: 'bg-orange',
//     iconcolour: 'bg-orange2',
//   },
// ];

// const UpcomingActivities = () => {
//   return (
//     <UpcomingActivitiesContainer>
//       {activities.map((activity, index) => (
//         <UpcomingActivityCard
//           key={index}
//           name={activity.name}
//           date={activity.date}
//           time={activity.time}
//           backgroundcolour={activity.backgroundcolour}
//           iconcolour={activity.iconcolour}
//         />
//       ))}
//     </UpcomingActivitiesContainer>
//   );
// };

// export default UpcomingActivities;

import React from 'react';
import Link from 'next/link';

type ActivityType = 'Maths' | 'English' | 'Quran' | 'Public speaking';

interface Activity {
  name: string;
  slug: string;
  date: string;
  time: string;
  type?: ActivityType; // Optional for now, can define logic for color based on type
}

interface UpcomingActivitiesCardProps {
  activity: Activity;
}

const UpcomingActivitiesCard: React.FC<UpcomingActivitiesCardProps> = ({ activity }) => {
  const getColor = (type?: ActivityType) => {
    // Define color logic based on the type
    switch (type) {
      case 'Maths':
        return 'bg-blue-500';
      case 'English':
        return 'bg-red-500';
      case 'Quran':
        return 'bg-green-500';
      case 'Public speaking':
        return 'bg-yellow-500';
      default:
        return 'bg-gray-200';
    }
  };

  return (
    <div className={`p-4 rounded-xl ${getColor(activity.type)}`}>
      <h4 className="font-bold text-lg">{activity.name}</h4>
      <p className="text-sm">{activity.date} | {activity.time}</p>
    </div>
  );
};

interface UpcomingActivitiesContainerProps {
  children: React.ReactNode;
}

const UpcomingActivitiesContainer: React.FC<UpcomingActivitiesContainerProps> = ({ children }) => {
  return (
    <div className="bg-white p-5 rounded-xl">
      <h3 className="font-bold text-xl mb-4">Upcoming Activities</h3>
      <Link href="#" className="text-blue-600 hover:text-blue-800">See all</Link>
      {children}
    </div>
  );
};


export default UpcomingActivitiesContainer

