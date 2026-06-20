import { useState } from "react";
import "./App.css";
import Background from "./components/Background";
import Card from "./components/Card";

import questions from "./questions.js";

const App = () => {
	const [index, setIndex] = useState(0);
	const [refresh, setRefresh] = useState(false);
	const [guess, setGuess] = useState("");
	const [correct, setCorrect] = useState("");

	const handlePrevious = () => {
		if (index != 0) {
			setIndex(index - 1);
			setCorrect("");
		}
	};

	const handleNext = () => {
		if (index != questions.length - 1) {
			setIndex(index + 1);
			setCorrect("");
		}
	};

	const handleShuffle = () => {
		let curr = questions.length;
		while (curr > 0) {
			curr--;
			let random = Math.floor(Math.random() * (curr + 1));
			[questions[curr], questions[random]] = [questions[random], questions[curr]];
		}

		setIndex(0);
		setCorrect("");
		setRefresh(!refresh);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (guess.toLowerCase() == questions[index].answer.toLowerCase()) {
			setCorrect("correct");
		} else {
			setCorrect("wrong");
		}
	};

	return (
		<>
			<Background />
			<div className="header">
				<h1>Pokemon Trivia</h1>
				<h3>How well do you know Pokemon? Find out here!</h3>
				<h5>Number of cards: {questions.length}</h5>
			</div>
			<div className="card-container">
				<Card
					key={index}
					difficulty={questions[index].difficulty}
					src={questions[index].src}
					question={questions[index].question}
					answer={questions[index].answer}
				></Card>
				<div className="guess-container">
					<h5>guess here: </h5>
					<form onSubmit={handleSubmit}>
						<input
							type="text"
							value={guess}
							onChange={(e) => setGuess(e.target.value)}
							placeholder="Answer..."
							className={
								correct == ""
									? ""
									: correct === "correct"
										? "correct"
										: "wrong"
							}
						></input>
						<button type="submit">Submit</button>
					</form>
				</div>
				<div className="button-container">
					<div
						className={"button " + (index == 0 ? "stop" : "")}
						onClick={handlePrevious}
					>
						{"<"}
					</div>
					<div
						className={
							"button " + (index == questions.length - 1 ? "stop" : "")
						}
						onClick={handleNext}
					>
						{">"}
					</div>
					<div className="button" onClick={handleShuffle}>
						shuffle
					</div>
				</div>
			</div>
		</>
	);
};

export default App;
