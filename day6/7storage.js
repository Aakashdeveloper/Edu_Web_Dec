localStorage 
> persistent Storage
> Save wrt Browser
> you have to remove manually

sessionStorage
> not persistent
> save wrt to tab 
> remove as you close tab

cookies
> save wrt to website


localStorage.setItem('abc','433462436')
undefined
localStorage.getItem('abc')
"433462436"
localStorage.removeItem('abc')
undefined
localStorage.getItem('abc')
null
localStorage.setItem('abc','433462436')


sessionStorage.setItem('token','4355453')
sessionStorage.getItem('token')
sessionStorage.removeItem('token')

document.cookie
"_ga=GA1.2.1880173027.1602255983; origin=delhi; type=resume"
document.cookie="city=london"
"city=london"
document.cookie
"_ga=GA1.2.1880173027.1602255983; origin=delhi; type=resume; _gid=GA1.2.2040491829.1609647605; city=london"
document.cookie="country=england;expires=Mon, 04 Jan 2021 01:00:00 UTC"
"country=england;expires=Mon, 04 Jan 2021 01:00:00 UTC"