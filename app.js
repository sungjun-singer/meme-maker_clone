const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d")
canvas.width = 800;
canvas.height = 800;

ctx.fillRect(200, 200, 15, 100);
ctx.fillRect(360, 200, 15, 100);
ctx.fillRect(260, 200, 60, 200);

ctx.arc(292, 125, 50, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.arc(270, 105, 10, Math.PI, 2*Math.PI);
ctx.arc(314, 105, 10, Math.PI, 2*Math.PI);
ctx.fillStyle = "white";
ctx.fill();

ctx.beginPath();
ctx.arc(292, 135, 30, 0, Math.PI);
ctx.fill();