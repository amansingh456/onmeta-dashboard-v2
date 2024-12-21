"use client";
import React from "react";
import { ResponsivePie } from "@nivo/pie";

const PercentageGraph = () => {
  const data = [
    {
      id: "Completed",
      label: "Completed",
      value: 85, // Example percentage
      color: "#D1E7D7", // Green color
    },
    {
      id: "FiatPending",
      label: "FiatPending",
      value: 5, // Example percentage
      color: "#D3E2F1", // Blue color
    },
    {
      id: "Cancelled",
      label: "Cancelled",
      value: 10, // Example percentage
      color: "#F2C8CB", // Orange color
    },
  ];

  return (
    <div className="w-full h-full ">
      <ResponsivePie
        data={data}
        margin={{ top: 1, right: 35, bottom: 55, left: 20 }}
        innerRadius={0.2}
        padAngle={2}
        cornerRadius={1}
        colors={data.map((d) => d.color)}
        borderWidth={2}
        borderColor={{ from: "color", modifiers: [["darker", 1]] }}
        arcLinkLabelsSkipAngle={360}
        arcLabelsSkipAngle={360}
        arcLabel={null}
        theme={{
          fontFamily: "Arial, sans-serif",
          tooltip: {
            container: {
              background: "#fff",
              color: "#333",
            },
          },
        }}
        animate={true}
        motionConfig="stiff"
      />
    </div>
  );
};

export default PercentageGraph;
