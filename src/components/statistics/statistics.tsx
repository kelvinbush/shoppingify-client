import React from "react";
import styles from "./statistics.module.scss";
import {
  CartesianGrid,
  Line,
  Tooltip,
  XAxis,
  YAxis,
  LineChart,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const items = [
    { name: "Banana", size: 24 },
    { name: "Rice", size: 20 },
    { name: "Chicken 1kg", size: 16 },
  ];
  const categories = [
    { name: "Fruit and vegetables", size: 43 },
    { name: "Meat and Fish", size: 24 },
    { name: "Pets", size: 20 },
  ];

  const chartData = [
    { name: "January", total: 35 },
    { name: "February", total: 119 },
    { name: "March", total: 35 },
    { name: "April", total: 14 },
    { name: "May", total: 30 },
    { name: "June", total: 14 },
    { name: "July", total: 40 },
  ];

  return (
    <div className={styles.statistics__container}>
      <div className={styles.statistics__top}>
        <div className={styles.statistics__top__items}>
          <h2>Top items</h2>
          {items.map((item) => (
            <div
              key={item.name}
              className={styles.statistics__top__item_container}
            >
              <div className={styles.statistics__top__item_text}>
                <p>{item.name}</p>
                <p>{item.size}%</p>
              </div>
              <div className={styles.statistics__top__item_bar}>
                <div
                  style={{ width: `${item.size}%`, backgroundColor: "#F9A109" }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className={styles.statistics__top__categories}>
          <h2>Top categories</h2>
          {categories.map((item) => (
            <div
              key={item.name}
              className={styles.statistics__top__item_container}
            >
              <div className={styles.statistics__top__item_text}>
                <p>{item.name}</p>
                <p>{item.size}%</p>
              </div>
              <div className={styles.statistics__top__item_bar}>
                <div
                  style={{ width: `${item.size}%`, backgroundColor: "#56CCF2" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.statistics__chart}>
        <h2>Monthly Summary</h2>
        <ResponsiveContainer width="85%" height={300}>
          <LineChart
            data={chartData}
            margin={{ top: 5, right: 5, bottom: 5, left: 0 }}
          >
            <Line type="monotone" dataKey="total" stroke="#F9A109" />
            <CartesianGrid stroke="#ccc" strokeDasharray="2 2" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
export default Statistics;
