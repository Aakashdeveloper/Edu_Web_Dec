Date()
"Sat Jan 09 2021 07:50:10 GMT+0530 (India Standard Time)"
var a = new Date()
undefined
a.getFullYear()
2021
a.getDate()
9
a.getMonth()
0
a.getDay()
6

>>>month start as jan as 0 and dec as 11
>>>day start as sunday as 0 and monday as 1


switch(new Date().getDay()){
    case 0:
        console.log("Its Sunday")
        break;
    case 1:
        console.log("Its Monday")
        break;
    case 6:
        console.log("Its Saturday")
        break;
    default:
        console.log("Wrong Input")
}
Its Saturday