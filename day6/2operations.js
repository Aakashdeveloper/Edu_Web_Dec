var a = 10
var b =5;

var a = 10
var b =5;
undefined
a+b
15
a-b
5
b-a
-5
a*b
50
a/b
2
a%b
0

4%3
1
4%2
0

2%4
2
3%4
3

if we take modules of smaller to larger is always smaller

/////string////
var a = "Hi"
var b = 'js'

a+b //concat
"Hijs"
a-b
NaN (not a number)
a*b
NaN
a/b
NaN

var a = "Hi"
var b = 'js'
undefined
var c =10
undefined
a+c
"Hi10"
a-c
NaN

string +string = string
string +number = string
number +string = string
number +number = number

10+"20"+30
"1020"+30
"102030"

"10"+20+30
"1020"+30
"102030"

10+20+"30"
30+"30"
"3030"

10+"20"+30-1
"10"+20+30-1
10+20+"30"-1

10+"20"+30-1
102029
"10"+20+30-1
102029
10+20+"30"-1
3029

10+"20"+30-1
102029
"10"+20+30-1
102029
10+20+"30"-1
3029
10+20+"30"+1
"30301"

if both side  we have pure number that except + 
all operation will work 
in case of + it is still concat

"10"-1
9
10*"2"
20
"10"/"2"
5
"10"+"2"
"102"

"10a"/"2"
NaN
10*"2a"
NaN
"1a0"-1
NaN

/////////////////////////
var a ="10"
var b ="20"
parseInt(a)+parseInt(b)

parseInt(a)
10
parseInt(b)
20
var c = "a10"
undefined
parseInt(c)
NaN
var  d = "10a"
undefined
parseInt(d)
10


var a = "2234aaa"
parseInt(a)
2234

var b = "aa23a24"
parseInt(b)
NaN 

var a ="10.3235"


var a ="10.3235"
parseInt(a)
10
parseFloat(a)
10.3235

var a = "101"
parseFloat(a)
10

Number(a)
101
var b = 10.1
undefined
Number(b)