let canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

c.canvas.width = window.innerWidth;
c.canvas.height = window.innerHeight;

var FrameCount = 0;
var specialOne = 0;

function handlerFunction() {
	c.fillStyle = "black";
	c.fillRect(0,0,c.canvas.width, c.canvas.height);
}

// let intervalID = setInterval(handlerFunction, 411)

const loop = function () {
	if (FrameCount % 5 == 0 )
	{
		c.fillStyle = "red";
		for (let i=0; i < 100; i++) {
			for (let j=0; j < 100; j++) {

			c.fillRect(i * 200 + Math.random() * 100, j * 200 + Math.random() * 100, Math.abs(Math.sin(FrameCount)) * 100, Math.abs(Math.sin(FrameCount)) * 100);
			}
		}

		c.fillStyle = "black";
		for (let i=0; i < 100; i++) {
			for (let j=0; j < 100; j++) {

			c.fillRect(i * 200 + Math.random() * 100, j * 200 + Math.random() * 100, Math.abs(Math.sin(FrameCount)) * 100, Math.abs(Math.sin(FrameCount)) * 100);
			}
		}
	
	}
	window.requestAnimationFrame(loop);
	FrameCount++;
	
	console.log(FrameCount);
}

loop();




