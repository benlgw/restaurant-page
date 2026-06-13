import "./styles.css";

import home from "./home.js";
import menu from "./menu.js";
import about from "./about.js";

const buttons = document.querySelectorAll("header button");
const content = document.querySelector("#content");

home();

buttons.forEach((button) => {
	button.addEventListener("click", () => {
		buttons.forEach((button) => {
			button.classList.remove("selected");
		});
		button.classList.add("selected");

		const tab = button.textContent;

		switch (tab) {
			case "Home":
				content.classList.remove("menu", "about");
				content.classList.add("home");
				home();
				break;
			case "Menu":
				content.classList.remove("home", "about");
				content.classList.add("menu");
				menu();
				break;
			case "About":
				content.classList.remove("home", "menu");
				content.classList.add("about");
				about();
				break;
		}
	});
});
