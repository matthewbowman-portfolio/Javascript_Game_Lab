//game loop
import { gameLoop } from "./modules/game_loop.js";

//----------------------------------------------------------------------------------------------------

//main function
function main() {

    //syncs frame rate at 60fps
    window.requestAnimationFrame(main);
    
    //game loop
    gameLoop();
}

//run main
main();