var colors = "fbf8cc-fde4cf-ffcfd2-f1c0e8-cfbaf0-a3c4f3-90dbf4-8eecf5-98f5e1-b9fbc0".split("-").map(a=>"#"+a)
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
}

function draw() {
	blendMode(SCREEN)
	fill(colors[frameCount%colors.length])
	ellipse(random(0,width),random(0,height),random(0,100))


}
function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}