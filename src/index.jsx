import React from "react";
import { createRoot } from "react-dom/client";

import "./assets/css/reset.css";
import "./index.scss";
import { INTERFACE, INTERVAL } from "./utils/getting";
import Global from "./components/global";
import History from "./components/history";
import Select from "./components/select";
import Stat from "./components/stat";
import { useRequest } from "./hooks/request";
import { Provider, useStore } from "./hooks/store";
import { useViewport } from "./hooks/viewport";

function App() {
	const { state: { country, key } } = useStore();
	const { width } = useViewport();
	const globalStats = useRequest(INTERFACE.global, { data: {}, interval: INTERVAL });
	const countryStats = useRequest(INTERFACE.country(key), { converter: v => v.slice(0, 15), data: [] });
	const historyStats = useRequest(INTERFACE.countryHistory(country), { converter: v => v.timeline, data: {} });
	width < 1200 && alert("请在PC浏览器上查看，并保持最小1200px的宽度", 5000);
	return (
		<div className="index-page">
			<h1 className="gradient">COVID-19</h1>
			<Stat data={globalStats} />
			<Select />
			<Global data={countryStats} />
			<History data={historyStats} />
		</div>
	);
}

console.log("项目构建环境：", process.env.NODE_ENV);
console.log("项目运行环境：", RUN_ENV); // eslint-disable-line
const container = document.getElementById("root");
container && createRoot(container).render(<Provider><App /></Provider>);