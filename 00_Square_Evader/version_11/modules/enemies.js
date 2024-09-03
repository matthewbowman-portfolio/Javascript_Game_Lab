export class Enemies {
    constructor() {
        this.array = [];
    }

    //spawn red squares
    spawnRedSquares(numSquares, health, speed, ms_interval) {
        console.log("Spawning : %c" + numSquares + " Red Squares...", "color: rgb(200, 25, 25);");
        //
        for (let i = 1; i < numSquares + 1; i++) {
            let x = Math.floor((Math.random() * 768) + 16);
            let y = 100;
            
            //
            setTimeout(() => {
                this.array.push(new RedSquare(health, speed, x, y));
                console.log("%credSquare_" + i + " : %cspawned", "color: rgb(75, 150, 200);", "color: rgb(225, 225, 150);");
            }, (ms_interval) * i);
        }
    }

    //spawn teal squares
    spawnTealSquares(numSquares, health, speed, ms_interval) {
        console.log("Spawning : %c" + numSquares + " Teal Squares...", "color: rgb(200, 25, 25);");
        //
        for (let i = 1; i < numSquares + 1; i++) {
            let x = Math.floor((Math.random() * 768) + 16);
            let y = Math.floor((Math.random() * 568) + 16);

            //
            setTimeout(() => {
                this.array.push(new TealSquare(health, speed, x, y));
                console.log("%ctealSquare_" + i + " : %cspawned", "color: rgb(75, 150, 200);", "color: rgb(225, 225, 150);");
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

export class RedSquare {
    constructor(health, speed, x, y) {
        this.health = health;
        this.speed = speed;
        this.hittable = true;
        this.pos_x = x;
        this.pos_y = y;
        this.width = 16;
        this.height = 16;
        this.left = this.pos_x;
        this.right = this.pos_x + (this.width - 1);
        this.top = this.pos_y;
        this.bottom = this.pos_y + (this.height - 1);
        this.element = document.createElement("img");
        this.element.src = "images/red-square-16px.png";
        
        //append red square to canvas
        document.querySelector("canvas").appendChild(this.element);

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
        this.top = this.pos_y;
        this.bottom = this.pos_y + (this.height - 1);
        this.left = this.pos_x;
        this.right = this.pos_x + (this.width - 1);
    }

    //update
    update(canvas, player) {
        //update position
        if (this.movingUp === true) {
            this.pos_y -= this.speed;
        }
        if (this.movingDown === true) {
            this.pos_y += this.speed;
        }
        if (this.movingLeft === true) { 
            this.pos_x -= this.speed;
        }
        if (this.movingRight === true) {
            this.pos_x += this.speed;
        }

        //change direction and decrease health if enemy collides with boundary
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

        //change enemy direction and decrease player and enemy health if player is hit from some direction
        //
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

        //update top, bottom, left, right
        this.getRect();
    }

    //display red square
    display(canvas) {
        canvas.context.drawImage(this.element, this.pos_x, this.pos_y);
    }
}

//----------------------------------------------------------------------------------------------------

export class TealSquare {
    constructor(health, speed, x, y) {
        this.health = health;
        this.speed = speed;
        this.hittable = true;
        this.pos_x = x;
        this.pos_y = y;
        this.width = 24;
        this.height = 24;
        this.left = this.pos_x;
        this.right = this.pos_x + (this.width - 1);
        this.top = this.pos_y;
        this.bottom = this.pos_y + (this.height - 1);
        this.element = document.createElement("img");
        this.element.src = "images/teal-square-24px.png";
        
        //append red square to canvas
        document.querySelector("canvas").appendChild(this.element);

        //moving trackers
        this.movingUp = false;
        this.movingDown = false;
        this.movingLeft = false;
        this.movingRight = false;

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

    //get rect
    getRect() {
        //update top, bottom, left, right
        this.top = this.pos_y;
        this.bottom = this.pos_y + (this.height - 1);
        this.left = this.pos_x;
        this.right = this.pos_x + (this.width - 1);
    }

    //update
    update(canvas, player) {
        //update position
        if (this.movingUp === true) {
            this.pos_y -= this.speed;
        }
        if (this.movingDown === true) {
            this.pos_y += this.speed;
        }
        if (this.movingLeft === true) { 
            this.pos_x -= this.speed;
        }
        if (this.movingRight === true) {
            this.pos_x += this.speed;
        }

        //change direction and decrease health if enemy collides with boundary
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

        //change enemy direction and decrease player and enemy health if player is hit from some direction
        //
        //from bottom
        if (this.top <= player.bottom && this.top >= player.bottom - 3) {
            if (this.left <= player.right - 3 && this.right >= player.left + 3) {
                if (this.hittable === true) {
                    console.log("Player Hit from Bottom");
                    this.pos_y = player.bottom + 3;
                    this.hittable = false;
                    this.movingUp = false;
                    this.movingLeft = false;
                    this.movingRight = false;
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
                    this.movingLeft = false;
                    this.movingRight = false;
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
                    this.movingUp = false;
                    this.movingDown = false;
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
                    this.movingUp = false;
                    this.movingDown = false;
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

        //update top, bottom, left, right
        this.getRect();
    }

    //display red square
    display(canvas) {
        canvas.context.drawImage(this.element, this.pos_x, this.pos_y);
    }
}