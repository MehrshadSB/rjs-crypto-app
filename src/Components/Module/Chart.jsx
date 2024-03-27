import { useState } from "react";
import {
  CartesianGrid,
  ResponsiveContainer,
  Line,
  LineChart,
  YAxis,
  XAxis,
  Legend,
  Tooltip,
} from "recharts";

import styles from "./Chart.module.css";
import { convertData } from "../../Helpers/convertData";

function Chart({ chart, setChart }) {
  console.log(chart);
  const [type, setType] = useState("market_caps");
  console.log();

  return (
    <div className={styles.container}>
      <span className={styles.cross} onClick={() => setChart(null)}>
        X
      </span>
      <div className={styles.chart}>
        <div className={styles.name}>
          <img src={chart.coin.image} />
          <p>{chart.coin.name}</p>
        </div>
        <div className={styles.graph}>
          <ChartComponent data={convertData(chart, type)} type={type} />
        </div>
        <div className={styles.types}>
          <button
            className={type === "prices" ? styles.selected : null}
            onClick={() => setType("prices")}>
            Prices
          </button>
          <button
            className={type === "market_caps" ? styles.selected : null}
            onClick={() => setType("market_caps")}>
            Market Caps
          </button>
          <button
            className={type === "total_volume" ? styles.selected : null}
            onClick={() => setType("total_volumes")}>
            Total volumes
          </button>
        </div>
        <div className={styles.details}>
          <div>
            <p>Prices:</p>
            <span>${chart.coin.current_price}</span>
          </div>
          <div>
            <p>ATH:</p>
            <span>${chart.coin.ath}</span>
          </div>
          <div>
            <p>Market Caps:</p>
            <span>${chart.coin.market_cap}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chart;

const ChartComponent = ({ data, type }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart width="400" height="400" data={data}>
        <Line
          type="monotone"
          dataKey={type}
          stroke="#3874ff"
          strokeWidth="2px"
        />
        <CartesianGrid stroke="#404042" />
        <YAxis dataKey={type} domain={["auto", "auto"]} />
        <XAxis dataKey="date" hide />
        <Legend />
        <Tooltip offset={5} />
      </LineChart>
    </ResponsiveContainer>
  );
};
