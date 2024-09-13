export class Waves {
    constructor() {
        this.current_wave = 1;
        this.wave_element = document.querySelector(".wave-tracker");
        this.wave_element.style.color = "rgb(177, 177, 177)";
        this.wave_element.innerHTML = "Wave :  " + this.current_wave;

        this.wave_activated = false;
        this.first_enemy_spawned = false;
    }

    //start wave
    startWave() {
        this.wave_activated = true;
        console.log("\n%cWave : " + this.current_wave, "color: rgb(50, 150, 25);");
        
        //set first_enemy_spawned to true immediately after first square is added to array
        setTimeout(() => {
            this.first_enemy_spawned = true;
        }, 1100);
    }

    //end wave if wave complete
    endWave(enemies) {
        if (this.first_enemy_spawned === true && enemies.array.length <= 0) {
            console.log("%cwave : " + "%csurvived", "color: rgb(75, 150, 200);", "color: rgb(225, 225, 150);");
            this.first_enemy_spawned = false;

            //give 3 second break before next wave
            setTimeout(() => {
                this.wave_activated = false;
                this.current_wave++;
            }, 3000);
        }
    }

    //update
    update(player, enemies) {

        //
        this.wave_element.innerHTML = "Wave :  " + this.current_wave;

        switch (this.current_wave) {

            //wave 1
            case 1 :
                if (this.wave_activated === false) {
                    this.startWave();
                    enemies.spawnRedSquares(9, 9, 2, 1000, player);
                }
                this.endWave(enemies);
                break;

            //wave 2
            case 2 :
                if (this.wave_activated === false) {
                    this.startWave();
                    enemies.spawnRedSquares(12, 12, 2, 1000, player);
                }
                this.endWave(enemies);
                break;

            //wave 3
            case 3 :
                if (this.wave_activated === false) {
                    this.startWave();
                    enemies.spawnRedSquares(15, 15, 2, 1000, player);
                }
                this.endWave(enemies);
                break;

            //wave 4
            case 4 :
                if (this.wave_activated === false) {
                    this.startWave();
                    enemies.spawnRedSquares(9, 9, 2, 1000, player);
                    enemies.spawnTealSquares(3, 4, 2, 2000, player);
                }
                this.endWave(enemies);
                break;

            //wave 5
            case 5 :
                if (this.wave_activated === false) {
                    this.startWave();
                    enemies.spawnRedSquares(12, 12, 2, 1000, player);
                    enemies.spawnTealSquares(3, 6, 2, 2000, player);
                }
                this.endWave(enemies);
                break;

            //wave 6
            case 6 :
                if (this.wave_activated === false) {
                    this.startWave();
                    enemies.spawnRedSquares(15, 15, 2, 1000, player);
                    enemies.spawnTealSquares(3, 7, 2, 2000, player);
                }
                this.endWave(enemies);
                break;
                
            //wave 7
            case 7 :
                if (this.wave_activated === false) {
                    this.startWave();
                    enemies.spawnRedSquares(9, 9, 2, 1000, player);
                    enemies.spawnTealSquares(6, 4, 2, 2000, player);
                }
                this.endWave(enemies);
                break;
                
            //wave 8
            case 8 :
                if (this.wave_activated === false) {
                    this.startWave();
                    enemies.spawnRedSquares(12, 12, 2, 1000, player);
                    enemies.spawnTealSquares(6, 6, 2, 2000, player);
                }
                this.endWave(enemies);
                break;
                
            //wave 9
            case 9 :
                if (this.wave_activated === false) {
                    this.startWave();
                    enemies.spawnRedSquares(15, 15, 2, 1000, player);
                    enemies.spawnTealSquares(6, 7, 2, 2000, player);
                }
                this.endWave(enemies);
                break;

            //wave 10
            case 10 :
                if (this.wave_activated === false) {
                    this.startWave();
                    enemies.spawnRedSquares(9, 9, 2, 1000, player);
                    enemies.spawnTealSquares(9, 4, 2, 2000, player);
                }
                this.endWave(enemies);
                break;

            //wave 11
            case 11 :
                if (this.wave_activated === false) {
                    this.startWave();
                    enemies.spawnRedSquares(12, 12, 2, 1000, player);
                    enemies.spawnTealSquares(9, 6, 2, 2000, player);
                }
                this.endWave(enemies);
                break;

            //wave 12
            case 12 :
                if (this.wave_activated === false) {
                    this.startWave();
                    enemies.spawnRedSquares(15, 15, 2, 1000, player);
                    enemies.spawnTealSquares(9, 7, 2, 2000, player);
                }
                this.endWave(enemies);
                break;

            //wave 13
            case 13 :
                if (this.wave_activated === false) {
                    this.startWave();
                    enemies.spawnRedSquares(9, 9, 2, 1000, player);
                    enemies.spawnTealSquares(3, 4, 2, 2000, player);
                    enemies.spawnYellowSquares(1, 4, 2, 3000, player);
                }
                this.endWave(enemies);
                break;

            //wave 14
            case 14 :
                if (this.wave_activated === false) {
                    this.startWave();
                    enemies.spawnRedSquares(12, 12, 2, 1000, player);
                    enemies.spawnTealSquares(3, 6, 2, 2000, player);
                    enemies.spawnYellowSquares(1, 6, 2, 3000, player);
                }
                this.endWave(enemies);
                break;

            //wave 15
            case 15 :
                if (this.wave_activated === false) {
                    this.startWave();
                    enemies.spawnRedSquares(15, 15, 2, 1000, player);
                    enemies.spawnTealSquares(3, 7, 2, 2000, player);
                    enemies.spawnYellowSquares(1, 7, 2, 3000, player);
                }
                this.endWave(enemies);
                break;
                
            //wave 16
            case 16 :
                if (this.wave_activated === false) {
                    this.startWave();
                    enemies.spawnRedSquares(9, 9, 2, 1000, player);
                    enemies.spawnTealSquares(6, 4, 2, 2000, player);
                    enemies.spawnYellowSquares(1, 4, 2, 3000, player);
                }
                this.endWave(enemies);
                break;
                
            //wave 17
            case 17 :
                if (this.wave_activated === false) {
                    this.startWave();
                    enemies.spawnRedSquares(12, 12, 2, 1000, player);
                    enemies.spawnTealSquares(6, 6, 2, 2000, player);
                    enemies.spawnYellowSquares(1, 6, 2, 3000, player);
                }
                this.endWave(enemies);
                break;
                
            //wave 18
            case 18 :
                if (this.wave_activated === false) {
                    this.startWave();
                    enemies.spawnRedSquares(15, 15, 2, 1000, player);
                    enemies.spawnTealSquares(6, 7, 2, 2000, player);
                    enemies.spawnYellowSquares(1, 7, 2, 3000, player);
                }
                this.endWave(enemies);
                break;

            //wave 19
            case 19 :
                if (this.wave_activated === false) {
                    this.startWave();
                    enemies.spawnRedSquares(9, 9, 2, 1000, player);
                    enemies.spawnTealSquares(9, 4, 2, 2000, player);
                    enemies.spawnYellowSquares(1, 4, 2, 3000, player);
                }
                this.endWave(enemies);
                break;
                
            //wave 20
            case 20 :
                if (this.wave_activated === false) {
                    this.startWave();
                    enemies.spawnRedSquares(12, 12, 2, 1000, player);
                    enemies.spawnTealSquares(9, 6, 2, 2000, player);
                    enemies.spawnYellowSquares(1, 6, 2, 3000, player);
                }
                this.endWave(enemies);
                break;
                
            //wave 21
            case 21 :
                if (this.wave_activated === false) {
                    this.startWave();
                    enemies.spawnRedSquares(15, 15, 2, 1000, player);
                    enemies.spawnTealSquares(9, 7, 2, 2000, player);
                    enemies.spawnYellowSquares(1, 7, 2, 3000, player);
                }
                this.endWave(enemies);
                break;

            //wave 22
            case 22 :
                if (this.wave_activated === false) {
                    this.startWave();
                    enemies.spawnRedSquares(9, 9, 2, 1000, player);
                    enemies.spawnTealSquares(3, 4, 2, 2000, player);
                    enemies.spawnYellowSquares(2, 4, 2, 3000, player);
                }
                this.endWave(enemies);
                break;
                
            //wave 23
            case 23 :
                if (this.wave_activated === false) {
                    this.startWave();
                    enemies.spawnRedSquares(12, 12, 2, 1000, player);
                    enemies.spawnTealSquares(3, 6, 2, 2000, player);
                    enemies.spawnYellowSquares(2, 6, 2, 3000, player);
                }
                this.endWave(enemies);
                break;
                
            //wave 24
            case 24 :
                if (this.wave_activated === false) {
                    this.startWave();
                    enemies.spawnRedSquares(15, 15, 2, 1000, player);
                    enemies.spawnTealSquares(3, 6, 2, 2000, player);
                    enemies.spawnYellowSquares(2, 6, 2, 3000, player);
                }
                this.endWave(enemies);
                break;

            //wave 25
            case 25 :
                if (this.wave_activated === false) {
                    this.startWave();
                    enemies.spawnRedSquares(9, 9, 2, 1000, player);
                    enemies.spawnTealSquares(6, 4, 2, 2000, player);
                    enemies.spawnYellowSquares(2, 4, 2, 3000, player);
                }
                this.endWave(enemies);
                break;
                
            //wave 26
            case 26 :
                if (this.wave_activated === false) {
                    this.startWave();
                    enemies.spawnRedSquares(12, 12, 2, 1000, player);
                    enemies.spawnTealSquares(6, 6, 2, 2000, player);
                    enemies.spawnYellowSquares(2, 6, 2, 3000, player);
                }
                this.endWave(enemies);
                break;
                
            //wave 27
            case 27 :
                if (this.wave_activated === false) {
                    this.startWave();
                    enemies.spawnRedSquares(15, 15, 2, 1000, player);
                    enemies.spawnTealSquares(6, 6, 2, 2000, player);
                    enemies.spawnYellowSquares(2, 6, 2, 3000, player);
                }
                this.endWave(enemies);
                break;

            //wave 28
            case 28 :
                if (this.wave_activated === false) {
                    this.startWave();
                    enemies.spawnRedSquares(9, 9, 2, 1000, player);
                    enemies.spawnTealSquares(9, 4, 2, 2000, player);
                    enemies.spawnYellowSquares(2, 4, 2, 3000, player);
                }
                this.endWave(enemies);
                break;

            //wave 29
            case 29 :
                if (this.wave_activated === false) {
                    this.startWave();
                    enemies.spawnRedSquares(12, 12, 2, 1000, player);
                    enemies.spawnTealSquares(9, 6, 2, 2000, player);
                    enemies.spawnYellowSquares(2, 6, 2, 3000, player);
                }
                this.endWave(enemies);
                break;

            //wave 30
            case 30 :
                if (this.wave_activated === false) {
                    this.startWave();
                    enemies.spawnRedSquares(15, 15, 2, 1000, player);
                    enemies.spawnTealSquares(9, 6, 2, 2000, player);
                    enemies.spawnYellowSquares(2, 6, 2, 3000, player);
                }
                this.endWave(enemies);
                break;

            //wave 31
            case 31 :
                if (this.wave_activated === false) {
                    this.startWave();
                    enemies.spawnRedSquares(9, 9, 2, 1000, player);
                    enemies.spawnTealSquares(3, 4, 2, 2000, player);
                    enemies.spawnYellowSquares(3, 4, 2, 3000, player);
                    //spawn x1 reg boss
                }
                this.endWave(enemies);
                break;
        }
    }
}