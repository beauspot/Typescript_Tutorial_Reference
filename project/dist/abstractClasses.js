"use strict";
/**
 * An abstract class is a class that denies us the ability to create an object from its defined class,
 * but however allows us to create another class that is extended from its definition.
 */
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    ;
}
class Instagram_ extends TakePhoto {
    constructor(cameraMode, filter) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    ;
    getSepia() {
        console.log(this.cameraMode);
    }
}
const hitesh_ = new Instagram_("cameraMode", "filter");
