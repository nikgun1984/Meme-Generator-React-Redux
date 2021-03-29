import { useDispatch } from "react-redux";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { addMeme } from "./reduce";

const MemeForm = () => {
	const DEFAULT_VALUES = { link: "", topText: "", bottomText: "" };

	const [formData, setFormData] = useState(DEFAULT_VALUES);

	const dispatch = useDispatch();

	const handleChange = (evt) => {
		const { name, value } = evt.target;
		setFormData((fData) => ({
			...fData,
			[name]: value,
		}));
	};

	const submitData = (evt) => {
		evt.preventDefault();
		dispatch(addMeme({ ...formData, id: uuidv4() }));
		setFormData(DEFAULT_VALUES);
	};

	return (
		<div>
			<form onSubmit={submitData}>
				<input
					type="text"
					name="link"
					placeholder="Insert Image Link Here..."
					onChange={handleChange}
					value={formData.link}
				/>
				<br />
				<input
					type="text"
					name="topText"
					placeholder="Insert Text here..."
					onChange={handleChange}
					value={formData.topText}
				/>
				<br />
				<input
					type="text"
					name="bottomText"
					placeholder="Insert Text Here..."
					onChange={handleChange}
					value={formData.bottomText}
				/>
				<br />
				<button type="submit">Create Your Meme</button>
			</form>
		</div>
	);
};

export default MemeForm;
