"use strict";
let score = 33;
score = 44;
score = "55";
let beau = { name: "beau", id: 42 };
beau = { username: "beauTheGoat", id: 42 };
const getDbId = (id) => {
    if (typeof id === "string")
        id.toLowerCase();
    else
        id + 2;
};
// unions in arrays 
const data = [1, 2, 3, "4"];
