let dbObj = {};

dbObj.users = [
    {
        name:'Alvin',
        city:'Helsinki'
    },
    {
        name:'Sarah',
        city:'Amsterdam'
    }
]

dbObj.calc={
    sum:function(a,b){return a+b},
    sub:(a,b) => {return a-b}
}


module.exports = dbObj;