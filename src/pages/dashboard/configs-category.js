import React, { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Services } from "../../services";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
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
    },
  ],
};

export function CategoryChart() {
  const [categories, setCategories] = useState([]);

  //   Chart Configs
  // const [labels, setChartLabels] = useState([]);
  // const [datasets, setChartDataSets] = useState([]);
  // const [dsLabel, setDS_Label] = useState("");
  // const [dsData, setDS_Data] = useState([]);
  // const [dsBGC, setDS_BGC] = useState([
  //   "rgba(255, 99, 132)",
  //   "rgba(54, 162, 235)",
  //   "rgba(255, 206, 86)",
  //   "rgba(75, 192, 192)",
  //   "rgba(153, 102, 255)",
  //   "rgba(255, 159, 64)",
  // ]);
  // const [dsBDC, setDS_BDC] = useState(["white"]);
  // const [dsBDW, setDS_BDW] = useState(2);

  const [chartConfigs, setChartConfigs] = useState({});

  async function getCatData() {
    const response = await Services.Categories.getCategories();
    setCategories(response.data);
  }

  useEffect(() => {
    getCatData();
  }, []);

  async function setConfigs() {
    const labels = categories.map((category) => {
      return category.parentCategory;
    });

    const response = await Services.Categories.getNumberOfProductPerCategory();

    const data = {
      labels,
      datasets: [
        {
          lable: "Products Per Category",
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
          borderWidth: 2,
        },
      ],
    };

    setChartConfigs(data);
    console.log("ChartConfigs: ", chartConfigs);
  }

  // async function extractData() {
  //   const labels = categories.map((category) => {
  //     return category.parentCategory;
  //   });

  //   setChartLabels(labels);
  // }

  // async function setProductsByCategory() {
  //   const response = await Services.Categories.getNumberOfProductPerCategory();
  //   console.log("#Products:", response);

  //   setDS_Data(response.data);
  //   console.log(dsData);
  // }

  // function setDS_Object() {
  //   setChartDataSets([
  //     {
  //       label: dsLabel,
  //       data: dsData,
  //       backgroundColor: dsBGC,
  //       borderColor: dsBDC,
  //       borderWidth: dsBDW,
  //     },
  //   ]);
  // }

  useEffect(() => {
    setConfigs();
    // extractData();
    // setProductsByCategory();
    // setDS_Object();
    // setChartConfigs({ labels, datasets });
  }, [chartConfigs]);

  return <Doughnut data={chartConfigs} width={"100px"} height={"100px"} />;
  // return <h1>test</h1>;
}
