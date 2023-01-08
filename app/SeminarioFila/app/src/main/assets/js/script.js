var time;
var listaURL;
var urlMonetary;
var urlWeather;
var urlNews = "";
var listaSenhas;
var dataMonetary;
var dataNews;
var dataWeather;

function setTime(t){
    time = t;
    console.log(time);
}

function setListaURL(list){
    listaURL = list;
    urlMonetary = listaURL[0];
    if (listaURL[1] !== urlNews){
        //urlNews = listaURL[1];
        urlNews="https://newsapi.org/v2/top-headlines?apiKey=3a0ed5b2de3d4e2b928e7dde3ec5d293&category=general&country=br&pageSize=4";
        Android.getNews(urlNews);
    }
    urlWeather = listaURL[2];
}

function setListaSenhas(list){
     listaSenhas = list;
     enviaSenhaAilton(listaSenhas);
}

function setNewsJSON(data){
     dataNews = data.articles;
     //console.log(dataNews);
}

async function getApiData(url) {
    const response = await fetch(url);
    let data = response.json();
    return data;
}

function getData(){
    let data;

    data = getApiData(urlMonetary);
    data.then(function (response){
        console.log("pegou dado de finança");
        res = JSON.stringify(response);
        enviaFinancaAilton(res);
    });

    data = getApiData(urlWeather);
    data.then(function (response){
        console.log("pegou dado de tempo");
        res = JSON.stringify(response);
        enviaWeatherAilton(res);
    });

    enviaNewsAilton(dataNews);

    setTimeout(getData, 10000);

}

function enviaWeatherAilton(dado){
    console.log("enviou dado de tempo")
    console.log(dado);
}

function enviaFinancaAilton(dado){
    console.log("enviou dado de financa")
    console.log(dado);
}

function enviaSenhaAilton(dado){
    console.log("enviou senhas");
    console.log(dado);
}

function enviaNewsAilton(dado){

    if(dado){
        if(dado.length > 0){
            console.log("enviou noticia");
            console.log(JSON.stringify(dado[0]));
            dado.shift();
        }
        else{
            console.log("a");
            Android.getNews(urlNews);
        }
    }
    else{
        console.log("else")
    }
}
getData();

