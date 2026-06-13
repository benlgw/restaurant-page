const content = document.querySelector("#content");

function about() {
	content.innerHTML = "";

	const speech = document.createElement("p");
	speech.innerHTML = `
        Ahoy there! I'm Eugene H. Krabs, the owner of the world famous Krusty Krab! I built this establishment from the ground up with nothing but me own two claws and a burning passion for money - I mean, Krabby Patties, har har har!
        <br><br>
        Every patty is cooked with love, care, and me secret formula that I will take to me grave before I ever let that slimy Plankton get his hands on it!
        <br><br>
        So come and enjoy the finest food in all of Bikini Bottom.
        <br><br>
        You can find us at:
        <br>831 Bottom Feeder Lane,
        <br>Bikini Bottom,
        <br>Pacific Ocean `;

	content.append(speech);
}

export default about;
