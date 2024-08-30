// How to Calculate Your Carbon Footprint - https://www.wikihow.com/Calculate-Your-Carbon-Footprint
// Method 1

// 1. Count the members of your household.
const myHouseMembers = 2;
// 2. Consider the size of your home
    const myHouseSize = 7;
// 3. Evaluate your food choices
    const myFoodChoice = 16;
// 4. Examine your water consumption
    const myWaterConsumption = 3;
// 5. Determine how many household purchases you make each year.
    const myHousePurchases = 4;
// 6. Consider how much waste you produce
    const myHouseWaste = 40;
// 7. Identify the amount of waste that you recycle
    const myHouseRecycle = 12;
// 8. Tally up your annual transportation scores.
    const myTransportation = 6;
// 9. Add up your points
    const cfpTotal = myHouseMembers + myHouseSize + myFoodChoice + myWaterConsumption + myHousePurchases + myHouseWaste + myHouseRecycle + myTransportation
    const myHeadings = document.querySelector("h1");
    myHeadings.textContent = "104";