function printReverse(arr) {
    let newArr = [];
    for (var i = arr.length - 1; i >= 0; i--){
         newArr += arr[i]
    }
    return newArr;
}


console.log(printReverse([1, 2, 3, 4]));
console.log(printReverse(['a', 'b', 'c']))

function isUniform(array) {
    for(var i = 0; i < array.length - 1; i++) {
        if(array[i] !== array[i+1]) {
            return false;
        }
    }
    return true;
}

console.log(isUniform([1, 1, 1, 1]));
console.log(isUniform([2, 1, 1, 1, 1, 1]));
console.log(isUniform(["a", "b", "p"]));
console.log(isUniform(["b", "b", "b"]));


function sumArray(arr) {
    var newArr = arr.reduce((a, b) => a + b)
    return newArr;
}

console.log(sumArray([1, 2, 3]));
console.log(sumArray([10, 3, 10, 4]));
console.log(sumArray([-5, 100]));


function max(arr) {
    var newMax = Math.max(...arr)
    return newMax;
}

console.log(max([1, 2, 3]));
console.log(max([10, 3, 10, 4]));
console.log(max([-5, 100]));