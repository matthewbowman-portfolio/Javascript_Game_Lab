//mouse
import { Mouse } from "./mouse.js"; console.log("Importing Class : %cMouse", "color: rgb(50, 150, 25);");
var mouse = new Mouse(); console.log("Variable Created : %cmouse\n ", "color: rgb(75, 150, 200);");

//keyboard
import { KeyBoard } from "./keyboard.js"; console.log("Importing Class : %cKeyBoard", "color: rgb(50, 150, 25);");
var keyBoard = new KeyBoard(); console.log("Variable Created : %ckeyBoard\n ", "color: rgb(75, 150, 200);");

//canvas
import { Canvas } from "./canvas.js"; console.log("Importing Class : %cCanvas", "color: rgb(50, 150, 25);");
var canvas = new Canvas(); console.log("Variable Created : %ccanvas\n ", "color: rgb(75, 150, 200);");

//start menu
import { StartMenu } from "./start_menu.js"; console.log("Importing Class : %cStartMenu", "color: rgb(50, 150, 25);");
var startMenu = new StartMenu(); console.log("Variable Created : %cstartMenu\n ", "color: rgb(75, 150, 200);");

//----------------------------------------------------------------------------------------------------

//mouse movement
document.addEventListener("mousemove", function(event) {
    mouse.moved = true;
    //console.log("Mouse Moved (" + mouse.moved + ") : x = " + event.clientX + " , y = " + event.clientY);
})

//mouse click
document.addEventListener("click", function(event) {
    mouse.clicked = true;
    mouse.client_x = event.clientX;
    mouse.client_y = event.clientY;
    //set canvas position relative to client position
    //target.offset returns position of document object being clicked
    mouse.canvas_x = event.clientX - event.target.offsetLeft;
    mouse.canvas_y = event.clientY - event.target.offsetTop;

    //log mouse positions
    console.log("\n%cMouse Clicked", "color: rgb(150, 100, 200)");
    console.log("client coordinates : x = " + mouse.client_x + " , y = " + mouse.client_y);
    console.log("canvas coordinates : x = " + mouse.canvas_x + " , y = " + mouse.canvas_y);
})

//----------------------------------------------------------------------------------------------------

//key down
document.addEventListener("keydown", function(event) {
    keyBoard.keydown = true;
    console.log("\n%cKey Down : " + "%c" + event.key, "color: rgb(150, 100, 200)", "color: rgb(225, 225, 150);");
})

//key up
document.addEventListener("keyup", function(event) {
    console.log("%cKey Up : " + "%c" + event.key, "color: rgb(150, 100, 200)", "color: rgb(225, 225, 150);");
})

//----------------------------------------------------------------------------------------------------

//game state  ("start-menu" , "game-live" , "game-paused" , "game-over")
var gameState = "start-menu"

//
export function gameLoop() {
    //reset canvas
    canvas.reset();

    switch (gameState) {
        case "start-menu" :
            startMenu.update(mouse);
            startMenu.display(canvas);
            gameState = startMenu.returnGameState();
            break;
        case "game-live" :
            console.log("game is live");
            break;
        case "game-paused" :
            console.log("game is paused");
            break;
        case "game-over" :
            console.log("game is over");
            break;
    }

    //reset mouse
    mouse.reset();
    //reset keyboard
    keyBoard.reset();
}