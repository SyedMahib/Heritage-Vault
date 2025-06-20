import React, { use } from "react";
import CountUp from "react-countup";
import {
  FaBoxes,
  FaGlobeAsia,
  FaLandmark,
  FaTrophy,
  FaUsers,
} from "react-icons/fa";

const dataPromise = fetch(
  "https://a-11-server-side-peach.vercel.app/artifacts"
).then((res) => res.json());

const Counter = () => {
  const data = use(dataPromise);
  console.log(data);

  const stats = [
    {
      icon: <FaLandmark size={50} color="#A37854" />,
      label: "Artifacts Tracked",
      value: 245,
    },
    {
      icon: <FaUsers size={50} color="#A37854" />,
      label: "Visitors",
      value: 93,
    },
    {
      icon: <FaGlobeAsia size={50} color="#A37854" />,
      label: "Countries Represented",
      value: 12,
    },
    {
      icon: <FaBoxes size={50} color="#A37854" />,
      label: "Collections",
      value: `${data.length}`,
    },
  ];

  return (
    <section className="bg-black opacity-90 py-12 text-white mt-[100px] mb-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
        {stats.map((stat) => (
          <div key={stat.id} className="flex flex-col items-center">
            <div className="text-yellow-500 mb-2">{stat.icon}</div>
            <h3 className="text-3xl font-bold">
              {" "}
              <CountUp
                end={stat.value}
                duration={10}
                enableScrollSpy={true}
                scrollSpyDelay={200}
              /> +
            </h3>
            <p className="text-lg font-medium mt-1 text-gray-300">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Counter;
