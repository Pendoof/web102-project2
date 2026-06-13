import { useState } from "react";
import "./App.css";
import Background from "./components/Background";
import Card from "./components/Card";

import questions from "./questions.js";

const App = () => {
	const [index, setIndex] = useState(0);

	const handleNext = () => {
		setIndex(
			(index + (Math.floor(Math.random() * (questions.length)))) % questions.length,
		);
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
				<div className="button" onClick={handleNext}>
					{">"}
				</div>
			</div>
		</>
	);
};

export default App;
