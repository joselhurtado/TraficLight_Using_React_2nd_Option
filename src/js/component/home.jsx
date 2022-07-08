import React, { useState, useEffect } from "react";

const Home = () => { 			//Arrow Function Open
	const [ selectedColor, setSelectedColor] = useState("");
	useEffect(
		() => {
			const interval = setInterval(() => {
				selectedColor === "green"
					? setSelectedColor("red")
					: selectedColor === "yellow"
						? setSelectedColor("green")
						: selectedColor === "red"
							? setSelectedColor("yellow")
							: null;
			}, 3000);
			return () => clearInterval(interval);
		},
		[selectedColor]
	);
	
	return (
		<div className="body trafficPole">
			<div className="lighBox container">
			<div className="protector"></div>
			<div className="protector"></div>
			<div className="protector"></div>
				<div className={
					"red" + ((selectedColor === "red") ? "red glowRed" : "")}
					onClick={() => setSelectedColor("red")} />

				<div className={
					"orange" + ((selectedColor === "yellow") ? "orange glowOrange" : "")}
					onClick={() => setSelectedColor("yellow")} />

				<div className={
					"green" + ((selectedColor === "green") ? "green glowGreen" : "")}
					onClick={() => setSelectedColor("green")} />
			</div>
		</div>
	);
};

export default Home;