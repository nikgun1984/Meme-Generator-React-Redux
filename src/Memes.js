import Meme from "./Meme";
import { useSelector, useDispatch } from "react-redux";
import "./Memes.css";

const Memes = () => {
	const memes = useSelector((store) => store.memes);
	const dispatch = useDispatch();

	function deleteMeme(id) {
		dispatch({ type: "DELETE", id });
	}
	return (
		<div className="container">
			{memes.map((meme) => (
				<Meme
					id={meme.id}
					link={meme.link}
					topText={meme.topText}
					bottomText={meme.bottomText}
					deleteMeme={() => deleteMeme(meme.id)}
				/>
			))}
		</div>
	);
};

export default Memes;
