import { useState } from "react";

const Card = (props) => {
	const [flipped, setFlipped] = useState(false);

	return (
		<div
			className={`card ${flipped ? "flipped" : ""} ${props.difficulty}`}
			onClick={() => setFlipped(!flipped)}
		>
			<div className="front">
				<img src={props.src} />
				<h3>{props.question}</h3>
			</div>
			<div className="back">
				<h3>{props.answer}</h3>
			</div>
		</div>
	);
};

export default Card;
