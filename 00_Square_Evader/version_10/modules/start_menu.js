export class StartMenu {
    constructor() {
        //game state
        this.gameState = "start-menu";

        //new game button
        this.newGameButton = document.createElement("img");
        this.newGameButton.src = "./images/new-game-box.png";
        this.newGameButton.width = 200;
        this.newGameButton.height = 40;
        this.newGameButton.pos_x = (canvas.width / 2) - (this.newGameButton.width / 2);
        this.newGameButton.pos_y = (canvas.height / 2) - 100;

        this.newGameButtonText = document.createElement("div");
        this.newGameButtonText.className = "new-game-text";
        this.newGameButtonText.innerHTML = "New Game";
        
        //append button to canvas
        document.querySelector("canvas").appendChild(this.newGameButton);
        document.querySelector("canvas").appendChild(this.newGameButtonText);

    }

    //update
    update(mouse, audio) {
        if (mouse.clicked === true) {
            //if collides with newGameButton
            if (mouse.canvas_x >= this.newGameButton.pos_x && mouse.canvas_x <= this.newGameButton.pos_x + this.newGameButton.width - 1) {
                if (mouse.canvas_y >= this.newGameButton.pos_y && mouse.canvas_y <= this.newGameButton.pos_y + this.newGameButton.height - 1) {
                    this.gameState = "game-live";
                    console.log("%cNew Game Button : %cClicked", "color: rgb(75, 150, 200);", "color: rgb(225, 225, 150);");
                    console.log("%cNew Game Started\n ", "color: rgb(50, 150, 25);");
                    audio.element.play();
                }
            }
        }
    }

    //display menu
    display(canvas) {
        let x = (canvas.width / 2) - (this.newGameButton.width / 2);
        let y = (canvas.height / 2) - 100;
        canvas.context.drawImage(this.newGameButton, x, y);

        //change fill color and display text, then change fill color back to black
        canvas.context.font = "16px courier";
        canvas.context.fillStyle = "white";
        canvas.context.fillText(this.newGameButtonText.innerHTML, 362, 228);
        canvas.context.fillStyle = "black";
    }

    //return game state
    returnGameState() {
        return this.gameState;
    }
}