

var canvas = document.querySelector('canvas');
var cxt = canvas.getContext('2d');

var clickX = new Array();
var clickY = new Array();
var clickDrag = new Array();
var painting;

canvas.addEventListener('mousedown', startPaint);
canvas.addEventListener('mousemove', paint);










function paint(){
	var mouseX = event.clientX - this.offsetLeft;
	var mouseY = event.clientY - this.offsetTop;

	if(painting){
		addClick(mouseX, mouseY);
		updateCanvas();
	}

}

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
}

function updateCanvas(){
	cxt.clearRect(0, 0, cxt.canvas.width, cxt.canvas.height);

	cxt.strokeStyle = "#000000";
	cxt.lineJoin = "round";
	cxt.lineWidth = 5;

	for(var i=0; i < clickX.length; i++) {		
    	cxt.beginPath();

	    if(clickDrag[i] && i){
			cxt.moveTo(clickX[i-1], clickY[i-1]);
		}else{
			cxt.moveTo(clickX[i]-1, clickY[i]);
		}

		cxt.lineTo(clickX[i], clickY[i]);
		cxt.closePath();
		cxt.stroke();
  	}
}