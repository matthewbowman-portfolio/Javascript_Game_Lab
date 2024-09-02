//game state
var game_state = "game-loop"

//canvas configuration
var canvas = document.querySelector("canvas");
var canvasContext = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 608;

//set canvas fill color
canvasContext.fillStyle = "(0, 0, 0)";

//reset canvas to specified fill color
function resetCanvas() {
    canvasContext.fillStyle = "(0, 0, 0)";
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);
}

//----------------------------------------------------------------------------------------------------

//clock class
class Clock {
    constructor() {
        this.timestamp = new Date();
        this.hours = this.timestamp.getHours();
        this.minutes = this.timestamp.getMinutes();
        this.seconds = this.timestamp.getSeconds();
        this.hours_string = toString(this.hours);
        this.minutes_string = toString(this.minutes);
        this.seconds_string = toString(this.seconds);
        this.element = document.querySelector(".clock");
    }

    //update time
    update() {
        this.timestamp = new Date();
        this.hours = this.timestamp.getHours();
        this.minutes = this.timestamp.getMinutes();
        this.seconds = this.timestamp.getSeconds();
        this.hours_string = this.hours.toString();
        this.minutes_string = this.minutes.toString();
        this.seconds_string = this.seconds.toString();

        //catch and correct numbers under 10 to be formatted with '0' at the beginning
        if (this.hours < 10) {
            this.hours_string = ("0" + this.hours_string);
        }
        if (this.minutes < 10) {
            this.minutes_string = ("0" + this.minutes_string);
        }
        if (this.seconds < 10) {
            this.seconds_string = ("0" + this.seconds_string);
        }
    }

    display() {
        this.element.innerHTML = (this.hours_string + "." + this.minutes_string + "." + this.seconds_string);
    }
}

//clock
var clock = new Clock();

//----------------------------------------------------------------------------------------------------

//audio
var audio = document.querySelector("audio");
audio.volume = 0.27;
audio.loop = true;

//volume slider
var volumeSlider = document.querySelector(".volume-slider");
volumeSlider.addEventListener("input", function(event) {
    //volume must be a number between 0 and 1
    audio.volume = event.target.value / 100;
})

//----------------------------------------------------------------------------------------------------

//key down trackers
var w_down = false;
var a_down = false;
var s_down = false;
var d_down = false;

//keydown event listener
document.addEventListener("keydown", function(event) {
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

//player class
class Player {
    constructor() {
        this.health = 3;
        this.speed = 3;
        this.hittable = true;
        this.width = 32;
        this.height = 32;
        this.position_x = (canvas.width / 2) - (this.width / 2);
        this.position_y = (canvas.height / 2) - (this.width / 2);
        this.left = this.position_x;
        this.right = this.position_x + (this.width - 1);
        this.top = this.position_y;
        this.bottom = this.position_y + (this.height - 1);
        this.element = document.createElement("img");
        this.element.id = "white-square";
        this.element.src = "images/white-square-32px.png";

        //append element to canvas
        canvas.appendChild(this.element);
    }

    //get rect
    getRect() {
        //update top, bottom, left, right
        this.top = this.position_y;
        this.bottom = this.position_y + (this.height - 1);
        this.left = this.position_x;
        this.right = this.position_x + (this.width - 1);
    }

    //update
    update() {
        //if player health <= 0 then game over
        if (this.health <= 0) {
            game_state = "game-over"
        }

        //if key down, move player
        if (w_down === true) { 
            this.position_y -= this.speed;
        }
        if (a_down === true) {
            this.position_x -= this.speed;
        }
        if (s_down === true) {
            this.position_y += this.speed;
        }
        if (d_down === true) {
            this.position_x += this.speed;
        }
        //update top, bottom, left, right
        this.getRect();

        //stop player if collides with boundary, if player goes out then put them back in bounds
        if (this.top < 0) {
            this.position_y = 0;
        }
        if (this.bottom > canvas.height) {
            this.position_y = canvas.height - this.height;
        }
        if (this.left < 0) {
            this.position_x = 0;
        }
        if (this.right > canvas.width) {
            this.position_x = canvas.width - this.width;
        }
        //update top, bottom, left, right
        this.getRect();
    }

    //draw player
    draw() {
        canvasContext.drawImage(this.element, this.position_x, this.position_y);
        console.log(this.position_x + " " + this.position_y)
    }
}

//create player object
var player = new Player();

//----------------------------------------------------------------------------------------------------

//red square class
class RedSquare {
    constructor(health) {
        this.health = health;
        this.speed = 3;
        this.hittable = true;
        this.position_x = (canvas.width / 2) - 200;
        this.position_y = (canvas.height / 2) - 200;
        this.width = 16;
        this.height = 16;
        this.left = this.position_x;
        this.right = this.position_x + (this.width - 1);
        this.top = this.position_y;
        this.bottom = this.position_y + (this.height - 1);
        this.element = document.createElement("img");
        this.element.id = "red-square";
        this.element.src = "images/red-square-16px.png";
        //append element to canvas
        canvas.appendChild(this.element);

        //moving trackers
        this.movingUp = false;
        this.movingDown = false;
        this.movingLeft = false;
        this.movingRight = false;

        //starting direction
        this.movingUp = true;
        this.movingLeft = true;
    }

    //get rect
    getRect() {
        //update top, bottom, left, right
        this.top = this.position_y;
        this.bottom = this.position_y + (this.height - 1);
        this.left = this.position_x;
        this.right = this.position_x + (this.width - 1);
    }

    //update
    update() {
        //update position
        if (this.movingUp === true) {
            this.position_y -= this.speed;
        }
        if (this.movingDown === true) {
            this.position_y += this.speed;
        }
        if (this.movingLeft === true) { 
            this.position_x -= this.speed;
        }
        if (this.movingRight === true) {
            this.position_x += this.speed;
        }
        //update top, bottom, left, right
        this.getRect();

        //change direction and decrease health if enemy collides with boundary
        if (this.top < 0) {
            this.position_y = 0;
            this.movingUp = false;
            this.movingDown = true;
            this.health -= 1;
        }
        if (this.bottom > canvas.height) {
            this.position_y = canvas.height - this.height;
            this.movingDown = false;
            this.movingUp = true;
            this.health -= 1;
        }
        if (this.left < 0) {
            this.position_x = 0;
            this.movingLeft = false;
            this.movingRight = true;
            this.health -= 1;
        }
        if (this.right > canvas.width) {
            this.position_x = canvas.width - this.width;
            this.movingRight = false;
            this.movingLeft = true;
            this.health -= 1;
        }
        //update top, bottom, left, right
        this.getRect();

        //change direction and decrease player and enemy health if enemy collides with player
        //
        //from bottom
        if (this.top <= player.bottom && this.top >= player.bottom - 3) {
            if (this.left <= player.right - 3 && this.right >= player.left + 3) {
                if (this.hittable === true) {
                    console.log("Player Hit from Bottom");
                    this.position_y = player.bottom + 3;
                    this.hittable = false;
                    this.movingUp = false;
                    this.movingDown = true;
                    this.health -= 1;
                    player.health -= 1;

                    //
                    setTimeout(() => {
                        this.hittable = true;
                    }, 100);
                }
            }
        }
        //from top
        if (this.bottom >= player.top && this.top <= player.top + 3) {
            if (this.left <= player.right - 3 && this.right >= player.left + 3) {
                if (this.hittable === true) {
                    console.log("Player Hit from Top");
                    this.position_y = player.top - this.height - 3;
                    this.hittable = false;
                    this.movingDown = false;
                    this.movingUp = true;
                    this.health -= 1;
                    player.health -= 1;

                    //
                    setTimeout(() => {
                        this.hittable = true;
                    }, 100);
                }
            }
        }
        //from right
        if (this.left <= player.right && this.left >= player.right - 3) {
            if (this.bottom >= player.top + 3 && this.top <= player.bottom - 3) {
                if (this.hittable === true) {
                    console.log("Player Hit from Right");
                    this.position_x = player.right + 3;
                    this.hittable = false;
                    this.movingLeft = false;
                    this.movingRight = true;
                    this.health -= 1;
                    player.health -= 1;

                    //
                    setTimeout(() => {
                        this.hittable = true;
                    }, 100);
                }
            }
        }
        //from left
        if (this.right >= player.left && this.right <= player.left + 3) {
            if (this.bottom >= player.top + 3 && this.top <= player.bottom - 3) {
                if (this.hittable === true) {
                    console.log("Player Hit from Left");
                    this.position_x = player.left - this.width - 3;
                    this.hittable = false;
                    this.movingRight = false;
                    this.movingLeft = true;
                    this.health -= 1;
                    player.health -= 1;

                    //
                    setTimeout(() => {
                        this.hittable = true;
                    }, 100);
                }
            }
        }
        //update top, bottom, left, right
        this.getRect();
    }

    //draw enemy
    draw() {
        canvasContext.drawImage(this.element, this.position_x, this.position_y);
    }
}

//enemies class
class Enemies {
    constructor() {
        this.array = [];
    }

    //
    spawn_red_squares(waveType, numSquares, speed, health) {
        //
        switch (waveType) {
            case 1 :
                for (let i = 1; i < numSquares + 1; i++) {
                    setTimeout(() => {
                        console.log(i + " red square spawned");
                        this.array.push(new RedSquare(health));
                    }, (speed) * i);
                }
            case 2 :
                
        }
    }

    update() {

        //check all enemies
        for (let i = 0; i < this.array.length; i++) {
            //update
            this.array[i].update();
            
            //if health <= 0, remove enemy from array
            if (this.array[i].health <= 0) {
                this.array.splice(i, 1);
            }
        }
    }

    draw() {
        //
        for (let i = 0; i < this.array.length; i++) {
            this.array[i].draw();
        }
    }
}

//create enemies object
var enemies = new Enemies();

//spawn enemy wave - (waveType, numSquares, speed, health)
enemies.spawn_red_squares(1, 10, 1000, 50);
setTimeout(() => {
    console.log("audio started");
    audio.play();
}, 1000);

//----------------------------------------------------------------------------------------------------

//update game objects
function updateGameObjects() {
    //
    clock.update();
    player.update();
    enemies.update();
}

//draw game objects
function drawGameObjects() {
    //
    resetCanvas();
    clock.display();
    player.draw();
    enemies.draw();
}

//----------------------------------------------------------------------------------------------------

;(() => {

    //main function
    function main() {

        //frame sync
        window.requestAnimationFrame(main);
        
        //determine game state
        //
        //start menu
        if (game_state === "start-menu") {
            
        }
        //game loop
        if (game_state === "game-loop") {
            updateGameObjects();
            drawGameObjects();
        }
        //game over
        if (game_state === "game-over") {
            console.log("Game Over");
            audio.pause();
        } 
    }
  
    //run main
    main();

})();

//----------------------------------------------------------------------------------------------------