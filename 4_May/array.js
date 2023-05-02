var arr= [1,2,3,4,5,6];

//assume this to be incoming data
// console.log(arr);

// //push-> adds an element to the arr
// arr.push(10);

// console.log(arr);

// arr.pop();
// console.log(arr);

// //shift -> form the front
// arr.unshift(12);
// console.log(arr);


//map
//filter

//map method
// var b=arr.map((elem)=>{
//     return elem*2;
// })



// console.log(b);

var b= arr.filter((elem)=>{
    return elem>3;//logical statement 
})


console.log(b);