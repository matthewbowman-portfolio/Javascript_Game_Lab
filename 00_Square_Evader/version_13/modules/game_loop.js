import { Mouse } from "./mouse.js"; console.log("Importing Class : %cMouse", "color: rgb(50, 150, 25);");
var mouse = new Mouse(); console.log("Variable Created : %cmouse\n ", "color: rgb(75, 150, 200);");
import { KeyBoard } from "./keyboard.js"; console.log("Importing Class : %cKeyBoard", "color: rgb(50, 150, 25);");
var keyBoard = new KeyBoard(); console.log("Variable Created : %ckeyBoard\n ", "color: rgb(75, 150, 200);");
import { Canvas } from "./canvas.js"; console.log("Importing Class : %cCanvas", "color: rgb(50, 150, 25);");
var canvas = new Canvas(); console.log("Variable Created : %ccanvas\n ", "color: rgb(75, 150, 200);");
import { Clock } from "./clock.js"; console.log("Importing Class : %cClock", "color: rgb(50, 150, 25);");
var clock = new Clock(); console.log("Variable Created : %cclock\n ", "color: rgb(75, 150, 200);");
import { Audio } from "./audio.js"; console.log("Importing Class : %cAudio", "color: rgb(50, 150, 25);");
var audio = new Audio(); console.log("Variable Created : %caudio\n ", "color: rgb(75, 150, 200);");
import { StartMenu } from "./start_menu.js"; console.log("Importing Class : %cStartMenu", "color: rgb(50, 150, 25);");
var startMenu = new StartMenu(); console.log("Variable Created : %cstartMenu\n ", "color: rgb(75, 150, 200);");
import { GameOverMenu } from "./game_over_menu.js"; console.log("Importing Class : %cGameOverMenu", "color: rgb(50, 150, 25);");
var gameOverMenu = new GameOverMenu(); console.log("Variable Created : %cgameOverMenu\n ", "color: rgb(75, 150, 200);");
import { Player } from "./player.js"; console.log("Importing Class : %cPlayer", "color: rgb(50, 150, 25);");
var player = new Player(); console.log("Variable Created : %cplayer\n ", "color: rgb(75, 150, 200);");
import { Enemies } from "./enemies.js"; console.log("Importing Class : %cEnemies", "color: rgb(50, 150, 25);");
var enemies = new Enemies(); console.log("Variable Created : %cenemies\n ", "color: rgb(75, 150, 200);");
import { Waves } from "./waves.js"; console.log("Importing Class : %cWaves", "color: rgb(50, 150, 25);");
var waves = new Waves(); console.log("Variable Created : %cwaves\n ", "color: rgb(75, 150, 200);");

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

    // w, a, s, d
    if (event.key === "w") {
        keyBoard.w_down = true;
    }
    if (event.key === "a") {
        keyBoard.a_down = true;
    }
    if (event.key === "s") {
        keyBoard.s_down = true;
    }
    if (event.key === "d") {
        keyBoard.d_down = true;
    }

    // up, down, left, right
    if (event.key === "ArrowUp") {
        keyBoard.arrow_up = true;
    }
    if (event.key === "ArrowDown") {
        keyBoard.arrow_down = true;
    }
    if (event.key === "ArrowLeft") {
        keyBoard.arrow_left = true;
    }
    if (event.key === "ArrowRight") {
        keyBoard.arrow_right = true;
    }

    console.log("\n%cKey Down : " + "%c" + event.key, "color: rgb(150, 100, 200)", "color: rgb(225, 225, 150);");
})

//key up
document.addEventListener("keyup", function(event) {

    // w, a, s, d
    if (event.key === "w") {
        keyBoard.w_down = false;
    }
    if (event.key === "a") {
        keyBoard.a_down = false;
    }
    if (event.key === "s") {
        keyBoard.s_down = false;
    }
    if (event.key === "d") {
        keyBoard.d_down = false;
    }

    // up, down, left, right
    if (event.key === "ArrowUp") {
        keyBoard.arrow_up = false;
    }
    if (event.key === "ArrowDown") {
        keyBoard.arrow_down = false;
    }
    if (event.key === "ArrowLeft") {
        keyBoard.arrow_left = false;
    }
    if (event.key === "ArrowRight") {
        keyBoard.arrow_right = false;
    }

    console.log("%cKey Up : " + "%c" + event.key, "color: rgb(150, 100, 200)", "color: rgb(225, 225, 150);");
})

//----------------------------------------------------------------------------------------------------

//volume slider input
audio.volumeSlider.addEventListener("input", function(event) {
    //volume must be a number between 0 and 1
    audio.element.volume = event.target.value / 100;
})

//----------------------------------------------------------------------------------------------------

//game state  ("start-menu" , "game-live" , "game-paused" , "game-over")
var gameState = "start-menu"

//game loop
export function gameLoop() {
    //reset canvas
    canvas.reset();
    //update clock
    clock.update();
    clock.display();

    //
    console.log(`Game State : ${gameState}\nPlayer Health : ${player.health}\nPlayer Score : ${Math.floor(player.score/10)}\nWave : ${waves.current_wave}`);

    switch (gameState) {
        case "start-menu" :
            startMenu.update(mouse, audio);
            startMenu.display(canvas);
            gameState = startMenu.returnGameState();
            break;
        case "game-live" :
            //player
            player.update(mouse, keyBoard, audio, gameOverMenu);
            player.display(canvas);
            gameState = player.returnGameState();

            //enemies
            enemies.update(canvas, player);
            enemies.display(canvas);

            //waves
            waves.update(player, enemies);

            break;
        case "game-over" :
            gameOverMenu.update(mouse, audio, player, enemies, waves);
            gameOverMenu.display(canvas);
            gameState = gameOverMenu.returnGameState();
            break;
    }

    //reset mouse
    mouse.reset();
}