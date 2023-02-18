const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d")
canvas.width = 800;
canvas.height = 800;

let RAND_NUM = 0;

setInterval(() => {
    RAND_NUM = Math.floor(Math.random() * 800);
    console.log(RAND_NUM);
},3000);

const colors = [
    "#ff3838",
    "#ffb8b8",
    "#c56cf0",
    "#ff9f1a",
    "#fff200",
    "#32ff7e",
    "#7efff5",
]

function onMouse(event){
    ctx.beginPath();
    ctx.moveTo(RAND_NUM,RAND_NUM);
    const color = colors[Math.floor(Math.random() * colors.length)];
    ctx.strokeStyle = color;
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
}

canvas.addEventListener("mousemove", onMouse);
