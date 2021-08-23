function d6() {
    var roll = Math.random();
    // your code here
    roll = Math.random() * 6;
    roll = Math.ceil(roll);
    return roll;
}
var playerRoll = d6();
console.log("The player rolled: " + playerRoll);