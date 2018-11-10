

var canvas = document.querySelector('canvas');
var cxt = canvas.getContext('2d');

var clickX = new Array();
var clickY = new Array();
var clickDrag = new Array();
var clickColor = new Array();
var clickSize = new Array();

var painting;

var colorPurple = "#cb3594";
var colorGreen = "#659b41";
var colorYellow = "#ffcf33";
var colorBrown = "#986928";

var curColor = colorGreen;
var curSize = "small";
var radius = 18;

canvas.addEventListener('mousedown', startPaint);
canvas.addEventListener('mousemove', paint);
canvas.addEventListener('mouseup', endPaint);
canvas.addEventListener('mouseleave', endPaint);










function paint(){
	var mouseX = event.clientX - this.offsetLeft;
	var mouseY = event.clientY - this.offsetTop;

	if(painting){
		addClick(mouseX, mouseY);
		updateCanvas();
	}

}

function endPaint(){ painting = false; }

function startPaint(event){
	var mouseX = event.clientX - this.offsetLeft;
	var mouseY = event.clientY - this.offsetTop;

	painting = true;

	addClick(mouseX, mouseY);
	updateCanvas();
}

function addClick(x, y, dragging){
	clickX.push(x);
	clickY.push(y);
	clickDrag.push(dragging);
	clickColor.push(curColor);
	clickSize.push(curSize);
}

function updateCanvas(){
	cxt.clearRect(0, 0, cxt.canvas.width, cxt.canvas.height);

	cxt.lineJoin = "round";

	for(var i=0; i < clickX.length; i++) {		
    	cxt.beginPath();

	    if(clickDrag[i] && i){
			cxt.moveTo(clickX[i-1], clickY[i-1]);
		}else{
			cxt.moveTo(clickX[i]-1, clickY[i]);
		}

		cxt.lineTo(clickX[i], clickY[i]);
		cxt.closePath();
		cxt.strokeStyle = clickColor[i];
		cxt.lineWidth = radius;
		cxt.stroke();
  	}
}