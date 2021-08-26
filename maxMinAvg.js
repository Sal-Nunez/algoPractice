function maxMinAvg(arr) {
    var arrnew = [];
    var max = 0;
    var min = Infinity;
    var avg = 0
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max)
            max = arr[i]
    }
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
        }
        avg = sum / arr.length;
        arrnew.push(max)
        arrnew.push(min)
        arrnew.push(avg)
        return arrnew;
    }
    console.log(maxMinAvg([1, 5, 10, -2]))