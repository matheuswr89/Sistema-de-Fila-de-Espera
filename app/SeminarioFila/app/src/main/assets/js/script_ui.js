const DAYS_OF_THE_WEEK = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
];
const MONTHS = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Septembro",
    "Outubro",
    "Novembro",
    "Dezembro"
];

$(document).ready(function () {
    uiUpdateDateTime();
    setInterval(() => {
        uiUpdateDateTime();
    }, 1000);
});

function animate(element, animation, callback) {
    element.addClass("animate__animated " + animation);
    element.one("animationend", function () {
        element.removeClass("animate__animated " + animation);
        if (callback) callback();
    });
}

function pad(num, size) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
}

function uiUpdateDateTime() {
    let current_datetime = new Date();

    $("#time").text(
        `
        ${pad(current_datetime.getHours(), 2)}
        :
        ${pad(current_datetime.getMinutes(), 2)}
        :
        ${pad(current_datetime.getSeconds(), 2)}
        `
    );
    $("#day-of-the-week").text(DAYS_OF_THE_WEEK[current_datetime.getDay()])

    $("#date").text(
        `
            ${pad(current_datetime.getDate(), 2)} de
            ${MONTHS[current_datetime.getMonth()]} de
            ${current_datetime.getFullYear()}
        `
    );
}

function uiUpdateQueueCalls(data) {
    if (data.length > 4) {
        data.length = 4;
    }


    let current = data[0];

    $("#current-queue-call-code").text(
        current["senha"]
    );

    $("#current-queue-call-guiche").html(
        `
            <span>
                Guichê
            </span>
            <span class="ms-2 fw-bold">
                ${pad(current["guiche"], 2)}
            </span>
        `
    );

    animate($("#current-queue-call"), "animate__fadeInDown", () => {
        animate($("#current-queue-call"), "animate__pulse animate__repeat-3");
    });

    $("#previous-queue-calls > span").each((index, element) => {
        animate($(element), "animate__fadeOutDown", () => {
            $(element).removeClass();
            if (index < data.length - 1) {
                $(element).html(
                    `
                        <span>
                            ${data[index + 1]["senha"]}
                        </span>
                        <span>
                            Guichê ${pad(data[index + 1]["guiche"], 2)}
                        </span>
                    `
                );
                $(element).addClass("d-flex align-items-center justify-content-between w-100 border-bottom pb-1 px-1");
                animate($(element), "animate__fadeInDown");
            } else {
                $(element).html(
                    `
                        <span>
                        </span>
                        <span>
                        </span>
                    `
                );
            }
        });
    });
}

function uiUpdateWeather(data) {

    $("#city").text(data["name"]);
    $("#weather-icon").attr(
        "src",
        `https://openweathermap.org/img/wn/${data["weather"][0]["icon"]}@2x.png`
    );
    $("#temperature").text(`${Math.round(data["main"]["temp"])} °C`);
}

function uiUpdateMonetary(data){

    let content_width = 0;
    let recycled_elements = {};

    $("#monetary-carousel .monetary-card").each((index, element) => {
        let key = $(element).attr("id").toString().replace("id-", "");
        if (!data.hasOwnProperty(key)) {
            $('.carousel').flickity( 'remove', element);
        } else {
            recycled_elements[key] = element;
        }

    });

    for (let key in data) {
        if (data.hasOwnProperty(key)) {
            let pct_change_icon;
            let pct_change_text_color;
            let pct_change = parseFloat(data[key]["pctChange"]);

            if (pct_change > 0){
                pct_change_icon = "bi-graph-up-arrow";
                pct_change_text_color = "success";
            } else if (pct_change < 0){
                pct_change_icon = "bi-graph-down-arrow";
                pct_change_text_color = "danger";
            } else {
                pct_change_text_color = "black";
            }
            

            let html_content = `
                <span>
                    ${data[key]["code"]} / ${data[key]["codein"]}
                </span>
                <span class="fs-5 text-black fw-bolder">
                    R$ ${parseFloat(data[key]["bid"]).toFixed(2).replace(".", ",")}
                </span>
                <span class="d-flex flex-fill justify-content-around">
                    <span>
                        ${data[key]["code"]}
                    </span>
                    <span class="text-${pct_change_text_color} fw-bold ms-3">
                        <i class="bi ${pct_change_icon} me-1"></i>
                        ${parseFloat(data[key]["pctChange"]).toFixed(2).replace(".", ",")} %
                    </span>
                </span>
            `;

            if (recycled_elements.hasOwnProperty(key)){
                $(recycled_elements[key]).html(
                    html_content
                )
            } else {
                html_content = `
                    <div id="id-${key}"
                        class="monetary-card card shadow-sm border-secondary mx-4 d-grid gap-2 p-3 fw-bold col">
                        ${html_content}
                    </div>
                `;
                $('.carousel').flickity( 'append', $(html_content) );
            }
        }
    }
}

function uiUpdateNews(data) {
    $("#news-text").html(
        `
            <marquee direction="left" scrollamount="5">
                ${data["title"]}
                - 
                ${data["description"]}
            </marquee>
        `
    );

    if (data['urlToImage']) {
        $("#img-news").attr("src", data['urlToImage']);
    } else {
        $("#img-news").attr("src", "img/news.jpg");
    }

}
