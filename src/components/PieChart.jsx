import React from "react";
import CanvasJSReact from "../canvasjs.react";
const { CanvasJSChart } = CanvasJSReact;

export default function PieChart({ data, selectedField }) {
  const getTotalPoints = () => {
    let result = 0
    data.forEach(item => {
      result += item[1]
    });
    return result
  }

  const getDataPoints = () => {
    const result = data.map(field => {
      return {
        y: Math.abs(field[1]/getTotalPoints()*100).toFixed(2),
        label: field[0]
      }
    })
    return result
  }

  const options = {
    exportEnabled: true,
    animationEnabled: true,
    title: {
      text: selectedField
    },
    data: [
      {
        type: "pie",
        startAngle: 75,
        toolTipContent: "<b>{label}</b>: {y}%",
        showInLegend: "true",
        legendText: "{label}",
        indexLabelFontSize: 16,
        indexLabel: "{label} - {y}%",
        dataPoints: getDataPoints()
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
