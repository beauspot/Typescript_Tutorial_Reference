// declaring an enum 
enum SeatChoice {
    AISLE,
    MIDDLE,
    WINDOW
};

const hcSeat = SeatChoice.AISLE 

// When working with an enum, the default value is zero which is auto-incremental to the rest of the values.
// But we can change this values redeclaring them as other numbers eg.

enum SC {
    AISLE = 20,
    MIDDLE = 50,
    WINDOW = 70
};

// Notice the default count value has been altered from zero to 20 hence I created an increment of 20.
// Note however that this isn't the customary way of increment in an enum.

// We can also initialize the values to a string in an enum 
enum sc {
    AISLE = "aisle",
    MIDDLE = "middle",
    WINDOW = "window",
    FOURTH = 0
}

/**
 * enum sc {
    AISLE = "aisle",
    MIDDLE = "middle",
    WINDOW,
    FOURTH = 0
}
 */