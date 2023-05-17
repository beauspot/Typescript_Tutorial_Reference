/**
 * An abstract class is a class that denies us the ability to create an object from its defined class,
 * but however allows us to create another class that is extended from its definition.
 */



abstract class TakePhoto {
    constructor(public cameraMode: string, public filter: string) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    };

    abstract getSepia(): void
}

class Instagram_ extends TakePhoto {
    constructor(public cameraMode: string, public filter: string) {
      super(cameraMode, filter);
    };
    getSepia(): void {
         console.log(this.cameraMode)
    }
}
const hitesh_ = new Instagram_("cameraMode", "filter");
