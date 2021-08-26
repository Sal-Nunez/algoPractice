function findAvg(arr) {
    var sum = 0;
    var average = 0;
    for(var i = 0; i<arr.length; i++) {
        sum = arr[i] + sum;
    }
    average = (sum) / (arr.length);
    return avg; 
}
console.log(findAvg([1, 3, 5, 7, 20]))