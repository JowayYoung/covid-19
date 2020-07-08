import React from "react";
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";
import PropTypes from "prop-types";

import "./index.scss";
import { COLOR, TITLE } from "../../utils/getting";
import { TransformHistory } from "../../utils/setting";
import { useStore } from "../../hooks/store";

function HistoryItem({ change, data, dataKey, lastday, title }) {
	const color = COLOR[dataKey];
	const colorKey = `color-${dataKey}`;
	const dataTgt = data.slice(-lastday);
	return (
		<div className="history-item">
			<AreaChart width={1200} height={250} data={dataTgt}>
				<defs>
					<linearGradient id={colorKey} x1="0" y1="0" x2="0" y2="1">
						<stop offset="5%" stopColor={color} stopOpacity={0.8} />
						<stop offset="95%" stopColor={color} stopOpacity={0} />
					</linearGradient>
				</defs>
				<CartesianGrid strokeDasharray="2 2" />
				<XAxis dataKey="time" />
				<YAxis />
				<Tooltip />
				<Area type="monotone" dataKey="number" stroke={color} fillOpacity={1} fill={`url(#${colorKey})`} />
			</AreaChart>
			<p className="history-item-desc flex-ct-x">
				{title}最近<b style={{ color }}>{lastday}</b>天的趋势
				<input type="range" min="2" max="30" value={lastday} onChange={change} />
			</p>
		</div>
	);
}

HistoryItem.propTypes = {
	change: PropTypes.func,
	data: PropTypes.array,
	dataKey: PropTypes.string,
	lastday: PropTypes.number,
	title: PropTypes.string
};
HistoryItem.defaultProps = {
	change: null,
	data: [],
	dataKey: "",
	lastday: 0,
	title: "标题"
};

function History({ data }) {
	const { dispatch, state: { country, lastday } } = useStore();
	const change = (e, key) => dispatch({ day: +e.target.value, key, type: "SET_LASTDAY" });
	const view = Object.entries(lastday).map(v => (
		<HistoryItem
			key={v[0]}
			data={TransformHistory(data[v[0]])}
			dataKey={v[0]}
			title={TITLE[v[0]]}
			lastday={v[1]}
			change={e => change(e, v[0])}
		/>
	));
	return (
		<div className="history-component">
			<h2>请点击每个国家显示对应的疫情历史数据：{country}</h2>
			{view}
		</div>
	);
}

History.propTypes = {
	data: PropTypes.object
};
History.defaultProps = {
	data: {}
};

export default History;