import React, { useState } from "react";

const Home = () => { 			//Arrow Function Open
	const [ selectedColor, setSelectedColor] = useState("");
	
	return (
		<div className="body lightBox">
			<div className="trafficPole container">
			<div className="protector"></div>
			<div className="protector"></div>
			<div className="protector"></div>
				<div className={
					"red" + ((selectedColor === "red") ? "red glowRed" : "")}
					onClick={() => setSelectedColor("red")} />

				<div className={
					"orange"+((selectedColor === "yellow") ? "orange glowOrange" : "")}
					onClick={() => setSelectedColor("yellow")} />

				<div className={
					"green"+((selectedColor === "green") ? "green glowGreen" : "")}
					onClick={() => setSelectedColor("green")} />
			</div>
		</div>
	);
};

export default Home;