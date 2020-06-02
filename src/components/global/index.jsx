import React, { useContext } from "react";
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";
import PropTypes from "prop-types";

import "./index.scss";
import { COLOR } from "../../utils/getting";
import { AppContext } from "../../hooks/store";

function Global({ data }) {
	const { dispatch, state: { key } } = useContext(AppContext);
	const select = ({ activeLabel = "" } = {}) => activeLabel && dispatch({
		country: activeLabel,
		type: "SET_COUNTRY"
	});
	return (
		<div className="global-component">
			<BarChart width={1200} height={250} data={data} onClick={select}>
				<CartesianGrid strokeDasharray="2 2" />
				<XAxis dataKey="country" />
				<YAxis />
				<Tooltip />
				<Legend />
				<Bar dataKey={key} fill={COLOR[key]} />
			</BarChart>
		</div>
	);
}

Global.propTypes = {
	data: PropTypes.array
};
Global.defaultProps = {
	data: []
};

export default Global;