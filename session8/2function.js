/*function sayHi(){
    return "Hi To JS"
}

console.log(sayHi())*/

///IFFI/////

(function(){
    console.log("Hi To Js")
}())


////Generators Function////
function loop(userinput){
    for(i=0;i<userinput;i++){
      console.log(i)
    }
}

loop(5)
1
2
3
4
5

function * loop(userinput){
    for(i=0;i<userinput;i++){
      yield i
    }
}