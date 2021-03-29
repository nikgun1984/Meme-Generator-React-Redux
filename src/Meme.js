import "./Meme.css";

const Meme = ({ id, link, topText, bottomText, deleteMeme }) => {
	return (
		<>
			<div id={id} className="card">
				<span className="top-text">{topText}</span>
				<img src={link} alt="img" />
				<span className="bottom-text">{bottomText}</span>
			</div>
			<button onClick={deleteMeme}>Delete Meme</button>
		</>
	);
};

export default Meme;
