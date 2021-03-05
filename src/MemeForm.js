import { useSelector, useDispatch } from "react-redux";
import { useFormik } from "formik";

// const validate = (values) => {
// 	const errors = {};
// 	if (!values.imageLink) {
// 		errors.imageLink = "Image Link Field Required";
// 	}
// 	if (!values.topText) {
// 		errors.topText = "Top Text Field Required";
// 	}
// 	if (!values.bottomText) {
// 		errors.bottomText = "Bottom Text Field Required";
// 	}
// 	return errors;
// };
const MemeForm = () => {
	const dispatch = useDispatch();
	const link = useSelector((store) => store.link);
	const topText = useSelector((store) => store.topText);
	const bottomText = useSelector((store) => store.bottomText);
	const updateLink = (link) => dispatch({ type: "LINK", payload: link });
	const updateTopText = (topText) =>
		dispatch({ type: "TOP_TEXT", payload: topText });
	const updateBottomText = (bottomText) =>
		dispatch({ type: "BOTTOM_TEXT", payload: bottomText });
	const submit = (e) => {
		e.preventDefault();
		dispatch({ type: "SUBMIT" });
	};
	return (
		<div>
			<form onSubmit={submit}>
				<input
					type="text"
					placeholder="Insert Image Link Here..."
					onChange={(e) => updateLink(e.target.value)}
				/>
				<br />
				<input
					type="text"
					placeholder="Insert Text here..."
					onChange={(e) => updateTopText(e.target.value)}
				/>
				<br />
				<input
					type="text"
					placeholder="Insert Text Here..."
					onChange={(e) => updateBottomText(e.target.value)}
				/>
				<br />
				<button type="submit">Create Your Meme</button>
			</form>
		</div>
	);
};

export default MemeForm;
