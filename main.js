var harrypotterremix;
var peterpansong;

function preload() {
    harrypotterremix = loadSound("AI MUSIC/music.mp3");
    peterpansong = loadSound("AI MUSIC/music2.mp3")
}

function setup() {
    cam = createCapture(VIDEO);
    cam.size(1000, 800);
    cam.hide();
    canvas = createCanvas(1000, 800);
    canvas.position(775, 400);
}

function draw() {
    image(cam, 0, 0, 1000, 800);
    filter(GRAY);
}