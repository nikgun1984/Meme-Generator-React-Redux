const INITIAL_STATE = { link: "", topText: "", bottomText: "" };
function reduceFunction(state = INITIAL_STATE, action) {
	switch (action.state) {
		case "LINK":
			return { ...state, link: action.payload };
		case "TOP_TEXT":
			return { ...state, topText: action.payload };
		case "BOTTOM_TEXT":
			return { ...state, bottomText: action.payload };
		case "SUBMIT":
			return { ...state };
		default:
			return state;
	}
}

export default reduceFunction;
