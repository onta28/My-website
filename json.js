// json to javascript object
let Myjson=`{
    "name":"onta",
    "age":22,
    "phone":null,
    "status":true
}`;
//  json parse -> json string -> js object
let opj=JSON.parse(Myjson);
console.log(opj)
 
// javascript object to json
let ob=
    {
        name:"Zumthong mahasai",
        age:22,
        phone:null,
        status:true
    }
let oj=JSON.stringify(ob.name);
console.log(oj);
let text=document.getElementById("json");
text.innerHTML=ob.name;
