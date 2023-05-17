interface TakePhotos {
    cameraMode: string;
    filter: string;
    burst: number;
}
interface Story {
    createStory(): void;
}
declare class Instagram implements TakePhotos {
    cameraMode: string;
    filter: string;
    burst: number;
    constructor(cameraMode: string, filter: string, burst: number);
}
declare class Youtube implements TakePhotos, Story {
    cameraMode: string;
    filter: string;
    burst: number;
    shorts: string;
    constructor(cameraMode: string, filter: string, burst: number, shorts: string);
    createStory(): void;
}
