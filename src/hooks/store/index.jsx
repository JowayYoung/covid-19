import React, { createContext, useContext, useEffect, useReducer, useState } from "react";
import PropTypes from "prop-types";
import { Throttle } from "trample";

const AppContext = createContext();

const STORE = {
	country: "China",
	key: "cases", // active|cases|deaths|recovered
	lastday: {
		cases: 30,
		deaths: 30,
		recovered: 30
	}
};

function Reducer(state, action) {
	return {
		SET_COUNTRY: { ...state, country: action.country },
		SET_KEY: { ...state, key: action.key },
		SET_LASTDAY: { ...state, lastday: { ...state.lastday, [action.key]: action.day } }
	}[action.type] ?? state;
}

function Provider({ children }) {
	const [state, dispatch] = useReducer(Reducer, STORE);
	const [size, setSize] = useState({
		height: innerHeight,
		width: innerWidth
	});
	const store = { dispatch, size, state };
	const resize = () => setSize({
		height: innerHeight,
		width: innerWidth
	});
	useEffect(() => {
		window.addEventListener("resize", Throttle(resize, 500));
		return () => window.removeEventListener("resize", resize);
	}, []);
	return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
}

Provider.propTypes = {
	children: PropTypes.element
};
Provider.defaultProps = {
	children: null
};

function useStore() {
	const { dispatch, state } = useContext(AppContext) || {};
	return { dispatch, state };
}

export {
	AppContext,
	Provider,
	useStore
};