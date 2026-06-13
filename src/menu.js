import krabbyPattyImage from "./krabby-patty.webp";
import krabbyPattyDeluxeImage from "./krabby-patty-deluxe.webp";
import jellyPattyImage from "./jelly-patty.webp";
import krabbyFriesImage from "./krabby-fries.webp";
import milkshakeImage from "./milkshake.webp";

const content = document.querySelector("#content");

function menu() {
	content.innerHTML = "";

	content.append(
		createCard(
			krabbyPattyImage,
			"Krabby Patty",
			"The signature dish of the Krusty Krab, and the most beloved hamburger in Bikini Bottom. We won't tell you whats in it or you'll figure out me secret formula!",
		),
	);

	content.append(
		createCard(
			krabbyPattyDeluxeImage,
			"Krabby Patty Deluxe",
			"The Krabby Patty Deluxe is a variation of the Krabby Patty with double the patties!",
		),
	);

	content.append(
		createCard(
			jellyPattyImage,
			"Jelly Patty",
			"Just like the Krabby Patty but with extra Jelly - hmmm. jelly captured from Jellyfish by our chef Spongebob.",
		),
	);

	content.append(
		createCard(
			krabbyFriesImage,
			"Krabby Fries",
			"Surely you want fries with that Krabby Patty? No? - Donate that money to Mr Krabs anyway, har har har.",
		),
	);

	content.append(
		createCard(
			milkshakeImage,
			"Milkshake",
			"A nice milkshake to wash down all those Krabby Patiies - don't forget to come back and buy another!",
		),
	);
}

export default menu;

function createCard(image, title, description) {
	const item = document.createElement("div");
	item.classList.add("card");

	const itemImg = document.createElement("img");
	itemImg.setAttribute("src", image);
	item.append(itemImg);

	const itemInfo = document.createElement("div");

	const itemTitle = document.createElement("h3");
	itemTitle.textContent = title;
	itemInfo.append(itemTitle);

	const itemDesc = document.createElement("p");
	itemDesc.textContent = description;
	itemInfo.append(itemDesc);

	item.append(itemInfo);
	return item;
}
