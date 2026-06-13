import "./styles.css";

import home from "./home.js";
import menu from "./menu.js";
import about from "./about.js";

const buttons = document.querySelectorAll("header button");
const content = document.querySelector("#content");

buttons.forEach((button) => {
	button.addEventListener("click", () => {
		buttons.forEach((button) => {
			button.classList.remove("selected");
		});
		button.classList.add("selected");

		const tab = button.textContent;

		switch (tab) {
			case "Home":
				break;
			case "Menu":
				break;
			case "About":
				break;
		}
	});
});
