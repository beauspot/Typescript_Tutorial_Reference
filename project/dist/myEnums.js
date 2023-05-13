"use strict";
// declaring an enum 
var SeatChoice;
(function (SeatChoice) {
    SeatChoice[SeatChoice["AISLE"] = 0] = "AISLE";
    SeatChoice[SeatChoice["MIDDLE"] = 1] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 2] = "WINDOW";
})(SeatChoice || (SeatChoice = {}));
;
const hcSeat = SeatChoice.AISLE;
// When working with an enum, the default value is zero which is auto-incremental to the rest of the values.
// But we can change this values redeclaring them as other numbers eg.
var SC;
(function (SC) {
    SC[SC["AISLE"] = 20] = "AISLE";
    SC[SC["MIDDLE"] = 50] = "MIDDLE";
    SC[SC["WINDOW"] = 70] = "WINDOW";
})(SC || (SC = {}));
;
// Notice the default count value has been altered from zero to 20 hence I created an increment of 20.
// Note however that this isn't the customary way of increment in an enum.
// We can also initialize the values to a string in an enum 
var sc;
(function (sc) {
    sc["AISLE"] = "aisle";
    sc["MIDDLE"] = "middle";
    sc["WINDOW"] = "window";
    sc[sc["FOURTH"] = 0] = "FOURTH";
})(sc || (sc = {}));
/**
 * enum sc {
    AISLE = "aisle",
    MIDDLE = "middle",
    WINDOW,
    FOURTH = 0
}
 */ 
