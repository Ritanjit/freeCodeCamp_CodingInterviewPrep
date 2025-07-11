// helper function
function helper(...args) {

    // array 1 - argument 1
    const arr1 = args[0];

    // array 2 - argument 2
    const arr2 = args[1];

    // array 3 - symmetric difference
    let arr3 = [];

    // to get elements in array1 but not in array2
    for (let i = 0; i < arr1.length; i++) {
        let flag = false;
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                flag = true;
                break;
            }
        }
        if (!flag && !arr3.includes(arr1[i])) {
            arr3.push(arr1[i]);
        }
    }

    // to get elements in array1 but not in array2
    for (let i = 0; i < arr2.length; i++) {
        let flag = false;
        for (let j = 0; j < arr1.length; j++) {
            if (arr2[i] === arr1[j]) {
                flag = true;
                break;
            }
        }
        if (!flag && !arr3.includes(arr2[i])) {
            arr3.push(arr2[i]);
        }
    }

    // return symmetric difference
    return arr3;

}

// main function - reduce function for more than 2 arrays in function call
const sym = (...args) => args.reduce(helper);


let res = sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]);
console.log(res);