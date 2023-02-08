let inputColor1 = document.querySelector(".color1");
let inputColor2 = document.querySelector(".color2");
let css = document.querySelector("h3");
let body = document.getElementById("gradient");
let button = document.querySelector("button");
css.textContent = getComputedStyle(body).getPropertyValue('--start-background');


const changeBackground = () => {
	body.style.background = "linear-gradient( to right, " + inputColor1.value + ", " + inputColor2.value + ")";
	css.textContent = body.style.background + ";";
};

const randomHex = () => {
	return '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0'); // found on stack overflow
}


inputColor1.addEventListener("input", changeBackground);
inputColor2.addEventListener("input", changeBackground);
button.addEventListener("click", () => {
	inputColor1.value = randomHex();
	inputColor2.value = randomHex();
	body.style.background = changeBackground();
});
