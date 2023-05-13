"use strict";
const hitesh = {
    _id: 22,
    email: "beauspot@outlook.com",
    userId: 12345,
    startTrial: () => "Trial Started",
    startBasics: () => {
        return " Start basics";
    },
    getCoupons: (name, off) => {
        return 10;
    }
};
// changing values in an interface is  allowed
hitesh.email = "h@hc.com";
// hitesh._id = 245; throws an error because its a readonly property
