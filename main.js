

var canvas = document.querySelector('canvas');
var cxt = canvas.getContext('2d');

var clickX = new Array();
var clickY = new Array();
var clickDrag = new Array();
var paint;



test();








function test(){
	for(var i=0; i < 90; i++) 
		addClick(i,i,true);

	draw();
}

function addClick(x, y, dragging){
	clickX.push(x);
	clickY.push(y);
	clickDrag.push(dragging);
}

function draw(){
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