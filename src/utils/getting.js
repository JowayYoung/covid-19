const COLOR = {
	active: "#f90",
	cases: "#09f",
	deaths: "#f66",
	recovered: "#3c9"
};

const FETCH_URL = "https://corona.lmao.ninja/v2";

const INTERFACE = {
	country: key => `${FETCH_URL}/countries?sort=${key}`,
	countryHistory: country => `${FETCH_URL}/historical/${country}`,
	global: `${FETCH_URL}/all`
};

const INTERVAL = 1000 * 60 * 60;

const TITLE = {
	active: "累积确诊病例",
	cases: "现存确诊病例",
	deaths: "累积死亡病例",
	recovered: "累积治愈病例"
};

export {
	COLOR,
	FETCH_URL,
	INTERFACE,
	INTERVAL,
	TITLE
};