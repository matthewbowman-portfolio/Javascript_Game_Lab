export class Enemies {
    constructor() {
        this.array = [];
    }

    //spawn red squares
    spawnRedSquares(numSquares, health, speed, ms_interval, player) {
        console.log("Spawning : %c" + numSquares + " Red Squares...", "color: rgb(200, 25, 25);");
        //
        for (let i = 1; i < numSquares + 1; i++) {
            let x = Math.floor((Math.random() * 752) + 16);
            let y = Math.floor((Math.random() * 560) + 16);

            //
            setTimeout(() => {
                //if enemy spawn too close to player, randomize position until it isn't
                while (x + 16 > player.left - 64 && x < player.right + 64 && y + 16 > player.top - 64 && y < player.bottom + 64) {
                    x = Math.floor((Math.random() * 752) + 16);
                    y = Math.floor((Math.random() * 560) + 16);
                }

                this.array.push(new RedSquare(health, speed, x, y));
            }, (ms_interval) * i);
        }
    }

    //spawn teal squares
    spawnTealSquares(numSquares, health, speed, ms_interval, player) {
        console.log("Spawning : %c" + numSquares + " Teal Squares...", "color: rgb(200, 25, 25);");
        //
        for (let i = 1; i < numSquares + 1; i++) {
            let x = Math.floor((Math.random() * 744) + 16);
            let y = Math.floor((Math.random() * 552) + 16);

            //
            setTimeout(() => {
                //if enemy spawn too close to player, randomize position until it isn't
                while (x + 24 > player.left - 96 && x < player.right + 96 && y + 24 > player.top - 96 && y < player.bottom + 96) {
                    x = Math.floor((Math.random() * 744) + 16);
                    y = Math.floor((Math.random() * 552) + 16);
                }

                this.array.push(new TealSquare(health, speed, x, y));
            }, (ms_interval) * i);
        }
    }

    //spawn yellow squares
    spawnYellowSquares(numSquares, health, speed, ms_interval, player) {
        console.log("Spawning : %c" + numSquares + " Yellow Squares...", "color: rgb(200, 25, 25);");
        //
        for (let i = 1; i < numSquares + 1; i++) {
            let x = Math.floor((Math.random() * 512) + 16);
            let y = Math.floor((Math.random() * 544) + 16);

            //
            setTimeout(() => {
                //if enemy spawn too close to player, randomize position until it isn't
                while (x + 256 > player.left - 32 && x < player.right + 32 && y + 32 > player.top - 128 && y < player.bottom + 128) {
                    x = Math.floor((Math.random() * 512) + 16);
                    y = Math.floor((Math.random() * 544) + 16);
                }

                this.array.push(new YellowSquare(health, speed, x, y));
            }, (ms_interval) * i);
        }
    }

    //update enemies
    update(canvas, player) {
        //check all enemies
        for (let i = 0; i < this.array.length; i++) {
            //update
            this.array[i].update(canvas, player);
            
            //if health <= 0, remove enemy from array
            if (this.array[i].health <= 0) {
                this.array.splice(i, 1);
            }
        }
    }

    //display enemies
    display(canvas) {
        for (let i = 0; i < this.array.length; i++) {
            this.array[i].display(canvas);
        }
    }
}

//----------------------------------------------------------------------------------------------------

export class Enemy {
    constructor(health, speed, x, y) {
        this.health = health;
        this.speed = speed;
        this.pos_x = x;
        this.pos_y = y;
        this.width = 0;
        this.height = 0;
        this.hittable = true;

        //set rect
        this.left = this.pos_x;
        this.right = this.pos_x + (this.width - 1);
        this.top = this.pos_y;
        this.bottom = this.pos_y + (this.height - 1);

        //moving trackers
        this.movingLeft = false;
        this.movingRight = false;
        this.movingUp = false;
        this.movingDown = false;

        //create image element
        this.image = document.createElement("img");
        this.image.src = "";

        //append image to canvas
        document.querySelector("canvas").appendChild(this.image);
    }

    //set rect
    setRect() {
        //set top, bottom, left, right
        this.left = this.pos_x;
        this.right = this.pos_x + (this.width - 1);
        this.top = this.pos_y;
        this.bottom = this.pos_y + (this.height - 1);
    }

    update(canvas, player) {
        //update position
        if (this.movingLeft === true) { 
            this.pos_x -= this.speed;
        }
        if (this.movingRight === true) {
            this.pos_x += this.speed;
        }
        if (this.movingUp === true) {
            this.pos_y -= this.speed;
        }
        if (this.movingDown === true) {
            this.pos_y += this.speed;
        }

        //change direction and decrease health if enemy collides with boundary
        if (this.left < 0) {
            this.pos_x = 0;
            this.movingLeft = false;
            this.movingRight = true;
            this.health -= 1;
        }
        if (this.right > canvas.width) {
            this.pos_x = canvas.width - this.width;
            this.movingRight = false;
            this.movingLeft = true;
            this.health -= 1;
        }
        if (this.top < 0) {
            this.pos_y = 0;
            this.movingUp = false;
            this.movingDown = true;
            this.health -= 1;
        }
        if (this.bottom > canvas.height) {
            this.pos_y = canvas.height - this.height;
            this.movingDown = false;
            this.movingUp = true;
            this.health -= 1;
        }

        //change direction and decrease health if enemy collides with player
        //from bottom
        if (this.top <= player.bottom && this.top >= player.bottom - 3) {
            if (this.left <= player.right - 3 && this.right >= player.left + 3) {
                if (this.hittable === true) {
                    console.log("Player Hit from Bottom");
                    this.pos_y = player.bottom + 3;
                    this.hittable = false;
                    this.movingUp = false;
                    this.movingDown = true;
                    this.health -= 1;
                    player.health -= 1;

                    //
                    setTimeout(() => {
                        this.hittable = true;
                    }, 300);
                }
            }
        }
        //from top
        if (this.bottom >= player.top && this.top <= player.top + 3) {
            if (this.left <= player.right - 3 && this.right >= player.left + 3) {
                if (this.hittable === true) {
                    console.log("Player Hit from Top");
                    this.pos_y = player.top - this.height - 3;
                    this.hittable = false;
                    this.movingDown = false;
                    this.movingUp = true;
                    this.health -= 1;
                    player.health -= 1;

                    //
                    setTimeout(() => {
                        this.hittable = true;
                    }, 300);
                }
            }
        }
        //from right
        if (this.left <= player.right && this.left >= player.right - 3) {
            if (this.bottom >= player.top + 3 && this.top <= player.bottom - 3) {
                if (this.hittable === true) {
                    console.log("Player Hit from Right");
                    this.pos_x = player.right + 3;
                    this.hittable = false;
                    this.movingLeft = false;
                    this.movingRight = true;
                    this.health -= 1;
                    player.health -= 1;

                    //
                    setTimeout(() => {
                        this.hittable = true;
                    }, 300);
                }
            }
        }
        //from left
        if (this.right >= player.left && this.right <= player.left + 3) {
            if (this.bottom >= player.top + 3 && this.top <= player.bottom - 3) {
                if (this.hittable === true) {
                    console.log("Player Hit from Left");
                    this.pos_x = player.left - this.width - 3;
                    this.hittable = false;
                    this.movingRight = false;
                    this.movingLeft = true;
                    this.health -= 1;
                    player.health -= 1;

                    //
                    setTimeout(() => {
                        this.hittable = true;
                    }, 300);
                }
            }
        }

        //set rect
        this.setRect();
    }

    //display enemy
    display(canvas) {
        canvas.context.drawImage(this.image, this.pos_x, this.pos_y);
    }
}

//----------------------------------------------------------------------------------------------------

export class RedSquare extends Enemy {
    constructor(health, speed, x, y) {
        //call parent class constructor and functions
        super(health, speed, x, y);

        //set width and height
        this.width = 16;
        this.height = 16;

        //set image source
        this.image.src = "images/red-square-16px.png"

        //get random starting direction
        let randNum = Math.floor(Math.random() * 4) + 1;
        switch (randNum) {
            case 1 :
                this.movingLeft = true;
                this.movingUp = true;
                break;
            case 2 :
                this.movingRight = true;
                this.movingUp = true;
                break;
            case 3 :
                this.movingLeft = true;
                this.movingDown = true;
                break;
            case 4 :
                this.movingRight = true;
                this.movingDown = true;
                break;
        }
    }
}

//----------------------------------------------------------------------------------------------------

export class TealSquare extends Enemy {
    constructor(health, speed, x, y) {
        //call parent class constructor and functions
        super(health, speed, x, y);

        //set width and height
        this.width = 24;
        this.height = 24;

        //set image source
        this.image.src = "images/teal-square-24px.png"

        //get random starting direction
        let randNum = Math.floor(Math.random() * 4) + 1;
        switch (randNum) {
            case 1 :
                this.movingLeft = true;
                break;
            case 2 :
                this.movingRight = true;
                break;
            case 3 :
                this.movingUp = true;
                break;
            case 4 :
                this.movingDown = true;
                break;
        }
    }
}

//----------------------------------------------------------------------------------------------------

export class YellowSquare extends Enemy {
    constructor(health, speed, x, y) {
        //call parent class constructor and functions
        super(health, speed, x, y);

        //set width and height
        this.width = 256;
        this.height = 32;

        //set image source
        this.image.src = "images/yellow-square-256x32px.png"

        //get random starting direction
        let randNum = Math.floor(Math.random() * 2) + 1;
        switch (randNum) {
            case 1 :
                this.movingUp = true;
                break;
            case 2 :
                this.movingDown = true;
                break;
        }
    }
}