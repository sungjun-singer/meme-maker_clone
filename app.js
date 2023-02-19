const modeBtn = document.getElementById("mode-btn");
const destroyBtn = document.getElementById("destroy-btn");
const eraseBtn = document.getElementById("erase-btn");
const colorOption = Array.from(
    document.getElementsByClassName("color-option")
); // 그냥 클래스를 가져온다면 HTMLCollection으로 나오기 때문에 Array.from으로 배열로 변경시킴
const color = document.querySelector("#color"); // id가 color인 것 가져옴 (input type="color")
const lineWidth = document.querySelector("#line-width"); // id가 line-width인 것 가져옴 (input type="range")
const canvas = document.querySelector("canvas"); // canvas태그를 가져옴
const ctx = canvas.getContext("2d") // canvas.getContext를 사용해서 렌더링 컨텍스트를 가져와 여라가지 드로잉을 가능하게 함.

const CANVAS_WIDTH = 500;
const CANVAS_HEIGHT = 500;

canvas.width = CANVAS_WIDTH; // 가로길이 500
canvas.height = CANVAS_HEIGHT; // 세로길이 500
ctx.lineWidth = lineWidth.value; // 붓의 굵기는 lineWidth의 슬라이드의 값.
let isPainting = false; // 잉크가 나오는지 안나오는지 결정하기 위한 변수 생성
let fillingMode = true;

function onMove(event){ // 마우스를 이동하면서 그릴수 있게 하는 함수
    if(isPainting){ // isPainting이 true일때 동작
        ctx.lineTo(event.offsetX, event.offsetY); //lineTo를 활용해 투명한 선이 그어지게끔하고
        ctx.stroke(); // 잉크를 나오게한다.
        return;
    }
    ctx.beginPath(); // 선의 색깔이나 굵기를 변경했을때 이미 그어진 선까지 변경되는 것을 막기위한 코드.
    ctx.moveTo(event.offsetX, event.offsetY); // moveTo를 활용해 커서 위치만 바뀌게한다.
}

function startPainting(){ // onmousedown일때 실행하는 함수
    isPainting = true; // 잉크가 나오게한다.
}

function cancelPainting(){ // onmouseup일때 실행하는 함수
    isPainting = false; // 잉크가 안나오게 한다.
}

function onLineWidthChange(event){ // change이벤트일때 실행하는 함수
    ctx.lineWidth = event.target.value // 선의 굵기를 슬라이드가 변한 값으로 지정한다.
}

function onColorChange(event){ // color를 눌렀을때 색이 변경되게 하는 함수
    setColor(event);
}

function onColorClick(event){ // 팔레트를 눌렀을때 색이 변경되게 하는 함수
    setColor(event);
}
    
function setColor(event){ // 색을 변경하는 함수.
    const colorValue = event.target.dataset.color;
    const value = event.target.value;
    
    if(colorValue === undefined){ // 팔레트를 안눌렀을때는 color로 색깔변경.
        ctx.strokeStyle = value;
        ctx.fillStyle = value;
        color.value =value
    }else{ // 팔레트로 눌렀을때는 팔레트 색깔로 변경.
        ctx.strokeStyle = colorValue;
        ctx.fillStyle = colorValue;
        color.value = colorValue;
    }
}

function onModeClick(event){
    if(fillingMode){
        fillingMode = false;
        modeBtn.innerText = "Stroke"
    }else{
        fillingMode = true;
        isPainting = false;
        modeBtn.innerText = "Fill"
    }
}

function onCanvasClick(){
    if(fillingMode){
        ctx.fillRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    }
}

function onDestroyClick(){
    ctx.fillStyle = "white";
    ctx.fillRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
}

function onEraseClick(){
    ctx.strokeStyle = "white";
    ctx.stroke();
}

canvas.addEventListener("click", onCanvasClick);
canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting) // 마우스를 누른 상태로 캔버스를 떠나고 마우스를 떼고 캔버스로 돌아왔을때 선이 그이지는 것을 막기 위한 코드.

lineWidth.addEventListener("change", onLineWidthChange);
color.addEventListener("change", onColorChange);

colorOption.forEach((color) => {
    color.addEventListener("click", onColorClick);
})

modeBtn.addEventListener("click", onModeClick);
destroyBtn.addEventListener("click", onDestroyClick);
eraseBtn.addEventListener("click", onEraseClick);