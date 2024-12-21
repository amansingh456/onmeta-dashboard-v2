"use client";
import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { color } from "framer-motion";

const EChartComponent = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = echarts.init(chartRef.current);

    const options = {
      tooltip: {
        trigger: "axis",
      },
      legend: {
        data: ["OnRamp", "OffRamp"],
        top: "10%",
        textStyle: {
          fontSize: 12,
          color: "black",
          fontFamily: "monospace, sans-serif",
        },
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        axisLabel: {
          textStyle: {
            fontFamily: "monospace, sans-serif",
            color: "black",
          },
        },
      },
      yAxis: {
        type: "value",
        axisLabel: {
          textStyle: {
            fontFamily: "monospace, sans-serif",
            color: "black",
          },
        },
      },
      series: [
        {
          name: "OnRamp",
          type: "line",
          smooth: true,
          data: [10, 70, 30, 40, 50, 55, 60],
          lineStyle: {
            width: 4,
            color: "#00864d",
          },
          areaStyle: {
            color: "rgba(0, 134, 77, 0.2)",
          },
        },
        {
          name: "OffRamp",
          type: "line",
          smooth: true,
          data: [20, 25, 35, 45, 15, 65, 75],
          lineStyle: {
            width: 4,
            color: "#AA1616",
          },
          areaStyle: {
            color: "rgba(170, 22, 22, 0.2)",
          },
        },
      ],
    };

    chart.setOption(options);
    return () => {
      chart.dispose();
    };
  }, []);

  return <div ref={chartRef} style={{ width: "100%", height: "100%" }} />;
};

export default EChartComponent;
