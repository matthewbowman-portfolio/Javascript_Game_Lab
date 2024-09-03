export class Audio {
    constructor() {
        //audio element
        this.element = document.querySelector("audio");
        this.element.volume = 0.09;

        //volume slider
        this.volumeSlider = document.querySelector(".volume-slider");
    }
}