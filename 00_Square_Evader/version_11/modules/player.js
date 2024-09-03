export class Player {
    constructor() {
        //game state
        this.gameState = "game-live";

        //player score
        this.score = 0;
        this.score_element = document.querySelector(".score-tracker");
        this.score_element.style.color = "rgb(177, 177, 177)";
        this.score_element.innerHTML = "Score :  " + this.score;

        this.health = 3;
        this.speed = 3;
        this.hittable = true;
        this.width = 32;
        this.height = 32;
        this.pos_x = (canvas.width / 2) - (this.width / 2);
        this.pos_y = (canvas.height / 2) - (this.width / 2);
        this.left = this.pos_x;
        this.right = this.pos_x + (this.width - 1);
        this.top = this.pos_y;
        this.bottom = this.pos_y + (this.height - 1);
        this.element = document.createElement("img");
        this.element.src = "images/white-square-32px.png";

        //append player to canvas
        document.querySelector("canvas").appendChild(this.element);
    }

    //get rect
    getRect() {
        //update top, bottom, left, right
        this.top = this.pos_y;
        this.bottom = this.pos_y + (this.height - 1);
        this.left = this.pos_x;
        this.right = this.pos_x + (this.width - 1);
    }

    //update
    update(mouse, keyBoard, audio) {
        //if player health <= 0 then game over
        if (this.health <= 0) {
            this.gameState = "game-over";
            audio.element.pause();
        }

        //update score
        this.score++;
        this.score_element.innerHTML = "Score :  " + (Math.floor(this.score/10));

        //if key down, move player
        if (keyBoard.w_down === true || keyBoard.arrow_up === true) { 
            this.pos_y -= this.speed;
        }
        if (keyBoard.a_down === true || keyBoard.arrow_left === true) {
            this.pos_x -= this.speed;
        }
        if (keyBoard.s_down === true || keyBoard.arrow_down === true) {
            this.pos_y += this.speed;
        }
        if (keyBoard.d_down === true || keyBoard.arrow_right === true) {
            this.pos_x += this.speed;
        }
        //update top, bottom, left, right
        this.getRect();

        //stop player if collides with boundary, if player goes out then put them back in bounds
        if (this.top < 0) {
            this.pos_y = 0;
        }
        if (this.bottom > canvas.height) {
            this.pos_y = canvas.height - this.height;
        }
        if (this.left < 0) {
            this.pos_x = 0;
        }
        if (this.right > canvas.width) {
            this.pos_x = canvas.width - this.width;
        }
        //update top, bottom, left, right
        this.getRect();
    }

    //display player
    display(canvas) {
        canvas.context.drawImage(this.element, this.pos_x, this.pos_y);
    }

    //return game state
    returnGameState() {
        return this.gameState;
    }
}