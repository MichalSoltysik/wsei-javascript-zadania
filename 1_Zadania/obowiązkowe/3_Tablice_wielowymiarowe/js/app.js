
var task1Array = [
    [2, 3],
    ["Ala", "Ola"],
    [true, false],
    [5, 6, 7, 8],
    [12, 15, 67]
];


var task2Array = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];


//Task 0
function checkArray(ddarray) {
    var result = [];
    for (let i=0; i < ddarray.length; i++) {
        const isNotOdd = ddarray[innerHeight].filter(numer => numer % 2 != 0).length > 0;
        result.push(!isNotOdd);
    }
    return result;
}

checkArray([
    [11, 12],
    [42, 2],
    [-4, -120],
    [0, 0],
    [1, 34],
    ]);

//Task 1

var task1Array = [
    [2, 3],
    ["Ala", "Ola"],
    [true, false],
    [5, 6, 7, 8],
    [12, 15, 67]
];
// 1
console.log(task1Array[3][2]);
// 2
console.log(task1Array[1].length);
// 3
console.log(task1Array[4][2]);

//Task 2
var task2Array = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

for (let i=0; i<task2Array.length; i++) {
    console.log(task2Array[i]);
}

for (let i=0; i<task2Array.length; i++) {
    console.log(task2Array[i].length);
}

for (let i=0; i<task2Array.length; i++) {
    for (let j=0; j<task2Array.length; j++) {
    console.log(task2Array[i][j]);
    }
}

//Task 3
function print2DArray(task2Array) {
    for (let i=0; i<task2Array.length; i++) {
        for (let j=0; j<task2Array.length; j++) {
        console.log(task2Array[i][j]);
        }
    }
}
print2DArray([[1,2], [3,4]])

//Task 4
var task3Array = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9. 10, 11, 12]
]

print2DArray(task3Array);

//Task 5
funtion create2DArray(rows, columns) {
    var counter = 1;
    var array1 = [];

    for (let i=0; i<rows; i++) {
        var array2 = [];
        for (let j=0; j<columns; j++) {
             array2.push(counter);
             counter++;
        }
        array1.push(array2);
    }
    return array1;
}

create2DArray(4,4);