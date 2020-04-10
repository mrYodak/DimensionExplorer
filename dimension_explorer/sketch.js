var dropzone;
let img;
let wait=0;
let frame=0;

function preload() {	
}

function setup() {
  createCanvas(5, 5);
  background(100);
  frameRate(10);
  dropzone = select('#dropzone');
  dropzone.dragOver(highlight);
  dropzone.dragLeave(unhighlight);
  dropzone.drop(gotFile, unhighlight);  
}

function gotFile(file){
    img=loadImage(file.data);
	wait=2;
	}

function draw(){
	if (wait>=1){	
	if (frame<img.width){
	resizeCanvas(img.width,img.height);  
	console.log(width);
	let imgsize=img.width*img.height*4;
    loadPixels();
	img.loadPixels();
  	for (let i = 0; i < imgsize+4; i+=4) {    
	pixels[i] = img.pixels[floor(i/(img.width*4))*width*4+frame*4];
	pixels[i+1] = img.pixels[floor(i/(img.width*4))*width*4+frame*4+1];
	pixels[i+2] = img.pixels[floor(i/(img.width*4))*width*4+frame*4+2];
	pixels[i+3] = img.pixels[floor(i/(img.width*4))*width*4+frame*4+3];
    }	
	img.updatePixels();
	updatePixels();
	frame++;
	} else{
	frame=0;
	}
	} else{}
}

function highlight() {
  dropzone.style('background-color', '#ccc');
}

function unhighlight() {
  dropzone.style('background-color', '#fff');
}