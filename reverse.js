function reverse(arr) {
    var temp = [];
    for(var i = arr.length-1; i >= 0; i--) {
        temp.push(arr[i]);
    }
    return temp;
}
var arr = [0, 1, 2, 3, 4, 5];
console.log(reverse(arr))