import { useSelector, useDispatch } from "react-redux";
import MemeForm from "./MemeForm";

const Meme = () => {
	// const dispatch = useDispatch();
	// const link = useSelector((store) => store.link);
	// const topText = useSelector((store) => store.topText);
	// const bottomText = useSelector((store) => store.bottomText);
	// const updateLink = (link) => dispatch({ type: "LINK", payload: link });
	// const updateTopText = (topText) =>
	// 	dispatch({ type: "TOP_TEXT", payload: topText });
	// const updateBottomText = (bottomText) =>
	// 	dispatch({ type: "BOTTOM_TEXT", payload: bottomText });

	return (
		<div>
			<h1>Meme Generator</h1>
			<MemeForm />
		</div>
	);
};

export default Meme;
