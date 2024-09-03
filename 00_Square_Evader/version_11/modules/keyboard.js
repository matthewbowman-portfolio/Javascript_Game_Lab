export class KeyBoard {
    constructor() {
        this.keydown = false;
        this.w_down = false;
        this.a_down = false;
        this.s_down = false;
        this.d_down = false;
        this.arrow_up = false;
        this.arrow_down = false;
        this.arrow_left = false;
        this.arrow_right = false;
    }

    reset() {
        this.keydown = false;
    }
}