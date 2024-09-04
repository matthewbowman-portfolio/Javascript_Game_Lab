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
                    enemies.spawnRedSquares(9, 9, 2, 1000);
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
                    enemies.spawnRedSquares(12, 12, 2, 1000);
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
                    enemies.spawnRedSquares(15, 15, 2, 1000);
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
                    enemies.spawnRedSquares(9, 9, 2, 1000);
                    enemies.spawnTealSquares(1, 5, 2, 2000);
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
                    enemies.spawnRedSquares(12, 12, 2, 1000);
                    enemies.spawnTealSquares(1, 6, 2, 2000);
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
                    enemies.spawnRedSquares(15, 15, 2, 1000);
                    enemies.spawnTealSquares(1, 8, 2, 2000);
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
                    enemies.spawnRedSquares(12, 12, 2, 1000);
                    enemies.spawnTealSquares(2, 6, 2, 2000);
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
                    enemies.spawnRedSquares(15, 15, 2, 1000);
                    enemies.spawnTealSquares(2, 8, 2, 2000);
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
                    enemies.spawnRedSquares(18, 18, 2, 1000);
                    enemies.spawnTealSquares(2, 9, 2, 2000);
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
                    enemies.spawnRedSquares(15, 15, 2, 1000);
                    enemies.spawnTealSquares(1, 8, 2, 2000);
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
                    enemies.spawnRedSquares(18, 18, 2, 1000);
                    enemies.spawnTealSquares(1, 9, 2, 2000);
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
                    enemies.spawnRedSquares(21, 21, 2, 1000);
                    enemies.spawnTealSquares(1, 11, 2, 2000);
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

            //wave 13
            case 13 :
                //
                if (this.wave_activated === false) {
                    console.log("\n%cWave : " + this.current_wave, "color: rgb(50, 150, 25);");
                    enemies.spawnRedSquares(15, 15, 2, 1000);
                    enemies.spawnTealSquares(2, 8, 2, 2000);
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

            //wave 14
            case 14 :
                //
                if (this.wave_activated === false) {
                    console.log("\n%cWave : " + this.current_wave, "color: rgb(50, 150, 25);");
                    enemies.spawnRedSquares(18, 18, 2, 1000);
                    enemies.spawnTealSquares(2, 9, 2, 2000);
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

            //wave 15
            case 15 :
                //
                if (this.wave_activated === false) {
                    console.log("\n%cWave : " + this.current_wave, "color: rgb(50, 150, 25);");
                    enemies.spawnRedSquares(21, 21, 2, 1000);
                    enemies.spawnTealSquares(2, 11, 2, 2000);
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
                
            //wave 16
            case 16 :
                //
                if (this.wave_activated === false) {
                    console.log("\n%cWave : " + this.current_wave, "color: rgb(50, 150, 25);");
                    enemies.spawnRedSquares(18, 18, 2, 1000);
                    enemies.spawnTealSquares(3, 9, 2, 2000);
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
                
            //wave 17
            case 17 :
                //
                if (this.wave_activated === false) {
                    console.log("\n%cWave : " + this.current_wave, "color: rgb(50, 150, 25);");
                    enemies.spawnRedSquares(21, 21, 2, 1000);
                    enemies.spawnTealSquares(3, 11, 2, 2000);
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
                
            //wave 18
            case 18 :
                //
                if (this.wave_activated === false) {
                    console.log("\n%cWave : " + this.current_wave, "color: rgb(50, 150, 25);");
                    enemies.spawnRedSquares(24, 24, 2, 1000);
                    enemies.spawnTealSquares(3, 12, 2, 2000);
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

            //wave 19
            case 19 :
                //
                if (this.wave_activated === false) {
                    console.log("\n%cWave : " + this.current_wave, "color: rgb(50, 150, 25);");
                    enemies.spawnRedSquares(21, 21, 2, 1000);
                    enemies.spawnTealSquares(2, 11, 2, 2000);
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
                
            //wave 20
            case 20 :
                //
                if (this.wave_activated === false) {
                    console.log("\n%cWave : " + this.current_wave, "color: rgb(50, 150, 25);");
                    enemies.spawnRedSquares(24, 24, 2, 1000);
                    enemies.spawnTealSquares(2, 12, 2, 2000);
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
                
            //wave 21
            case 21 :
                if (this.wave_activated === false) {
                    console.log("\n%cWave : " + this.current_wave, "color: rgb(50, 150, 25);");
                    enemies.spawnRedSquares(27, 27, 2, 1000);
                    enemies.spawnTealSquares(2, 14, 2, 2000);
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

            //wave 22
            case 22 :
                //
                if (this.wave_activated === false) {
                    console.log("\n%cWave : " + this.current_wave, "color: rgb(50, 150, 25);");
                    enemies.spawnRedSquares(21, 21, 2, 1000);
                    enemies.spawnTealSquares(3, 11, 2, 2000);
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
                
            //wave 23
            case 23 :
                //
                if (this.wave_activated === false) {
                    console.log("\n%cWave : " + this.current_wave, "color: rgb(50, 150, 25);");
                    enemies.spawnRedSquares(24, 24, 2, 1000);
                    enemies.spawnTealSquares(3, 12, 2, 2000);
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
                
            //wave 24
            case 24 :
                if (this.wave_activated === false) {
                    console.log("\n%cWave : " + this.current_wave, "color: rgb(50, 150, 25);");
                    enemies.spawnRedSquares(27, 27, 2, 1000);
                    enemies.spawnTealSquares(3, 14, 2, 2000);
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

            //wave 25
            case 25 :
                //
                if (this.wave_activated === false) {
                    console.log("\n%cWave : " + this.current_wave, "color: rgb(50, 150, 25);");
                    enemies.spawnRedSquares(24, 24, 2, 1000);
                    enemies.spawnTealSquares(4, 12, 2, 2000);
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
                
            //wave 26
            case 26 :
                //
                if (this.wave_activated === false) {
                    console.log("\n%cWave : " + this.current_wave, "color: rgb(50, 150, 25);");
                    enemies.spawnRedSquares(27, 27, 2, 1000);
                    enemies.spawnTealSquares(4, 14, 2, 2000);
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
                
            //wave 27
            case 27 :
                if (this.wave_activated === false) {
                    console.log("\n%cWave : " + this.current_wave, "color: rgb(50, 150, 25);");
                    enemies.spawnRedSquares(30, 30, 2, 1000);
                    enemies.spawnTealSquares(4, 15, 2, 2000);
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

            //wave 28
            case 28 :
                //
                if (this.wave_activated === false) {
                    console.log("\n%cWave : " + this.current_wave, "color: rgb(50, 150, 25);");
                    enemies.spawnRedSquares(9, 9, 3, 1000);
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

            //wave 29
            case 29 :
                //
                if (this.wave_activated === false) {
                    console.log("\n%cWave : " + this.current_wave, "color: rgb(50, 150, 25);");
                    enemies.spawnRedSquares(12, 12, 3, 1000);
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

            //wave 30
            case 30 :
                //
                if (this.wave_activated === false) {
                    console.log("\n%cWave : " + this.current_wave, "color: rgb(50, 150, 25);");
                    enemies.spawnRedSquares(15, 15, 3, 1000);
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

            //wave 31
            case 31 :
                //
                if (this.wave_activated === false) {
                    console.log("\n%cWave : " + this.current_wave, "color: rgb(50, 150, 25);");
                    enemies.spawnRedSquares(9, 9, 3, 1000);
                    enemies.spawnTealSquares(1, 5, 3, 2000);
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

            //wave 32
            case 32 :
                //
                if (this.wave_activated === false) {
                    console.log("\n%cWave : " + this.current_wave, "color: rgb(50, 150, 25);");
                    enemies.spawnRedSquares(12, 12, 3, 1000);
                    enemies.spawnTealSquares(1, 6, 3, 2000);
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

            //wave 33
            case 33 :
                //
                if (this.wave_activated === false) {
                    console.log("\n%cWave : " + this.current_wave, "color: rgb(50, 150, 25);");
                    enemies.spawnRedSquares(15, 15, 3, 1000);
                    enemies.spawnTealSquares(1, 8, 3, 2000);
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
                
            //wave 34
            case 34 :
                //
                if (this.wave_activated === false) {
                    console.log("\n%cWave : " + this.current_wave, "color: rgb(50, 150, 25);");
                    enemies.spawnRedSquares(12, 12, 3, 1000);
                    enemies.spawnTealSquares(2, 6, 3, 2000);
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
                
            //wave 35
            case 35 :
                //
                if (this.wave_activated === false) {
                    console.log("\n%cWave : " + this.current_wave, "color: rgb(50, 150, 25);");
                    enemies.spawnRedSquares(15, 15, 3, 1000);
                    enemies.spawnTealSquares(2, 8, 3, 2000);
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
                
            //wave 36
            case 36 :
                //
                if (this.wave_activated === false) {
                    console.log("\n%cWave : " + this.current_wave, "color: rgb(50, 150, 25);");
                    enemies.spawnRedSquares(18, 18, 3, 1000);
                    enemies.spawnTealSquares(2, 9, 3, 2000);
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

            //wave 37
            case 37 :
                //
                if (this.wave_activated === false) {
                    console.log("\n%cWave : " + this.current_wave, "color: rgb(50, 150, 25);");
                    enemies.spawnRedSquares(15, 15, 3, 1000);
                    enemies.spawnTealSquares(1, 8, 3, 2000);
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

            //wave 38
            case 38 :
                //
                if (this.wave_activated === false) {
                    console.log("\n%cWave : " + this.current_wave, "color: rgb(50, 150, 25);");
                    enemies.spawnRedSquares(18, 18, 3, 1000);
                    enemies.spawnTealSquares(1, 9, 3, 2000);
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

            //wave 39
            case 39 :
                //
                if (this.wave_activated === false) {
                    console.log("\n%cWave : " + this.current_wave, "color: rgb(50, 150, 25);");
                    enemies.spawnRedSquares(21, 21, 3, 1000);
                    enemies.spawnTealSquares(1, 11, 3, 2000);
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

            //wave 40
            case 40 :
                //
                if (this.wave_activated === false) {
                    console.log("\n%cWave : " + this.current_wave, "color: rgb(50, 150, 25);");
                    enemies.spawnRedSquares(15, 15, 3, 1000);
                    enemies.spawnTealSquares(2, 8, 3, 2000);
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

            //wave 41
            case 41 :
                //
                if (this.wave_activated === false) {
                    console.log("\n%cWave : " + this.current_wave, "color: rgb(50, 150, 25);");
                    enemies.spawnRedSquares(18, 18, 3, 1000);
                    enemies.spawnTealSquares(2, 9, 3, 2000);
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

            //wave 42
            case 42 :
                //
                if (this.wave_activated === false) {
                    console.log("\n%cWave : " + this.current_wave, "color: rgb(50, 150, 25);");
                    enemies.spawnRedSquares(21, 21, 3, 1000);
                    enemies.spawnTealSquares(2, 11, 3, 2000);
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
                
            //wave 43
            case 43 :
                //
                if (this.wave_activated === false) {
                    console.log("\n%cWave : " + this.current_wave, "color: rgb(50, 150, 25);");
                    enemies.spawnRedSquares(18, 18, 3, 1000);
                    enemies.spawnTealSquares(3, 9, 3, 2000);
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
                
            //wave 44
            case 44 :
                //
                if (this.wave_activated === false) {
                    console.log("\n%cWave : " + this.current_wave, "color: rgb(50, 150, 25);");
                    enemies.spawnRedSquares(21, 21, 3, 1000);
                    enemies.spawnTealSquares(3, 11, 3, 2000);
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
                
            //wave 45
            case 45 :
                //
                if (this.wave_activated === false) {
                    console.log("\n%cWave : " + this.current_wave, "color: rgb(50, 150, 25);");
                    enemies.spawnRedSquares(24, 24, 3, 1000);
                    enemies.spawnTealSquares(3, 12, 3, 2000);
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

            //wave 46
            case 46 :
                //
                if (this.wave_activated === false) {
                    console.log("\n%cWave : " + this.current_wave, "color: rgb(50, 150, 25);");
                    enemies.spawnRedSquares(21, 21, 3, 1000);
                    enemies.spawnTealSquares(2, 11, 3, 2000);
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
                
            //wave 47
            case 47 :
                //
                if (this.wave_activated === false) {
                    console.log("\n%cWave : " + this.current_wave, "color: rgb(50, 150, 25);");
                    enemies.spawnRedSquares(24, 24, 3, 1000);
                    enemies.spawnTealSquares(2, 12, 3, 2000);
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
                
            //wave 48
            case 48 :
                if (this.wave_activated === false) {
                    console.log("\n%cWave : " + this.current_wave, "color: rgb(50, 150, 25);");
                    enemies.spawnRedSquares(27, 27, 3, 1000);
                    enemies.spawnTealSquares(2, 14, 3, 2000);
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

            //wave 49
            case 49 :
                //
                if (this.wave_activated === false) {
                    console.log("\n%cWave : " + this.current_wave, "color: rgb(50, 150, 25);");
                    enemies.spawnRedSquares(21, 21, 3, 1000);
                    enemies.spawnTealSquares(3, 11, 3, 2000);
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
                
            //wave 50
            case 50 :
                //
                if (this.wave_activated === false) {
                    console.log("\n%cWave : " + this.current_wave, "color: rgb(50, 150, 25);");
                    enemies.spawnRedSquares(24, 24, 3, 1000);
                    enemies.spawnTealSquares(3, 12, 3, 2000);
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
                
            //wave 51
            case 51 :
                if (this.wave_activated === false) {
                    console.log("\n%cWave : " + this.current_wave, "color: rgb(50, 150, 25);");
                    enemies.spawnRedSquares(27, 27, 3, 1000);
                    enemies.spawnTealSquares(3, 14, 3, 2000);
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

            //wave 52
            case 52 :
                //
                if (this.wave_activated === false) {
                    console.log("\n%cWave : " + this.current_wave, "color: rgb(50, 150, 25);");
                    enemies.spawnRedSquares(24, 24, 3, 1000);
                    enemies.spawnTealSquares(4, 12, 3, 2000);
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
                
            //wave 53
            case 53 :
                //
                if (this.wave_activated === false) {
                    console.log("\n%cWave : " + this.current_wave, "color: rgb(50, 150, 25);");
                    enemies.spawnRedSquares(27, 27, 3, 1000);
                    enemies.spawnTealSquares(4, 14, 3, 2000);
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
                
            //wave 54
            case 54 :
                if (this.wave_activated === false) {
                    console.log("\n%cWave : " + this.current_wave, "color: rgb(50, 150, 25);");
                    enemies.spawnRedSquares(30, 30, 3, 1000);
                    enemies.spawnTealSquares(4, 15, 3, 2000);
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