"use strict";
// a simple object
const User = {
    name: "Beau Iyere",
    email: "beauiyere@gmail.com",
    isActive: true,
};
// a use case if an object
function createUser({ name, isPaid }) { }
createUser({ name: "Beau Iyere", isPaid: true });
// A function that returns an object
function createCourse() {
    return { name: "Nodejs/nestjs course", price: 139 };
}
