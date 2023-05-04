//type conversion

/*
implicit type conversion->compiler does for us ="coercion"
explicit type conversion-> we actually intend to convert the type
*/

// console.log(1+"1");//type conversion

// console.log(typeof(1+"1"));
// console.log(1-"something");//type conversion
// console.log(5*"6");//type conversion

//NaN-> not a number

if(""){//empty string == false
    console.log("empty string");
}

if("random string"){ //rest strings = true
    console.log("any other string");
}

//among strings, only ""-> falsy value
/*
number- 1,2,90.9, 16
string- "web dev", "g"
undefined
null
NaN
Boolean
*/