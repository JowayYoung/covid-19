import React from "react";

import "./index.scss";
import { useStore } from "../../hooks/store";

function Select() {
	const { dispatch } = useStore();
	const change = e => dispatch({ key: e.target.value, type: "SET_KEY" });
	return (
		<div className="select-component">
			<label htmlFor="select">请选择需要显示的数据：</label>
			<select id="select" onChange={change}>
				<option value="cases">累积确诊病例</option>
				<option value="active">现存确诊病例</option>
				<option value="deaths">累积死亡病例</option>
				<option value="recovered">累积治愈病例</option>
			</select>
		</div>
	);
}

export default Select;