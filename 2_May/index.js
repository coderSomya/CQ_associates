var btn= document.getElementById("btn");

var dummy=["manan", "rishika", "sanchit", "anupam"];
//fetched data



// btn.addEventListener("click", function(){
//      var x= document.createElement("div");
//      x.innerText="helllo hfsdnkaJ";
//      var main=document.getElementById("main");
//      main.append(x);

//     for(let i=0; i<dummy.length; i++){ 
//         //i = 0.1.2.3
//         if(dummy[i]=="sanchit"){
//         var x= document.createElement("div");

//         x.innerText=dummy[i];//manan, rishika...
//         var main=document.getElementById("main");
//         main.append(x);
//         }
//     }
//     // var x= document.createElement("div");
//     // x.innerText=dummy[2];
//     // var main=document.getElementById("main");
//     // main.append(x);
// })


var data = [
    {
        name: "Somyajeet",
        dep: "Mech"
    },
    {
        name: "Aditya",
        dep:"Maths"
    },
    { 
        name: "Arka",
        dep:"Chem"
    
    },
    {  
        name: "Manan",
        dep:"Mech"

    }
]


btn.addEventListener("click", function(){

    for(let i=0; i<data.length; i++){
    
        //ensuring case insensitivity

      var str=data[i].dep;
    var str2=str.toLowerCase();
      console.log(str2);
    if(data[i].dep.toLowerCase()=="mech"){
            var x= document.createElement("div");
    x.innerText=data[i].name;
    var main=document.getElementById("main");
    main.append(x);
    }
    }
})
