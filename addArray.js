console.log(iterArr([1, 2, 5]))
function iterArr(arr) {
    var sum = 0;
    for(var i = 0; i < arr.length; i++) {
        sum = arr[i] +sum;
    }
    return sum;
}