console.log("hello from inside the main.js file")

// let myVar;

const myVar = "Christina";
const myVarType = typeof(myVar);

console.log("myVarType " + myVarType);
console.log(`myVarType ${myVarType}`);


function runNow () {
    if(myVarType=== "number") {
        console.log(`will 1 run?`);
        } else{
            console.log(`will 13 run?`);
        }
}

runNow();
runNow();