import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const Statistics = () => {
  const [yourDonations, setYourDonations] = useState(0);
  const [totalDonations, setTotalDonations] = useState(0);

  useEffect(() => {
    // Load donation data from local storage
    const storedDonations = JSON.parse(localStorage.getItem("donations"));
    if (storedDonations) {
      const yourDonationCount = storedDonations.length;
      const totalDonationCount = storedDonations.reduce(
        (total, donation) =>
          total + parseFloat(donation.price.replace("$", "")),
        0
      );
      setYourDonations(yourDonationCount);
      setTotalDonations(totalDonationCount);
    }
  }, []);

  const data = [
    { name: "Your Donations", value: yourDonations },
    { name: "Total Donations", value: totalDonations - yourDonations },
  ];

  const COLORS = ["#FF444A", "#00C49F"];

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

    // Determine text color based on the percentage
    const textColor = percent > 0.5 ? "white" : "black";

    return (
      <text
        x={x}
        y={y}
        fill={textColor}
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="container mx-auto px-8 md:px-10 lg:px-24 p-5 my-10">
      <h1>Donation Statistics</h1>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="text-center">
        <span>
          Your Donations:{" "}
          <span style={{ color: COLORS[1] }}>
            {yourDonations} (
            {((yourDonations / totalDonations) * 100).toFixed(0)}%)
          </span>
        </span>
        <span className="ml-6">
          Total Donations:
          <span style={{ color: COLORS[0] }}>
            {totalDonations.toFixed(2)} (
            {(
              ((totalDonations - yourDonations) / totalDonations) *
              100
            ).toFixed(0)}
            %)
          </span>
        </span>
      </div>
    </div>
  );
};

export default Statistics;
