export class Canvas {
    constructor() {
        this.element = document.querySelector("canvas");
        this.width = 800;
        this.height = 608;
        this.context = this.element.getContext("2d");
        this.context.fillStyle = "(0, 0, 0)";
        this.context.fillRect(0, 0, this.width, this.height);
        this.context.imageSmoothingEnabled = false;
    }

    //reset canvas to black
    reset() {
        this.context.fillStyle = "(0, 0, 0)";
        this.context.fillRect(0, 0, this.width, this.height);
    }
}