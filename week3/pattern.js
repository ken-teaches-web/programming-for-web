function setup() {
    createCanvas(600, 600);
}
function createTile(originX, originY, primaryColor, 
secondaryColor, circleOutlineColor, dotColor) {
    translate(originX, originY);
    fill(secondaryColor);
    rect(0, 0 ,200, 200);
    stroke(secondaryColor);
    strokeWeight(5);
    line(0, 0, 200, 200);
    line(200, 0, 0, 200);
    noStroke();
    fill(dotColor);
    rect(50, 50, 100);
    circle(100, 50, 50);
    circle(50, 100, 50);
    circle(150, 100, 50);
    circle(100, 150, 50);
    stroke(circleOutlineColor);
    strokeWeight(5);


}

function draw(){
    createTile(0,0,'green', 'pink', 'cyan', 'magenta');
    createTile(0,200,'green', 'yellow', 'cyan', 'green');
    createTile(0,200,'green', 'pink', 'cyan', 'magenta');
    createTile(200,-400,'green', 'yellow', 'cyan', 'green');
    createTile(0,200, 'green', 'pink', 'cyan', 'magenta');
    createTile(0,200, 'green', 'yellow', 'cyan', 'green');
    createTile(200,-400,'green', 'pink', 'cyan', 'magenta');
    createTile(0,200, 'green', 'yellow', 'cyan', 'green');
    createTile(0,200, 'green', 'pink', 'cyan', 'magenta');
}