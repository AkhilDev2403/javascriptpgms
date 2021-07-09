//to find the minimum and maximum variable in an array (17/6/21-Wed)

//Min of array

var arr = [10, 15, 20, 5, 35]
var min = arr[0]   // storing 1st elements as min, and compare with other elem

for(let i=0; i<arr.length; i++){

    if(arr[i] < min){       

        min = arr[i];   
        
    }  
    
}
console.log(`The minimum value in the array is : ${min}`);




//Maximum of the array

var arr = [7,2,10,4,6]
var max = arr[0];

for(let i=0; i<arr.length; i++){

    if(arr[i] > max){

        max = arr[i]
    }
}

console.log(`The maximum value in the array is : ${max}`);