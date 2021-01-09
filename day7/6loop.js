for
while loop
do while loop
for of
for in 
Map
filter 

////for loop////
for(var i =0;i<5;i++){
    console.log(i)
}
0
1
2
3
4

var city = ["London", "Paris", "Insburg", "Mumbai", "Venice", "Amsterdam", "Delhi"];
for(i=0;i<city.length;i++){console.log(`My City is ${city[i]}`)}
My City is London
My City is Paris
My City is Insburg
My City is Mumbai
My City is Venice
My City is Amsterdam


var city = ["London", "Paris",["Red","Yellow","Green"], "Insburg", "Amsterdam", "Delhi"];
for(i=0;i<city.length;i++){console.log(city[i])}
VM258:1 London
VM258:1 Paris
VM258:1 (3) ["Red", "Yellow", "Green"]
VM258:1 Insburg
VM258:1 Amsterdam


for(i=0;i<city.length;i++){
    for(j=0;j<city[i].length;j++)
    console.log(city[i][j])
}

var city = ["London", "Paris",["Red","Yellow","Green"], "Insburg", "Amsterdam", "Delhi"];

undefined
Array.isArray(city)
true
Array.isArray(city[0])
false
Array.isArray(city[2])
true


for(i=0;i<city.length;i++){
    if(Array.isArray(city[i])){
        for(j=0;j<city[i].length;j++){
            console.log(city[i][j])
        }
    }else{
        console.log(city[i])
    }
    
}

London
VM376:7 Paris
VM376:4 Red
VM376:4 Yellow
VM376:4 Green
VM376:7 Insburg
VM376:7 Amsterdam


var city = ["London", "Paris", "Insburg", "Mumbai", "Venice", "Amsterdam", "Delhi"];
for(mycity of city){
    console.log(mycity)
}

var city = ["London", "Paris",["Red","Yellow","Green"], "Insburg", "Amsterdam", "Delhi"];
for(mycity of city){
    if(Array.isArray(mycity)){
        for(color of mycity){
            console.log(color)
        }
    }else{
        console.log(mycity)
    }
}

////while////
var i = 10;
while(i<5){
    console.log(i);
    i++
}

////Do while////
var i = 10;
do{
    console.log(i);
    i++
}
while(i<5)