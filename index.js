let canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

c.canvas.width = window.innerWidth;
c.canvas.height = window.innerHeight;

var FrameCount = 0;

function handlerFunction(initialBgColor) {
	let randomNum = Math.abs(Math.cos(FrameCount));
	if (initialBgColor) {
		c.fillStyle = "rgb(" + initialBgColor + ")";
	} else {
		c.fillStyle = "rgb(" + randomNum * 255 + " " + randomNum * 30 + " " + "0 / " + 25 + "%)";
	}
	c.fillRect(0,0,c.canvas.width, c.canvas.height);
}

let intervalID = setInterval(handlerFunction, 455)

const loop = function () {
	c.fillStyle = "red";
	for (let i=0; i < 100; i++) {
		for (let j=0; j < 100; j++) {

		c.fillRect(i * 200 + Math.random() * 100, j * 200 + Math.random() * 100, Math.abs(Math.sin(FrameCount)) * 100, Math.abs(Math.sin(FrameCount)) * 100);
		}
	}
	window.requestAnimationFrame(loop);
	FrameCount++;
}

handlerFunction("0 0 0");
loop();




