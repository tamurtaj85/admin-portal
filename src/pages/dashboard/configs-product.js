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
import { Spinner } from "../../components/LoadingButton/component-loadingButton";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
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
      text: "Products Stats",
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

async function getTotalProducts() {
  const response = await Services.Product.GetProducts();
  //   console.log(response.data);

  const data = {
    labels,
    datasets: [
      {
        label: "Products Per Month",
        data: labels.map(() =>
          faker.datatype.number({ min: 0, max: response.data.length })
        ),
        backgroundColor: "rgba(244, 81, 24, 0.75)",
      },
    ],
  };

  return data;
}

export function ProductChart() {
  const [configs, setConfigs] = useState(null);

  async function getData() {
    const data = await getTotalProducts();

    setConfigs(data);
  }

  function renderChart() {
    if (!configs) {
      return <Spinner />;
      // return <h6>Please Wait! Chart is being loaded</h6>;
    } else {
      return <Bar options={options} data={configs} />;
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return <>{renderChart()}</>;
}
