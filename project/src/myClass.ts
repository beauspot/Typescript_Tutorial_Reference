/* // Creating a user in Typescript
class UserClass {
  // declaring the properties before initialising them with the "this" keyword.
  name: string;
  public email: string;
  age: number;
  private city?: string;
  constructor(name: string, email: string, age: number) {
    this.name = name;
    this.email = email;
    this.age = age;
  }
}

const userBeau = new UserClass("beau Iyere", "beauspot@outlook.com", 26); */

// Shortcut to declaring classes in Typescript
class UserClass__ {
  readonly city: string = "Lagos";
  constructor(
    public name: string,
    public email: string,
    private age: number,
    private userID: string
  ) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.userID = userID;
  }
  // having a private method
  private deleteToken(token: string) {
    if (token.length > 0) {
      console.log(`Token Deleted: ${token}`);
    }
  }
}

// Getters and setters for classes
class _Person_ {
  constructor(
    public _name: string,
    protected _age: number,
    public _email: string,
    private _token: string
  ) {
    this._name = _name;
    this._age = _age;
    this._email = _email;
    this._token = _token;
  }

  // using the getter
  get name(): string {
    return this._name;
  }

  // using the setter
  set name(value: string) {
    if (value.length > 0) {
      this._name = value;
    } else {
      throw new Error("Name must be at least 1 character long");
    }
  }
}

// Inheritance in Typescript

class _Animal {
  constructor(
    public name: string,
    protected breed: string,
    public sound: string
  ) {
    this.name = name;
    this.breed = breed;
    this.sound = sound;
  }

  // method in a TS class
  move(distance: number) {
    return `${this.name} moves ${distance} meters`;
  }

  // adding a setter
  set getSound(makeSound: string) {
    if (makeSound) this.sound = makeSound;
  }
}

// actual inheritance in Typescript

class Dog extends _Animal {
  constructor(
    public name: string,
    protected breed: string,
    public sound: string,
    public hasTail: boolean
  ) {
    super(name, breed, sound);
    this.hasTail = hasTail;
  }

  // method in a TS inherited class
  bark() {
    console.log("woof woof");
  }
}
