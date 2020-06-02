import { useCallback, useState, useEffect } from "react";

export function useRequest(url = "", { converter = data => data, data = null, interval = 0 } = {}) {
	const converterRef = useCallback(converter, []);
	const [result, setResult] = useState(data);
	useEffect(() => {
		const fetchData = async() => {
			const res = await (await fetch(url)).json();
			setResult(converterRef(res));
		};
		fetchData();
		if (interval) {
			const timer = setInterval(fetchData, interval);
			return () => clearInterval(timer);
		}
	}, [url, converterRef, interval]);
	return result;
}