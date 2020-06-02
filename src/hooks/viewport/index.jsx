import { useContext } from "react";

import { AppContext } from "../../hooks/store";

function useViewport() {
	const { size: { height, width } } = useContext(AppContext);
	return { height, width };
}

export {
	useViewport
};