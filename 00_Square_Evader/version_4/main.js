//canvas configuration
var canvas = document.querySelector("canvas");
var canvasContext = canvas.getContext("2d");

//set canvas fill color
canvasContext.fillStyle = "(0, 0, 0)";

//reset canvas to specified fill color
function resetCanvas() {
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);
}

//----------------------------------------------------------------------------------------------------

//key down trackers
var w_down = false;
var a_down = false;
var s_down = false;
var d_down = false;

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

//update box position
function updatePosition(object) {
    if (w_down === true) { 
        object.position_y -= 3;
        if (object.position_y < 0) {
            object.position_y = 0;
        }
    }
    if (a_down === true) {
        object.position_x -= 3;
        if (object.position_x < 0) {
            object.position_x = 0;
        }
    }
    if (s_down === true) {
        object.position_y += 3;
        if (object.position_y > canvas.height - 40) {
            object.position_y = canvas.height - 40;
        }
    }
    if (d_down === true) {
        object.position_x += 3;
        if (object.position_x > canvas.width - 40) {
            object.position_x = canvas.width - 40;
        }
    }
}

//draw object
function draw(object) {
    canvasContext.drawImage(object.element, object.position_x, object.position_y);
}

//white box
var white_box = {
                    position_x : (canvas.width / 2) - 20,
                    position_y : (canvas.height / 2) - 20,
                    element : document.createElement("img")
}

//set element id and src attributes
white_box.element.id = "white_box";
white_box.element.src = "images/white_box_40x40.png";

//append element to canvas
canvas.appendChild(white_box.element);

//----------------------------------------------------------------------------------------------------

//update game objects
function updateGameObjects() {
    //
    updatePosition(white_box);

}

//draw game objects
function drawGameObjects() {
    //reset canvas
    resetCanvas();

    //draw white box
    draw(white_box);
}

//----------------------------------------------------------------------------------------------------

;(() => {

    //main function
    function main() {

        //frame sync
        window.requestAnimationFrame(main);
    
        //game loop
        //console.log(white_box.position_x + "  " + white_box.position_y);
        updateGameObjects();
        drawGameObjects();
    }
  
    //run main
    main();

})();

//----------------------------------------------------------------------------------------------------