var gov="manan";//assign gov the scope of global with a value manan

console.log(gov);

function fun(){

    //in the scope of fun
     
    gov="hemant"; //auto global
    id=0;
    dep="aero";//auto global
    console.log(gov);
}

fun();

console.log(dep);