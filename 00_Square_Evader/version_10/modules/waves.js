export class Waves {
    constructor() {
        this.current_wave = 1;
        this.wave_element = document.querySelector(".wave-tracker");
        this.wave_element.style.color = "rgb(177, 177, 177)";
        this.wave_element.innerHTML = "Wave :  " + this.current_wave;

        this.wave_activated = false;
        this.first_enemy_spawned = false;
    }

    update(enemies) {
        //
        switch (this.current_wave) {

            //wave 1
            case 1 :
                //
                if (this.wave_activated === false) {
                    console.log("\n%cWave : " + this.current_wave, "color: rgb(50, 150, 25);");
                    enemies.spawnRedSquares(3, 3, 1000);
                    this.wave_activated = true;

                    //set first_enemy_spawned to true immediately after first square is added to array
                    setTimeout(() => {
                        this.first_enemy_spawned = true;
                    }, 1100);
                }
                //
                if (this.first_enemy_spawned === true && enemies.array.length <= 0) {
                    console.log("%cwave : " + "%csurvived", "color: rgb(75, 150, 200);", "color: rgb(225, 225, 150);");
                    this.first_enemy_spawned = false;

                    //give 3 second break before next wave
                    setTimeout(() => {
                        this.wave_activated = false;
                        this.current_wave++;
                        this.wave_element.innerHTML = "Wave :  " + this.current_wave;
                    }, 3000);
                }
                break;

            //wave 2
            case 2 :
                //
                if (this.wave_activated === false) {
                    console.log("\n%cWave : " + this.current_wave, "color: rgb(50, 150, 25);");
                    enemies.spawnRedSquares(6, 6, 1000);
                    this.wave_activated = true;

                    //set first_enemy_spawned to true immediately after first square is added to array
                    setTimeout(() => {
                        this.first_enemy_spawned = true;
                    }, 1100);
                }
                //
                if (this.first_enemy_spawned === true && enemies.array.length <= 0) {
                    console.log("%cwave : " + "%csurvived", "color: rgb(75, 150, 200);", "color: rgb(225, 225, 150);");
                    this.first_enemy_spawned = false;

                    //give 3 second break before next wave
                    setTimeout(() => {
                        this.wave_activated = false;
                        this.current_wave++;
                        this.wave_element.innerHTML = "Wave :  " + this.current_wave;
                    }, 3000);
                }
                break;

            //wave 3
            case 3 :
                //
                if (this.wave_activated === false) {
                    console.log("\n%cWave : " + this.current_wave, "color: rgb(50, 150, 25);");
                    enemies.spawnRedSquares(9, 9, 1000);
                    this.wave_activated = true;

                    //set first_enemy_spawned to true immediately after first square is added to array
                    setTimeout(() => {
                        this.first_enemy_spawned = true;
                    }, 1100);
                }
                //
                if (this.first_enemy_spawned === true && enemies.array.length <= 0) {
                    console.log("%cwave : " + "%csurvived", "color: rgb(75, 150, 200);", "color: rgb(225, 225, 150);");
                    this.first_enemy_spawned = false;

                    //give 3 second break before next wave
                    setTimeout(() => {
                        this.wave_activated = false;
                        this.current_wave++;
                        this.wave_element.innerHTML = "Wave :  " + this.current_wave;
                    }, 3000);
                }
                break;

            //wave 4
            case 4 :
                //
                if (this.wave_activated === false) {
                    console.log("\n%cWave : " + this.current_wave, "color: rgb(50, 150, 25);");
                    enemies.spawnRedSquares(12, 12, 1000);
                    this.wave_activated = true;

                    //set first_enemy_spawned to true immediately after first square is added to array
                    setTimeout(() => {
                        this.first_enemy_spawned = true;
                    }, 1100);
                }
                //
                if (this.first_enemy_spawned === true && enemies.array.length <= 0) {
                    console.log("%cwave : " + "%csurvived", "color: rgb(75, 150, 200);", "color: rgb(225, 225, 150);");
                    this.first_enemy_spawned = false;

                    //give 3 second break before next wave
                    setTimeout(() => {
                        this.wave_activated = false;
                        this.current_wave++;
                        this.wave_element.innerHTML = "Wave :  " + this.current_wave;
                    }, 3000);
                }
                break;

            //wave 5
            case 5 :
                //
                if (this.wave_activated === false) {
                    console.log("\n%cWave : " + this.current_wave, "color: rgb(50, 150, 25);");
                    enemies.spawnRedSquares(15, 15, 1000);
                    this.wave_activated = true;

                    //set first_enemy_spawned to true immediately after first square is added to array
                    setTimeout(() => {
                        this.first_enemy_spawned = true;
                    }, 1100);
                }
                //
                if (this.first_enemy_spawned === true && enemies.array.length <= 0) {
                    console.log("%cwave : " + "%csurvived", "color: rgb(75, 150, 200);", "color: rgb(225, 225, 150);");
                    this.first_enemy_spawned = false;

                    //give 3 second break before next wave
                    setTimeout(() => {
                        this.wave_activated = false;
                        this.current_wave++;
                        this.wave_element.innerHTML = "Wave :  " + this.current_wave;
                    }, 3000);
                }
                break;

            //wave 6
            case 6 :
                //
                if (this.wave_activated === false) {
                    console.log("\n%cWave : " + this.current_wave, "color: rgb(50, 150, 25);");
                    enemies.spawnRedSquares(18, 18, 1000);
                    this.wave_activated = true;

                    //set first_enemy_spawned to true immediately after first square is added to array
                    setTimeout(() => {
                        this.first_enemy_spawned = true;
                    }, 1100);
                }
                //
                if (this.first_enemy_spawned === true && enemies.array.length <= 0) {
                    console.log("%cwave : " + "%csurvived", "color: rgb(75, 150, 200);", "color: rgb(225, 225, 150);");
                    this.first_enemy_spawned = false;

                    //give 3 second break before next wave
                    setTimeout(() => {
                        this.wave_activated = false;
                        this.current_wave++;
                        this.wave_element.innerHTML = "Wave :  " + this.current_wave;
                    }, 3000);
                }
                break;
                
            //wave 7
            case 7 :
                //
                if (this.wave_activated === false) {
                    console.log("\n%cWave : " + this.current_wave, "color: rgb(50, 150, 25);");
                    enemies.spawnRedSquares(21, 21, 1000);
                    this.wave_activated = true;

                    //set first_enemy_spawned to true immediately after first square is added to array
                    setTimeout(() => {
                        this.first_enemy_spawned = true;
                    }, 1100);
                }
                //
                if (this.first_enemy_spawned === true && enemies.array.length <= 0) {
                    console.log("%cwave : " + "%csurvived", "color: rgb(75, 150, 200);", "color: rgb(225, 225, 150);");
                    this.first_enemy_spawned = false;

                    //give 3 second break before next wave
                    setTimeout(() => {
                        this.wave_activated = false;
                        this.current_wave++;
                        this.wave_element.innerHTML = "Wave :  " + this.current_wave;
                    }, 3000);
                }
                break;
                
            //wave 8
            case 8 :
                //
                if (this.wave_activated === false) {
                    console.log("\n%cWave : " + this.current_wave, "color: rgb(50, 150, 25);");
                    enemies.spawnRedSquares(24, 24, 1000);
                    this.wave_activated = true;

                    //set first_enemy_spawned to true immediately after first square is added to array
                    setTimeout(() => {
                        this.first_enemy_spawned = true;
                    }, 1100);
                }
                //
                if (this.first_enemy_spawned === true && enemies.array.length <= 0) {
                    console.log("%cwave : " + "%csurvived", "color: rgb(75, 150, 200);", "color: rgb(225, 225, 150);");
                    this.first_enemy_spawned = false;

                    //give 3 second break before next wave
                    setTimeout(() => {
                        this.wave_activated = false;
                        this.current_wave++;
                        this.wave_element.innerHTML = "Wave :  " + this.current_wave;
                    }, 3000);
                }
                break;
                
            //wave 9
            case 9 :
                //
                if (this.wave_activated === false) {
                    console.log("\n%cWave : " + this.current_wave, "color: rgb(50, 150, 25);");
                    enemies.spawnRedSquares(27, 27, 1000);
                    this.wave_activated = true;

                    //set first_enemy_spawned to true immediately after first square is added to array
                    setTimeout(() => {
                        this.first_enemy_spawned = true;
                    }, 1100);
                }
                //
                if (this.first_enemy_spawned === true && enemies.array.length <= 0) {
                    console.log("%cwave : " + "%csurvived", "color: rgb(75, 150, 200);", "color: rgb(225, 225, 150);");
                    this.first_enemy_spawned = false;

                    //give 3 second break before next wave
                    setTimeout(() => {
                        this.wave_activated = false;
                        this.current_wave++;
                        this.wave_element.innerHTML = "Wave :  " + this.current_wave;
                    }, 3000);
                }
                break;

            //wave 10
            case 10 :
                //
                if (this.wave_activated === false) {
                    console.log("\n%cWave : " + this.current_wave, "color: rgb(50, 150, 25);");
                    enemies.spawnRedSquares(30, 30, 1000);
                    this.wave_activated = true;

                    //set first_enemy_spawned to true immediately after first square is added to array
                    setTimeout(() => {
                        this.first_enemy_spawned = true;
                    }, 1100);
                }
                //
                if (this.first_enemy_spawned === true && enemies.array.length <= 0) {
                    console.log("%cwave : " + "%csurvived", "color: rgb(75, 150, 200);", "color: rgb(225, 225, 150);");
                    this.first_enemy_spawned = false;

                    //give 3 second break before next wave
                    setTimeout(() => {
                        this.wave_activated = false;
                        this.current_wave++;
                        this.wave_element.innerHTML = "Wave :  " + this.current_wave;
                    }, 3000);
                }
                break;
                
            //wave 11
            case 11 :
                //
                if (this.wave_activated === false) {
                    console.log("\n%cWave : " + this.current_wave, "color: rgb(50, 150, 25);");
                    enemies.spawnRedSquares(33, 33, 1000);
                    this.wave_activated = true;

                    //set first_enemy_spawned to true immediately after first square is added to array
                    setTimeout(() => {
                        this.first_enemy_spawned = true;
                    }, 1100);
                }
                //
                if (this.first_enemy_spawned === true && enemies.array.length <= 0) {
                    console.log("%cwave : " + "%csurvived", "color: rgb(75, 150, 200);", "color: rgb(225, 225, 150);");
                    this.first_enemy_spawned = false;

                    //give 3 second break before next wave
                    setTimeout(() => {
                        this.wave_activated = false;
                        this.current_wave++;
                        this.wave_element.innerHTML = "Wave :  " + this.current_wave;
                    }, 3000);
                }
                break;
                
            //wave 12
            case 12 :
                //
                if (this.wave_activated === false) {
                    console.log("\n%cWave : " + this.current_wave, "color: rgb(50, 150, 25);");
                    enemies.spawnRedSquares(36, 36, 1000);
                    this.wave_activated = true;

                    //set first_enemy_spawned to true immediately after first square is added to array
                    setTimeout(() => {
                        this.first_enemy_spawned = true;
                    }, 1100);
                }
                //
                if (this.first_enemy_spawned === true && enemies.array.length <= 0) {
                    console.log("%cwave : " + "%csurvived", "color: rgb(75, 150, 200);", "color: rgb(225, 225, 150);");
                    this.first_enemy_spawned = false;

                    //give 3 second break before next wave
                    setTimeout(() => {
                        this.wave_activated = false;
                        this.current_wave++;
                        this.wave_element.innerHTML = "Wave :  " + this.current_wave;
                    }, 3000);
                }
                break;
                
        }
    }
}