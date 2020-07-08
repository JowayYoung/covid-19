import React from "react";
import PropTypes from "prop-types";
import { ThousandNum } from "trample";

import "./index.scss";
import { COLOR, TITLE } from "../../utils/getting";

function StatItem({ color, num, title }) {
	return (
		<li className="stat-item-component">
			<h4>{title}</h4>
			<span style={{ color }}>{ThousandNum(num)}</span>
		</li>
	);
}

StatItem.propTypes = {
	color: PropTypes.string,
	num: PropTypes.number,
	title: PropTypes.string
};
StatItem.defaultProps = {
	color: "#000",
	num: 0,
	title: "标题"
};

function Stat({ data }) {
	const { updated = 0 } = data;
	const time = new Date(updated).toLocaleString();
	const view = Object.entries(TITLE).map(v => <StatItem key={v[0]} title={v[1]} num={data[v[0]]} color={COLOR[v[0]]} />);
	return (
		<div className="stat-component tac">
			<h3>更新于 {time}</h3>
			<ul className="flex-ct-x">{view}</ul>
		</div>
	);
}

Stat.propTypes = {
	data: PropTypes.object
};
Stat.defaultProps = {
	data: {}
};

export default Stat;