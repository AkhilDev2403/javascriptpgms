// Search an element in an array (17/06/21-Thu)

var  arr = [10, 24, 16, 20, 9, 17]
var search = 16
var flag = 0,i


for(i=0; i<arr.length; i++){

    if(search == arr[i]){
        console.log(arr[i]);
        flag++
    }
}

if(flag == 1){
    console.log(`Element found at ${arr.indexOf(16)}`)
}
else{
    console.log(`not found`)
}
