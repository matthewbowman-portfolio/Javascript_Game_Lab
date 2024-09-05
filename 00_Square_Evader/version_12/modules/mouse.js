export class Mouse {
    constructor() {
        this.moved = false;
        this.clicked = false;
        this.client_x = 0;
        this.client_y = 0;
        this.canvas_x = 0;
        this.canvas_y = 0;
    }

    reset() {
        this.moved = false;
        this.clicked = false;
    }
}