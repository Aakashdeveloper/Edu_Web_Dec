Array is a collection of homogenious datatype
var a = [3,46,457,34,6,46]
var b = ['a','ef','dfeg','egreg']
var c = [true,false,false,true] 

Array is a collection of homogeneous & Heterogeneous datatype

var a = [4,4654,"464","46",true,"43",55,"dffds",false,false]

var city = ["London","NewYork","Delhi","Mumbai"]
undefined
city.length
4
city[0]
"London"
city[city.length-1]
"Mumbai"
city.push("Helsinki")
5
city
(5) ["London", "NewYork", "Delhi", "Mumbai", "Helsinki"]
city.push('Amsterdam')
6
city
(6) ["London", "NewYork", "Delhi", "Mumbai", "Helsinki", "Amsterdam"]
var city = ["London", "NewYork", "Delhi", "Mumbai", "Helsinki", "Amsterdam"]
undefined
city.pop()
"Amsterdam"
city
(5) 

["London", "NewYork", "Delhi", "Mumbai", "Helsinki"]
city.pop(2)
"Helsinki"
city.pop(66567576)
"Mumbai"
city
(3) ["London", "NewYork", "Delhi"]

var city = ["London", "NewYork", "Delhi", "Mumbai", "Helsinki", "Amsterdam"]

undefined
city.shift()
"London"
city.unshift('Nice')
6
city
(6) ["Nice", "NewYork", "Delhi", "Mumbai", "Helsinki", "Amsterdam"]

push > add at the end 
unshift > add at the start
pop > always remove the last value
shift > always remove the first value

var city = ["Nice", "NewYork", "Delhi", "Mumbai", "Helsinki", "Amsterdam"]
undefined
city.slice(1)
(5) ["NewYork", "Delhi", "Mumbai", "Helsinki", "Amsterdam"]
city
(6) ["Nice", "NewYork", "Delhi", "Mumbai", "Helsinki", "Amsterdam"]
city.slice(2,4)
(2) ["Delhi", "Mumbai"]
city.slice(2,5)
(3) ["Delhi", "Mumbai", "Helsinki"]


var city = ["Nice", "NewYork", "Delhi", "Mumbai", "Helsinki", "Amsterdam"]
city.splice(index,deletecount,values)

var city = ["Nice", "NewYork", "Delhi", "Mumbai", "Helsinki", "Amsterdam"]
undefined
city.splice(2,1)
["Delhi"]
city
(5) ["Nice", "NewYork", "Mumbai", "Helsinki", "Amsterdam"]
city.splice(3,2)
(2) ["Helsinki", "Amsterdam"]
city
(3) ["Nice", "NewYork", "Mumbai"]
city.splice(3,0,"Nice","Venice","Pune")
[]
city
(6) ["Nice", "NewYork", "Mumbai", "Nice", "Venice", "Pune"]
city.splice(2,1,"Dubai","Boston","Paris")
["Mumbai"]
city
(8) ["Nice", "NewYork", "Dubai", "Boston", "Paris", "Nice", "Venice", "Pune"]

var a = ['a','b','c']
var b = [1,3,5]
undefined
a+b
"a,b,c1,3,5"
a.concat(b)
(6) ["a", "b", "c", 1, 3, 5]

var colors = ["Red","Yellow","Green"]
var [a,b,c] = colors
a
"Red"
b
"Yellow"
c
"Green"


var myarr = ["Nice", "NewYork",["Audi","Bmw",["Red","Yellow","green"],"Merc","Kia"], "Dubai", "Boston", "Paris", "Nice", "Venice", "Pune"]

myarr[3]
"Dubai"
myarr[2]
(5) ["Audi", "Bmw", Array(3), "Merc", "Kia"]
myarr[2][3]
"Merc"
myarr[2][2]
(3) ["Red", "Yellow", "green"]
myarr[2][2][0]
"Red"

var myarr = ["Nice", "NewYork",["Audi","Bmw",["Red","Yellow","green"],"Merc","Kia"], "Dubai", "Boston", "Paris", "Nice", "Venice", "Pune"]
undefined
myarr.flat()
(13) ["Nice", "NewYork", "Audi", "Bmw", Array(3), "Merc", "Kia", "Dubai", "Boston", "Paris", "Nice", "Venice", "Pune"]
myarr.flat(2)
(15) ["Nice", "NewYork", "Audi", "Bmw", "Red", "Yellow", "green", "Merc", "Kia", "Dubai", "Boston", "Paris", "Nice", "Venice", "Pune"]


var a = ["Delhi", "mumbai", "Audi",false, "Bmw", 1, 2, 6, "Merc", "AM", "Paris", "amsterdam",true]
undefined
a.sort()
(13) [1, 2, 6, "AM", "Audi", "Bmw", "Delhi", "Merc", "Paris", "amsterdam", false, "mumbai", true]
a.reverse()
(13) [true, "mumbai", false, "amsterdam", "Paris", "Merc", "Delhi", "Bmw", "Audi", "AM", 6, 2, 1]