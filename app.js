const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d")
canvas.width = 800;
canvas.height = 800;

const RAND_NUM = Math.floor(Math.random() * 800);
let coord_x = 0;
let coord_y = 0;

const colors = [
    "#ff3838",
    "#ffb8b8",
    "#c56cf0",
    "#ff9f1a",
    "#fff200",
    "#32ff7e",
    "#7efff5",
]

function onMouse(event){ // 마우스 이동했을때 동작하는 함수
    ctx.beginPath(); // 경로시작.
    ctx.moveTo(coord_x, coord_y); // 전역변수 coord_x, coord_y에서 시작.
    const color = colors[Math.floor(Math.random() * colors.length)]; // 칼라는 칼라배열에서 하나 가져오고.
    ctx.strokeStyle = color; // 선 색깔 가져온 칼라로 지정.
    ctx.lineTo(event.offsetX, event.offsetY); // 현재x좌표,y좌표로 선 이동.
    ctx.stroke(); // 선 긋기.
}

function onClick(event){
    coord_x = event.offsetX;
    coord_y = event.offsetY;
}

canvas.addEventListener("click", onClick);
canvas.addEventListener("mousemove", onMouse);