import React, { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Services } from "../../services";

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  layout: {
    padding: 10,
  },
};

async function ChartConfigs() {
  const labels = await Services.Categories.getCategoriesNames();
  const response = await Services.Categories.getNumberOfProductPerCategory();

  const datasets = [
    {
      label: "Products Per Category",
      data: response.data,
      backgroundColor: [
        "rgba(255, 99, 132)",
        "rgba(54, 162, 235)",
        "rgba(255, 206, 86)",
        "rgba(75, 192, 192)",
        "rgba(153, 102, 255)",
        "rgba(255, 159, 64)",
      ],
      borderColor: "white",
      borderWidth: 2.5,
      hoverOffset: 10,
    },
  ];

  const data = {
    labels,
    datasets,
  };
  // console.log(labels, response.data);
  // console.log(data);

  return data;
}

export function CategoryChart() {
  const [configs, setConfigs] = useState(null);

  async function setChartConfigs() {
    const obj = await ChartConfigs();
    setConfigs(obj);
    // console.log(obj);
  }

  function renderChart() {
    // console.log("Configs: ", configs);

    if (!configs) return <h6>Please Wait! Chart is being loaded</h6>;
    else {
      return <Doughnut data={configs} options={options} />;
      // return <h3>Chart has loaded</h3>;
    }
  }

  useEffect(() => {
    setChartConfigs();
  }, []);

  return <>{renderChart()}</>;
}
