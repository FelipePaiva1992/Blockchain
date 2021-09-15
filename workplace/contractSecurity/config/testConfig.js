
var ExerciseC6A = artifacts.require("ExerciseC6A");
var ExerciseC6B = artifacts.require("ExerciseC6B");
var ExerciseC6C = artifacts.require("ExerciseC6C");
var ExerciseC6CApp = artifacts.require("ExerciseC6CApp");

var Config = async function(accounts) {

    // These test addresses are useful when you need to add
    // multiple users in test scripts
    let testAddresses = [
        "0x198212aA27d8AcDE5B40290aE824F570Bf564342",
        "0x36c083bB632aB102d2562747037b414c7b82E4e9",
        "0xce303a2E45c6578a7D19d847FABBE62eEF35391a"
    ];


    let owner = accounts[0];
    let exerciseC6A = await ExerciseC6A.new();
    let exerciseC6B = await ExerciseC6B.new();
    let exerciseC6C = await ExerciseC6C.new();
    let exerciseC6CApp = await ExerciseC6CApp.new(exerciseC6C.address);

    return {
        owner: owner,
        testAddresses: testAddresses,
        exerciseC6A: exerciseC6A,
        exerciseC6B: exerciseC6B,
        exerciseC6C: exerciseC6C,
        exerciseC6CApp: exerciseC6CApp,
    }
}

module.exports = {
    Config: Config
};