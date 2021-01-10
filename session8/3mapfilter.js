var a = [4,5,3,8,9,43,54,87];
a.map((data) => { return data*2})
(8) [8, 10, 6, 16, 18, 86, 108, 174]
a
(8) [4, 5, 3, 8, 9, 43, 54, 87]

a.map((data) => { return `<p>${data*2}</p>`})
[8, 10, 6, 16, 18, 86, 108, 174]
["<p>8</p>", "<p>10</p>", "<p>6</p>", "<p>16</p>", "<p>18</p>", "<p>86</p>", "<p>108</p>", "<p>174</p>"]

> map always return same length of output array as input array
> it is use to apply the logic or iterate over the array

var b = [20,30,35,34,26,67,21,19,32]
b.filter((data) => {return data>25})
[30, 35, 34, 26, 67, 32]

b.map((data) => {return data>25})
[false, true, true, true, true, true, false, false, true]

> filter is use to return data on basis of condition
> it may or may not have same length of output array
> it only return those value for which output is true 

var a = [0,1,2,3]
a.map((data) => { return data*2})
 [0, 2, 4, 6]

a.filter((data) => { return data*2})
[1, 2, 3]