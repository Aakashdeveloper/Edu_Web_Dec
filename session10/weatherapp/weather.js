const CityUrl = "http://localhost:4500"

function getWeather(){
    let City = $('.cities')[0].value;
    const weatherUrl =`http://api.openweathermap.org/data/2.5/forecast/daily?q=${City}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`;
    $.ajax({
        url:weatherUrl,
        type:'GET',
        dataType:'json',
        success:function(data){
            console.log(data.city.name)
            $('#cityName')[0].innerText=data.city.name;
            $('#weather').empty();
            for(i=0;i<data.list.length;i++){
                $('#weather').append(
                    "<div class='card col-md-2'><div class='row'>"+
                    "<img class='card-img-top' src='https://openweathermap.org/img/w/"+data.list[i].weather[0].icon+".png' alt='weather'/>"+
                    "<span class='topTemp'>"+data.list[i].temp.day+"°C</span></div><div class='card-body'>"+
                    "<span class='max'>"+data.list[i].temp.max+"</span>/<span class='min'>"+data.list[i].temp.min+"°C</span><h4 class='card-title'>"+data.list[i].weather[0].main+"</h4><p class='card-text'>"+
                    "<p class='day'>"+Date(data.list[i].dt)+"</p><p>Humidity:"+data.list[i].humidity+"</p></p></div></div>"
                )
            }
        }
    })
}


const getCity=() => {
    fetch(CityUrl,{method:'GET'})
    .then((res) => res.json())
    .then((data) => {
        
        for(i=0;i<data.length;i++){
            console.log(data[i].name)
            var node = document.createElement('option');
            var textNode = document.createTextNode(data[i].name);
            node.appendChild(textNode);
            document.getElementsByClassName('cities')[0].appendChild(node)
        }
    })
}