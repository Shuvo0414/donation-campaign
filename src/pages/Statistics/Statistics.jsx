import { useEffect, useState } from "react";
import { PieChart, Pie, Tooltip, Legend, Cell } from "recharts";

const COLORS = ["#00C49F", "#FF444A"];

const Statistics = () => {
  const [yourDonations, setYourDonations] = useState(0);

  useEffect(() => {
    const storedDonations = JSON.parse(localStorage.getItem("donations")) || [];
    const yourDonationCount = storedDonations.length;
    setYourDonations(yourDonationCount);
  }, []);

  const percentageFulfilled =
    yourDonations !== 0 ? ((yourDonations / 100) * 100).toFixed(1) : 0;

  const percentageRemaining = 100 - percentageFulfilled;

  const data = [
    { name: "Your Donation", value: percentageFulfilled },
    { name: "Total Donation", value: percentageRemaining },
  ];

  return (
    <div className="container mx-auto px-8 md:px-10 lg:px-24 p-5 my-10">
      <div className="flex justify-center items-center">
        <PieChart width={500} height={500}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={60}
            fill="#8884d8"
            label={({ value }) => ` ${value}%`}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>
  );
};

export default Statistics;
