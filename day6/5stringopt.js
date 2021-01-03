var city = "lonDon"
undefined
city.toUpperCase()
"LONDON"
city.toLowerCase()
"london"
city.length
6
var city = " Amsterdam  "
undefined
city.length
12
city.trim()
"Amsterdam"
city.trim().length
9

//////////JavaScript is case sensitive
var color = "red"
var color1= "Red"
undefined
color==color1
false
color===color1
false
color.toUpperCase() == color1.toUpperCase()
true

var a = "lONdoN"
"London"


var a = "lONdoN"
undefined
a[0]
"l"
a[1]
"O"
a.charAt(0)
"l"
a.charAt(4)
"o"
a[6]
undefined
a.charAt(6)
""

var city = "Amsterdam"
city.slice(1)
"msterdam"
city.slice(2)
"sterdam"
city.slice(0)
"Amsterdam"
city.slice(2,5)
"ste"

var a = "lONdoN"
undefined
a.charAt(0).toUpperCase()
"L"
a.slice(1).toLowerCase()
"ondon"
a.charAt(0).toUpperCase()+a.slice(1).toLowerCase()


var a ="i am doing javascript"
a.replace('javascript','js')
"i am doing js"
var a ="javascript i am doing javascript"
a.replace('javascript','js')
"js i am doing javascript"


var a ="javascript i am doing javascript"
a.replace(/javascript/g,'js')
"js i am doing js"