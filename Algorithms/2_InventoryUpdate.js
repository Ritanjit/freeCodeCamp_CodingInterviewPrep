function updateInventory(arr1, arr2) {

    // update quantity
    for (let i=0; i<arr1.length; i++) {
        for (let j=0; j<arr2.length; j++) {
            if (arr1[i][1]===arr2[j][1]) {
                arr1[i][0]+=arr2[j][0];
            }
        }
    }

    // add new items
    for (let i=0; i<arr2.length; i++) {
        let flag = false;
        for (let j=0; j<arr1.length; j++) {
            if (arr2[i][1]===arr1[j][1]) {
                flag = true;
            }
        }
        if (!flag) {
            arr1.push(arr2[i])
        }
    }

    // sort alphabetically
    arr1.sort((a,b) => {
        const itemA = a[1].toLowerCase();
        const itemB = b[1].toLowerCase();
        if (itemA < itemB) {
            return -1;
        }
        else if (itemA > itemB) {
            return 1;
        }
        else {
            return 0;
        }

    })

    return arr1;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

let res1 = updateInventory(curInv, newInv);

console.log(res1);
