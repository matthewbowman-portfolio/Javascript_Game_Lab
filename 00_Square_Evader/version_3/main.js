//canvas configuration

//get canvas by element
var canvas = document.querySelector("canvas");

//get canvas context
var canvasContext = canvas.getContext("2d");

//set canvas fill color
canvasContext.fillStyle = "(0, 0, 0)";
console.log(canvas.width)

//fill canvas
canvasContext.fillRect(0, 0, canvas.width, canvas.height);

//----------------------------------------------------------------------------------------------------

//create image
var white_box = document.querySelector("#white_box");

//set image position
white_box.position_x = (canvas.width / 2) - 20;
white_box.position_y = (canvas.height / 2) - 20;

//key down trackers
var w_down = false;
var a_down = false;
var s_down = false;
var d_down = false;

//update game variables
function updateGameVariables() {
    //keys down
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
}

//draw game objects
function drawGameObjects() {
    //reset canvas to black
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);

    //draw white box
    canvasContext.drawImage(white_box, white_box.position_x, white_box.position_y);
}

//----------------------------------------------------------------------------------------------------

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
})

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

//----------------------------------------------------------------------------------------------------

;(() => {

    //main function
    function main() {

        //frame sync
        window.requestAnimationFrame(main);
    
        //game loop
        updateGameVariables();
        drawGameObjects();
    }
  
    //run main
    main();

})();

//----------------------------------------------------------------------------------------------------