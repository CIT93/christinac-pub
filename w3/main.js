function determineHouseSizePts(size) {
    if(size === "large"){
        carbonFpPoints =carbonFpPoints + 10;
    } else if(size === "medium") {
        carbonFpPoints =carbonFpPoints + 7;
    } else if(size === "small") {
        carbonFpPoints =carbonFpPoints + 4;
    } else if(size === "apt") {
        carbonFpPoints =carbonFpPoints + 2;
    }
}

function determinePoints(numberInHousehold) {
    console.log("Inside the function");
if (numberInHousehold === 1) {

    carbonFpPoints = carbonFpPoints + 14;
} else if(numberInHousehold === 2) {
    carbonFpPoints = carbonFpPoints + 12;
}  else if(numberInHousehold === 3) {
    carbonFpPoints = carbonFpPoints + 10;
} else if(numberInHousehold === 4) {
    carbonFpPoints = carbonFpPoints + 8;
} else if(numberInHousehold === 5) {
    carbonFpPoints = carbonFpPoints + 6;
} else if(numberInHousehold === 6) {
    carbonFpPoints = carbonFpPoints + 4;
} else if(numberInHousehold > 6) {
    carbonFpPoints = carbonFpPoints + 2;
}
console.log(`Based on the number of member of the household of ${numberInHousehold} the points will be ${carbonFpPoints}`);
}

let carbonFpPoints = 0;
//const numberInHousehold = 2;


// global scope

determinePoints(2);
determineHouseSizePts("medium");

//Consider the size of your home

//function determineHouseSizePoints(SizeOfHouse) {
 //   console.log("Inside the function");
//if (SizeOfHouse === "Large House") {
 //   carbonFpPoint = carbonFpPoint + 10;
//} else if(SizeOfHouse === "medium-sized house") {
  //  carbonFpPoint = carbonFpPoint + 7;
//} else if(SizeOfHouse === "small house") {
  //  carbonFpPoint = carbonFpPoint + 4;
//} else if(SizeOfHouse === "apartment") {
  //  carbonFpPoint = carbonFpPoint + 2;
//}
//console.log(`Based on the size of your House: ${SizeOfHouse}, the points would be ${carbonFpPoint}`);
//}

//let carbonFpPoint = 0;

// global scope

//determineHouseSizePoints("medium-sized house")