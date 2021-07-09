var arr = [10,11,12,13,14,15,16]


//to print even no from this arr

// for(let val of arr){
//     if(val % 2 == 0){
//         console.log(val);
//     }
// }


//find the total sum of the arr(16/6/21-wed)

// var sum=0;
// for(let val of arr){
    
//     sum+=val
// }
// console.log(sum);



//
// arr.push(100)
// console.log(arr);


// arr.pop()
// console.log(arr);


var odd=[], even=[]

for(let num of arr){
    if(num%2==0){
        even.push(num)
    }
    else{
        odd.push(num)
    }
}

console.log("even array",even);
console.log("odd array",odd);