//canvas configuration

//get canvas by element
var canvas = document.querySelector("canvas");

//get canvas context
var canvasContext = canvas.getContext("2d");

//set canvas width and height
var canvas_width = 640;
var canvas_height = 520;

//set canvas fill color
canvasContext.fillStyle = "(0, 0, 0)";

//fill canvas
canvasContext.fillRect(0, 0, canvas_width, canvas_height);

//create image
var white_box = document.querySelector("#white_box")

//set image position
white_box.position_x = 20
white_box.position_y = 20

//draw image on canvas
canvasContext.drawImage(white_box, 20, 20);

//----------------------------------------------------------------------------------------------------

//draw box function
function drawBox() {
    canvasContext.fillRect(0, 0, canvas_width, canvas_height);
    canvasContext.drawImage(white_box, white_box.position_x, white_box.position_y);
}

//key trackers
var w_down = false;
var a_down = false;
var s_down = false;
var d_down = false;

w_down.addEventListener()

//keydown event listener
document.addEventListener("keydown", function(event) {

    //log event key
    console.log(event.key + " key : down");

    //set key down status
    if (event.key === "w") {
        w_down = true;
    }
    if (event.key === "a"){
        a_down = true;
    }
    if (event.key === "s") {
        s_down = true;
    }
    if (event.key === "d") {
        d_down = true;
    }

    //update box position and draw
    if (w_down === true) {
        white_box.position_y -= 3;
    }
    if (a_down === true) {
        white_box.position_x -= 3;
    }
    if (s_down === true) {
        white_box.position_y += 3;
    }
    if (d_down === true) {
        white_box.position_x += 3;
    }

    //draw box
    drawBox();
})

//----------------------------------------------------------------------------------------------------

//keyup event listener
document.addEventListener("keyup", function(event) {

    //log event key
    console.log(event.key + " key : up");

    //set key down status
    if (event.key === "w") {
        w_down = false;
    }
    if (event.key === "a"){
        a_down = false;
    }
    if (event.key === "s") {
        s_down = false;
    }
    if (event.key === "d") {
        d_down = false;
    }
})