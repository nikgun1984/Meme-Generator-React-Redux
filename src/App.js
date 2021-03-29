import "./App.css";
import MemeForm from "./MemeForm";
import Memes from "./Memes";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>Meme Generator</h1>
				<MemeForm />
				<Memes />
			</header>
		</div>
	);
}

export default App;
