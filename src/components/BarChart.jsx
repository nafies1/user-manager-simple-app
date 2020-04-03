/** @format */

import React from "react";
import CanvasJSReact from "../canvasjs.react";
const { CanvasJS, CanvasJSChart } = CanvasJSReact;

export default function BarChart({ data, selectedField }) {
  const addSymbols = e => {
    const suffixes = ["", "K", "M", "B"];
    let order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
    if (order > suffixes.length - 1) order = suffixes.length - 1;
    const suffix = suffixes[order];
    return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
  };

  const getDataPoints = () => {
    const result = data.map(field => {
      return {
        y: field[1],
        label: field[0]
      }
    })
    return result
  }

  const options = {
    animationEnabled: true,
    theme: "light2",
    title: {
      text: selectedField
    },
    axisX: {
      title: selectedField,
      reversed: true
    },
    axisY: {
      title: "Amount",
      labelFormatter: addSymbols
    },
    data: [
      {
        type: "bar",
        dataPoints: getDataPoints()//[
        //   { y: 2200000000, label: "Facebook" },
        //   { y: 1800000000, label: "YouTube" },
        //   { y: 800000000, label: "Instagram" },
        //   { y: 563000000, label: "Qzone" },
        //   { y: 376000000, label: "Weibo" },
        //   { y: 336000000, label: "Twitter" },
        //   { y: 330000000, label: "Reddit" }
        // ]
      }
    ]
  };

  return (
    <div>
      <CanvasJSChart
        options={options}
        /* onRef={ref => this.chart = ref} */
      />
      {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
    </div>
  );
}
