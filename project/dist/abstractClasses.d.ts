/**
 * An abstract class is a class that denies us the ability to create an object from its defined class,
 * but however allows us to create another class that is extended from its definition.
 */
declare abstract class TakePhoto {
    cameraMode: string;
    filter: string;
    constructor(cameraMode: string, filter: string);
    abstract getSepia(): void;
}
declare class Instagram_ extends TakePhoto {
    cameraMode: string;
    filter: string;
    constructor(cameraMode: string, filter: string);
    getSepia(): void;
}
declare const hitesh_: Instagram_;
