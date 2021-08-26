// var arr2d = [[2, 5, 8],
//             [3, 6, 1],
//             [5, 7, 7]];

// // // We can console.log the `8` in this array if we
// // // console.log(arr2d[0].length);
// // // the first index `0` will select the `[2, 5, 8]` sub-array
// // // the second index `2` will select the `8` out of that sub-array

// // function flattenArray(arr, value) {
// //     for(x = 0; x < arr.length; x++) {
// //         for(i = 0; i < arr[x].length; i++) {
// //             if(arr[x][i] == value) {
// //                 return true;
// //             }
// //         }
// //     }
// //     return false
// // }
// // console.log(flattenArray(arr2d, 7))

// complete the following function
function flatten(arr) {
    var flat = [];
    for(x = 0; x < arr.length; x++) {
        for(i = 0; i < arr[x].length; i++) {
            flat.push(arr[x][i])
        }
    }
    return flat;
}

var result = flatten( [ [2, 5, 8], [3, 6, 1], [5, 7, 7] ] );
console.log(result);
// we expect to get back [2, 5, 8, 3, 6, 1, 5, 7, 7]//
// console.log([].concat.apply([], [2, 5, 8, 3, 6, 1, 5, 7, 7]))
// console.log([2, 5, 8, 3, 6, 1, 5, 7, 7].flat([]))