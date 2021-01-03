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