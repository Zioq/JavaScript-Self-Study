// Setting the default Array
const createEmptyArray = () => new Array(16).fill(false);

// Drum Arrays (object)
let kicks = createEmptyArray();
let snares = createEmptyArray();
let hiHats = createEmptyArray() ;
let rideCymbals = createEmptyArray();


// Function for return the array based on the Drum's name
const getDrumArrayByName = (name) => {
    switch (name) {
        case 'kicks':
            return kicks;
        case 'snares':
            return snares;
        case 'hiHats':
            return hiHats;
        case 'rideCymbals':
            return rideCymbals;
        default:
            return;
    }
};

// A funciton that filp the boolean value in the correct array at the specific index
const toggleDrum = (drumArrayName, index) => {
    const drums = getDrumArrayByName(drumArrayName);
    // Condition
    if(!drums || index > 15 || index < 0) {
        return;
    }
    // flip the boolean value
    drums[index] = !drums[index]; 
};

// Funtion `Clear` that takes an array name stirng and set all values in the correct array to false
const clear = (drumArrayName) => {
    const drums = getDrumArrayByName(drumArrayName);
    if(drums) {
        drums.fill(false);
    }
};

// Function `Invert` that takes an array neme string and filps the boolean value of all elements in the correct array
const invert = (drumArrayName) => {
    const drums =getDrumArrayByName(drumArrayName);
    if(!drums) {
        return;
    } 
    for (let i =0; i<drums.length; i++) {
        drums[i] = !drums[i];
    }
};

//Play multiple synthesizer tones at once
// A function called `getNeighborPads` that accepts and x,y and a size parameter. In the appication, these value refer to the synth grid:  x and y zero-indexed from the bottom left of the grid, and size is a number presenting the number of rows/columns in the squre. getNeighborPads should return an array of neighbors, each in the form [xValue, yValue]. Neighbors are the squres immediately to the left, right, above, and below a grid position
const getNeighborPads =(x,y,size) => {
    const neighborPads = [];
    if(x >=size || y >= size || x< 0 || y< 0 || size<1) {
        return neighborPads;
    }
    neighborPads.push([x - 1, y]);
    neighborPads.push([x, y -1 ]);
    neighborPads.push([x + 1, y]);
    neighborPads.push([x, y + 1]);

    return neighborPads.filter((neighbor) => {
        return neighbor.every((val) => {
            return val >= 0 && val< size;
        });
    });

};

