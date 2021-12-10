import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import faker from "faker";
import { Services } from "../../services";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  plugins: {
    title: {
      display: true,
      text: "Users Stats",
    },
  },
  responsive: true,
  interaction: {
    mode: "index",
    intersect: false,
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
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

async function getTotalUser() {
  const response = await Services.Users.getUsers();
  const totalUsers = response?.data.length;

  const data = {
    labels,
    datasets: [
      {
        label: "Joined",
        data: labels.map(() =>
          faker.datatype.number({ min: 0, max: totalUsers })
        ),
        backgroundColor: "rgb(255, 99, 132)",
        stack: "Stack 0",
      },
      {
        label: "Left",
        data: labels.map(() =>
          faker.datatype.number({ min: 0, max: totalUsers })
        ),
        backgroundColor: "rgb(75, 192, 192)",
        stack: "Stack 0",
      },
      {
        label: "Inactive",
        data: labels.map(() =>
          faker.datatype.number({ min: 0, max: totalUsers })
        ),
        backgroundColor: "rgb(53, 162, 235)",
        stack: "Stack 1",
      },
    ],
  };

  return data;
}

export function UserChart() {
  const [configs, setConfigs] = useState(null);

  async function getData() {
    const data = await getTotalUser();
    setConfigs(data);
  }

  function renderChart() {
    if (!configs) return <h6>Please Wait! Chart is being loaded</h6>;
    else {
      return <Bar options={options} data={configs} />;
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return <>{renderChart()}</>;
}
