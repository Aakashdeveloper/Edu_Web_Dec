var moviename = "Avengers",
var movierating = 4.5
var movielang = "English"


var moviename1 = "Jab We Met",
var movierating1 = 4.8
var movielang1 = "Hindi"


var movies = {
    name: "Avengers",
    rating:4.5,
    lang:"English"
}
undefined
movies.name
"Avengers"
movies.lang
"English"
movies.rating
4.5
movies['name']
"Avengers"
movies.ind="Hollywood"
"Hollywood"
movies
{name: "Avengers", rating: 4.5, lang: "English", ind: "Hollywood"}
movies.rating = 3.4
3.4
movies
{name: "Avengers", rating: 3.4, lang: "English", ind: "Hollywood"}
delete movies.name
true
movies
{rating: 3.4, lang: "English", ind: "Hollywood"}


var movies =[
    {
        name: "Avengers",
        rating:4.5,
        lang:"English"
    },
    {
        name: "Jab We Met",
        rating:4.8,
        lang:"Hindi"
    }
]

movies[1].lang
"Hindi"

var calc={
    sum:function(a,b){return a+b},
    sub:(a,b) => {return a-b}
}

var calc={
    sum:function(a,b){return a+b},
    sub:(a,b) => {return a-b}
}
undefined
calc.sum(1,2)
3
calc.sub(5,2)
3