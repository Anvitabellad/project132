status = "";

function preload()
{
    img = loadImage('Airpods.jpg');
}

function setup()
{
    canvas = createCanvas(620, 420);

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status = Detecting Object"
}

function modelLoaded()
{
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}


