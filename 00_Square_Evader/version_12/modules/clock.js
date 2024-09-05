export class Clock {
    constructor() {
        this.timestamp = new Date();
        this.hours = this.timestamp.getHours();
        this.minutes = this.timestamp.getMinutes();
        this.seconds = this.timestamp.getSeconds();
        this.hours_string = toString(this.hours);
        this.minutes_string = toString(this.minutes);
        this.seconds_string = toString(this.seconds);
        this.element = document.querySelector(".clock");
    }

    //update time
    update() {
        this.timestamp = new Date();
        this.hours = this.timestamp.getHours();
        this.minutes = this.timestamp.getMinutes();
        this.seconds = this.timestamp.getSeconds();
        this.hours_string = this.hours.toString();
        this.minutes_string = this.minutes.toString();
        this.seconds_string = this.seconds.toString();

        //catch and correct numbers under 10 to be formatted with '0' at the beginning
        if (this.hours < 10) {
            this.hours_string = ("0" + this.hours_string);
        }
        if (this.minutes < 10) {
            this.minutes_string = ("0" + this.minutes_string);
        }
        if (this.seconds < 10) {
            this.seconds_string = ("0" + this.seconds_string);
        }
    }

    display() {
        this.element.innerHTML = (this.hours_string + "." + this.minutes_string + "." + this.seconds_string);
    }
}