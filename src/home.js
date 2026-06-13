import mrCrabs from "./mr-crabs.png";

const content = document.querySelector("#content");

function home() {
	content.innerHTML = "";

	const image = document.createElement("img");
	image.setAttribute("src", mrCrabs);

	const speech = document.createElement("p");
	speech.innerHTML = `Ahoy there, welcome to the Krusty Krab - this finest establishment in all of Bikini Bottom, har har har! We serve only the freshest Krabby Patties, made with me own secret formula.
        <br><br>-P.S. We have a deal on just for new customers! Buy 1 Krabby Patty... and get 1 full price - har har har!`;

	content.append(image);
	content.append(speech);
}

export default home;
