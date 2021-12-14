import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import faker from "faker";
import { Services } from "../../services";
import { Spinner } from "../../components/LoadingButton/component-loadingButton";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Orders Stats",
    },
  },
};

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

async function getTotalOrders() {
  const response = await Services.Order.getOrdersList();
  const totalOrders = response?.data[0].length;

  const data = {
    labels,
    datasets: [
      {
        label: "Organic",
        data: labels.map(() =>
          faker.datatype.number({ min: 0, max: totalOrders })
        ),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Inorganic",
        data: labels.map(() =>
          faker.datatype.number({ min: 0, max: totalOrders })
        ),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return data;
}

export function OrderChart() {
  const [configs, setConfigs] = useState(null);

  async function getData() {
    const data = await getTotalOrders();

    setConfigs(data);
  }

  function renderChart() {
    if (!configs) {
      return <Spinner />;
      // return <h6>Please Wait! Chart is being loaded</h6>;
    } else {
      return <Line options={options} data={configs} />;
    }
  }

  useEffect(() => {
    getData();
  }, []);
  return <>{renderChart()}</>;
}
