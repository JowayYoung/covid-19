function TransformHistory(timeline = {}) {
	return Object.entries(timeline).map(v => ({ number: v[1], time: v[0] }));
}

export {
	TransformHistory
};