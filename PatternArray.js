// logic pattern (16/6/21-Wed)
//  arr = [3,4,5]         o/p [9,8,7]


// 1st find the sum of all numbers
// arr = 3+4+5 = 12   


// subtract from sum and push on new array
// 12-9 = 3
// 12-8 = 4
// 12-7 = 5



var arr = [3, 4, 5]

//find the sum of arr
var sum = 0

for(let result of arr){
    sum += result
}
console.log(`the sum of array is : ${sum}`);

//subtract sum from each array elem

var res = []
for(let result of arr){
    result = sum - result
    res.push(result)    
}
console.log("The output of the array is :", res);