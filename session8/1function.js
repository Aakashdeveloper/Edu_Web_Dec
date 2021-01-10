function
method
arrow function
iffi
generator function

//////
var a = 10
var b = 20
a+b
30


function add(a,b){
    return a+b
}
undefined
add(1,2)
3
add(4,5)
9

function test(a,b){
    return a,b
}

test(1,2)

function test(a,b){
    return a,b
}

undefined
test(1,2)

2
function test(b,a){
    return a,b
}
undefined
test(1,2)

1
function test(b,a){
    return b,a 
}
undefined
test(1,2)

function test(b,a){
    var out =[a,b]
    return out
}

function isEven(userinput){
    var out;
    if(userinput%2 ==0){
        out = `Number ${userinput} is even`
    }else{
        out = `Number ${userinput} is odd`
    }
    return out
}

isEven(5)

function add(a,b){
    return a+b
}

/////Method/////
When function assign to a variable 
///////////////

let add = function(a,b){
    return a+b
}

add(1,2)

////////////
arrow function > Es6
/////////////
let add = (a,b) => { return a+b }
add(1,2)

