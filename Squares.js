function squareVal(arr) {
    var array = [];
for(var i = 0; i<arr.length; i++) {
    var temp = arr[i] * arr[i];
    array.push(temp);
}
return array; 
}
console.log(squareVal([1, 2, 3]))