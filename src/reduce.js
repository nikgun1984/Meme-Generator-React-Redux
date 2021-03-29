const INITIAL_STATE = { memes: [] };

export function addMeme(meme) {
	return {
		type: "CREATE",
		meme: meme,
	};
}

function reduceFunction(state = INITIAL_STATE, action) {
	switch (action.type) {
		case "CREATE":
			console.log("IN HERE");
			return {
				...state,
				memes: [...state.memes, { ...action.meme }],
			};
		case "DELETE":
			return {
				...state,
				memes: state.memes.filter((meme) => meme.id !== action.id),
			};
		default:
			return state;
	}
}

export default reduceFunction;
