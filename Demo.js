// Arrays in js (16/06/21-Wed)
// can modify and update
//no length limit
//can store multiplr or diffrnt typesof objects
//can store many values



var expenses = [10,25,36,89,95,88]

//u can update or change each every elem
//expenses[2] +=4 


//u can print like this 1
// for(let i=0; i<expenses.length; i++){
//     console.log(expenses[i]);
// }


// u can print like this 2
// for(let values of expenses){
//     console.log(values);
// }


for(let exp of expenses){
    if(exp>30){
        console.log(exp);
    }
}