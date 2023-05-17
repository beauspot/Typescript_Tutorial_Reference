interface TakePhotos {
  cameraMode: string;
  filter: string;
  burst: number;
}

interface Story {
  createStory(): void;
}

class Instagram implements TakePhotos {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {}
}

// extending the features of an interface in a class
class Youtube implements TakePhotos, Story {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number,
    public shorts: string
  ) {}
  createStory(): void {
    console.log("The Story was created successfully");
  }
}
