import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";

const COLORS = ["#00C49F", "#FF444A"];

const Statistics = () => {
  const [yourDonations, setYourDonations] = useState(0);

  useEffect(() => {
    const storedDonations = JSON.parse(localStorage.getItem("donations")) || [];
    const yourDonationCount = storedDonations.length;
    setYourDonations(yourDonationCount);
  }, []);

  const totalDonations = 12;

  const percentageFulfilled = (yourDonations / totalDonations) * 100;
  // console.log(percentageFulfilled);

  const percentageRemaining = 100 - percentageFulfilled;

  const data = [
    { name: "Your Donations", value: percentageFulfilled },
    { name: "Total Donation", value: percentageRemaining },
  ];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(1)}%`}
      </text>
    );
  };

  return (
    <div className="container mx-auto px-8 md:px-10 lg:px-24 p-5 my-10">
      <div className=" flex justify-center items-center">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={120}
            fill="#8884d8"
            label={renderCustomizedLabel}
            labelLine={false}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Legend />
        </PieChart>
      </div>
    </div>
  );
};

export default Statistics;
