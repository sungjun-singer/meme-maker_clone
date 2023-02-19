const colorOption = Array.from(
    document.getElementsByClassName("color-option")
);
const color = document.querySelector("#color");
const lineWidth = document.querySelector("#line-width");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d")
canvas.width = 500;
canvas.height = 500;
ctx.lineWidth = lineWidth.value;
let isPainting = false;
function onMove(event){
    if(isPainting){
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
        return;
    }
    ctx.beginPath();
    ctx.moveTo(event.offsetX, event.offsetY);
}

function startPainting(){
    isPainting = true;
}

function cancelPainting(){
    isPainting = false;
}

function onLineWidthChange(event){
    ctx.lineWidth = event.target.value
}

function onColorChange(event){
    setColor(event);
}

function onColorClick(event){
    setColor(event);
}
    
function setColor(event){
    const colorValue = event.target.dataset.color;
    const value = event.target.value;
    if(colorValue === undefined){
        ctx.strokeStyle = value;
        ctx.fillStyle = value;
    }else{
        ctx.strokeStyle = colorValue;
        ctx.fillStyle = colorValue;
    }
}



canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting)

lineWidth.addEventListener("change", onLineWidthChange);
color.addEventListener("change", onColorChange);

colorOption.forEach((color) => {
    color.addEventListener("click", onColorClick);
})