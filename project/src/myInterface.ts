interface User__ {
  readonly _id: number;
  email: string;
  userId: number;
  gogoleID?: string;
  // methods in an interface
  startTrial: () => string;
  startBasics(): string;
  getCoupons(couponName: string, value: number): number;
}

// extending the User__ interface with a github property
// this feature is usually called reopening of the interface.
interface User__ {
  githubID: string;
}

// Inheritance with interfaces
interface Admin extends User__ {
  role: "admin" | "user" | "super_admin";
}

const hitesh: User__ = {
  _id: 22,
  email: "beauspot@outlook.com",
  userId: 12345,
  githubID: "beauspot",
  startTrial: () => "Trial Started",
  startBasics: () => {
    return " Start basics";
  },
  getCoupons: (name: "Beau Spot", off: 10) => {
    return 10;
  },
};

// An Admin interface
const admin_user: Admin = {
  _id: 22,
  email: "beauspot@outlook.com",
  userId: 12345,
  role: "admin",
  githubID: "beauspot",
  startTrial: () => "Trial Started",
  startBasics: () => {
    return " Start basics";
  },
  getCoupons: (name: "Beau Spot", off: 10) => {
    return 10;
  },
};

// changing values in an interface is  allowed
hitesh.email = "h@hc.com";
// hitesh._id = 245; throws an error because its a readonly property
