var gov="arka";//assign gov a global scope with the value arka
function ask(question){//ask gets the scope of global
    gov="Aditya"; //auto global
    console.log(question, gov);
}

// var gov="arka"; //creates a new memory for gov-arka, scope of global


// ask("y");
function fun(){ //scope of global
    //inside the scope of fun
    // var gov="subhayan";//gov the scope of fun
    console.log(gov);
}



fun();
// ask("why");
// var gov= 'Somyajeet';
// fun()