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
        urlNews = listaURL[1];
        //urlNews="https://newsapi.org/v2/top-headlines?apiKey=3a0ed5b2de3d4e2b928e7dde3ec5d293&category=general&country=br&pageSize=4";
        Android.getRequest(urlNews, "setNewsJSON");
    }
    urlWeather = listaURL[2];
}

function setListaSenhas(list){
     listaSenhas = list;
     let senhasJSON = [];
     for (const item of list){
              const splitSenha = item.split(' - ');
              let senhaItem = {
                 senha: splitSenha[0],
                 guiche: parseInt(splitSenha[1])
              }
              senhasJSON.push(senhaItem);
     }
     uiUpdateQueueCalls(senhasJSON);
}

function setNewsJSON(data){
     dataNews = data.articles;
     if (dataNews > 0){
        updateNews(dataNews);
     }
}

//async function getApiData(url) {
//    const response = await fetch(url);
//    let data = response.json();
//    return data;
//}

function getData(){
    let data;

    if (!urlMonetary || !urlWeather || !urlNews || !time) {
        Android.getInitialData();
        setTimeout(getData, 1000);
    } else {
        Android.getRequest(urlMonetary, "uiUpdateMonetary");
        Android.getRequest(urlWeather, "uiUpdateWeather");

        updateNews(dataNews);

        setTimeout(getData, time * 1000);
    }

}

function updateNews(dado){

    if(dado && dado.length > 0){
        if(dado.length > 0){
            console.log("enviou noticia");
            console.log(JSON.stringify(dado[0]));
            uiUpdateNews(dado[0])
            dado.shift();
        }
    }
    else{
        Android.getRequest(urlNews, "setNewsJSON");
    }
}

function updateMonetary(data) {
    uiUpdateMonetary(JSON.parse(data));
}

function updateWeather(data) {
    uiUpdateWeather(JSON.parse(data));
}

$(document).ready(function () {
    getData();
});

