if(condition){
    //do something
}else{
    //do something
}

var a = 93858;
if(a%2==0){
    console.log("Number "+a +" is even")
}else{
    console.log("Number "+a +" is odd")
}

Number 93858 is even

var a = 9385;
if(a%2==0){
    console.log("Number "+a +" is even")
}else{
    console.log("Number "+a +" is odd")
}

Number 9385 is odd

//////////////
var name = "Adam";
if(name=="Adam"){
    console.log(`${name} you are admin`)
}else if(name=="Bhumika"){
    console.log(`${name} you are super admin`)
}else if(name=="Aakash"){
    console.log(`${name} you are user`)
}else{
    console.log(`${name} we don't know you`)
}
Adam you are admin 

var role="Admin"
var name="John"

if(role=="Admin"){
    if(name=="John"){
        console.log(`${name} you are ${role} user`)
    }else if(name=="Tina"){
        console.log(`${name} you are ${role} user`)
    }else{
        console.log(`${name} we don't know you`)
    }
}else if(role="sysadmin"){
    if(name=="John"){
        console.log(`${name} you are ${role} user`)
    }else if(name=="Tina"){
        console.log(`${name} you are ${role} user`)
    }else{
        console.log(`${name} we don't know you`)
    }
}else{
    console.log(`${name} we don't know you`)
}

var a = 1
if(a){
    console.log("Hii")
}else{
    console.log("Bie")
}
"Hii"

var a = 0
if(a){
    console.log("Hii")
}else{
    console.log("Bie")
}
"Bie"

var a = -1
if(a){
    console.log("Hii")
}else{
    console.log("Bie")
}
"Hii"

//////////////////////////
"Ternary(Single line if else)"
/////////////////////////
var a =10
a>10?"Hiiii":"Bie"
"Bie"

var a =10
a==10?"Hiiii":"Bie"
"Hiiii"

var a =10
a>10?a+1:a-1
9

var a =10
a==10?a+1:a-1
11