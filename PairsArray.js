//pairs of array

var arr = [1, 2 , 3 , 4]
var res = 6;


for(let i=0; i<arr.length; i++){   //1<4

    for(let j=0; j<arr.length; j++){ //1<4 , 2<4

        if(arr[i] + arr[j] == res & arr[i]!=arr[j]){  //1+1, 1+2
            console.log(arr[i], arr[j]);
        }
    }

    
}