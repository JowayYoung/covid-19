import { useContext } from "react";

import { AppContext } from "../store";

function useViewport() {
	const { size: { height, width } } = useContext(AppContext);
	return { height, width };
}

export {
	useViewport
};