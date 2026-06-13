import "./styles.css";
import home from "./home.js";

const buttons = document.querySelectorAll("header button");

buttons.forEach((button) => {
	button.addEventListener("click", () => {
		console.log(button);
	});
});
