alert("aqui");

const FINANCAS = {
    "EURBRL": {
        "code": "EUR",
        "codein": "BRL",
        "name": "Euro/Real Brasileiro",
        "high": "5.6388",
        "low": "5.549",
        "varBid": "-0.0667",
        "pctChange": "-1.18",
        "bid": "5.5614",
        "ask": "5.5635",
        "timestamp": "1673042397",
        "create_date": "2023-01-06 18:59:57"
    },
    "USDBRLT": {
        "code": "USD",
        "codein": "BRL",
        "name": "Dólar Americano/Real Brasileiro Turismo",
        "high": "5.39",
        "low": "5.265",
        "varBid": "-0.11",
        "pctChange": "2.04",
        "bid": "5.11",
        "ask": "5.43",
        "timestamp": "1673031480",
        "create_date": "2023-01-06 15:58:00"
    },
    "BTCBRL": {
        "code": "BTC",
        "codein": "BRL",
        "name": "Bitcoin/Real Brasileiro",
        "high": "89.934",
        "low": "89.5",
        "varBid": "-131",
        "pctChange": "0.0",
        "bid": "89.55",
        "ask": "89.586",
        "timestamp": "1673184101",
        "create_date": "2023-01-08 10:21:41"
    }
};

const NOTICIAS = [
    {
        source: {
            id: null,
            name: "Clicrbs.com.br"
        },
        author: "GZH",
        title: "Lula determina intervenção na área de segurança pública no Distrito Federal - GZH",
        description: "Secretário-executivo do Ministério da Justiça, Ricardo Garcia Cappelli, será o responsável por assumir a condução dos trabalhos",
        url: "https://gauchazh.clicrbs.com.br/politica/noticia/2023/01/lula-determina-intervencao-na-area-de-seguranca-publica-no-distrito-federal-clcnv0co7001m0182eja0hu70.html",
        urlToImage: "https://www.rbsdirect.com.br/filestore/6/7/2/5/6/3/4_91a8693538d7142/4365276_6fe4214ed528f23.jpg?w=1200&h=630&a=c&version=1575255600",
        publishedAt: "2023-01-09T04:57:13Z",
        content: null
    },
    {
        source: {
            id: "globo",
            name: "Globo"
        },
        author: null,
        title: "Alexandre de Moraes afasta governador do DF por 90 dias após ataques terroristas - Globo.com",
        description: "Ministro do STF também mandou desmontar imediatamente os acampamentos de bolsonaristas golpistas em frente a quartéis do Exército. Ao menos 300 foram presos após invasão e depredação das sedes do palácio presidencial, do Congresso e do STF.",
        url: "https://g1.globo.com/politica/ao-vivo/bolsonaristas-radicais-sobem-rampa-do-congresso.ghtml",
        urlToImage: "https://s2.glbimg.com/R8hPlG_cZR-U2I5XFp04whn1n_w=/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/p/U/NQo77ZQaOKcQ5j2QFVeQ/img-facebook.jpg",
        publishedAt: "2023-01-09T03:51:00Z",
        content: null
    },
    {
        source: {
            id: null,
            name: "Metropoles.com"
        },
        author: null,
        title: "Justiça do DF permite que bolsonaristas presos sejam enviados à Papuda - Metrópoles",
        description: "Medida foi tomada pela juíza da Vara de Execuções Penais (VEP) Leila Cury na noite deste domingo (8/1), marcado por atos terroristas no DF",
        url: "https://www.metropoles.com/distrito-federal/na-mira/justica-do-df-permite-que-bolsonaristas-presos-sejam-enviados-a-papuda",
        urlToImage: "https://uploads.metropoles.com/wp-content/uploads/2022/05/31152127/papuda-presidiario-projeto-social.jpg",
        publishedAt: "2023-01-09T03:08:00Z",
        content: null
    },
    {
        source: {
            id: "google-news",
            name: "Google News"
        },
        author: null,
        title: "‘Não vamos mais aturar. É tentativa de golpe’, diz ministro da Defesa após terrorismo bolso ... - CartaCapital",
        description: null,
        url: "https://news.google.com/__i/rss/rd/articles/CBMijQFodHRwczovL3d3dy5jYXJ0YWNhcGl0YWwuY29tLmJyL2NhcnRhZXhwcmVzc2EvbmFvLXZhbW9zLW1haXMtYXR1cmFyLWUtdGVudGF0aXZhLWRlLWdvbHBlLWRpei1taW5pc3Ryby1kYS1kZWZlc2EtYXBvcy10ZXJyb3Jpc21vLWJvbHNvbmFyaXN0YS_SAZEBaHR0cHM6Ly93d3cuY2FydGFjYXBpdGFsLmNvbS5ici9jYXJ0YWV4cHJlc3NhL25hby12YW1vcy1tYWlzLWF0dXJhci1lLXRlbnRhdGl2YS1kZS1nb2xwZS1kaXotbWluaXN0cm8tZGEtZGVmZXNhLWFwb3MtdGVycm9yaXNtby1ib2xzb25hcmlzdGEvYW1wLw?oc=5",
        urlToImage: null,
        publishedAt: "2023-01-09T01:06:00Z",
        content: null
    },
    {
        source: {
            id: null,
            name: "Gazetadopovo.com.br"
        },
        author: "Wesley Oliveira",
        title: "Bolsonaro condena atos de vandalismo e repudia “acusações” de Lula - Gazeta do Povo",
        description: "O ex-presidente Jair Bolsonaro (PL) usou as redes sociais para criticar os atos de vandalismo no Distrito Federal. Leia na Gazeta do Povo.",
        url: "https://www.gazetadopovo.com.br/republica/breves/bolsonaro-condena-atos-de-vandalismo-e-repudia-acusacoes-de-lula/",
        urlToImage: "https://media.gazetadopovo.com.br/2022/11/01201658/bolsonaro-660x372.jpg",
        publishedAt: "2023-01-09T00:42:00Z",
        content: "O ex-presidente Jair Bolsonaro (PL) usou as redes sociais na noite deste domingo (8) para condenar os atos de vandalismo em prédios públicos do Distrito Federal. Apesar disso, ex-chefe do Executivo l… [+1744 chars]"
    },
    {
        source: {
            id: null,
            name: "Colunadofla.com"
        },
        author: null,
        title: "Flamengo vence XV de Jaú de virada e avança para mata-mata da Copinha - Coluna do Fla",
        description: "Flamengo vence terceiro jogo da fase de grupos e garante vaga na etapa classificatória Enquanto o time profissional do Flamengo volta ao ritmo com os",
        url: "https://colunadofla.com/2023/01/flamengo-vence-xv-de-jau-de-virada-e-avanca-para-mata-mata-da-copinha/",
        urlToImage: "https://colunadofla.com/wp-content/uploads/2023/01/copinha-flamengo-contra-xv-de-jau.jpeg",
        publishedAt: "2023-01-09T00:33:42Z",
        content: "Flamengo vence terceiro jogo da fase de grupos e garante vaga na etapa classificatória. Enquanto o time profissional do Flamengo volta ao ritmo com os primeiros treinos sob comando do técnico Vítor P…[+2114 chars]"
    },
    {
        source: {
            id: null,
            name: "YouTube"
        },
        author: null,
        title: "Josias: Bolsonaro tem que ser declarado inelegível após atos terroristas - UOL",
        description: "O colunista do UOL Josias de Souza afirma que o ex-presidente Jair Bolsonaro (PL) deveria ser condenado inelegível após atos terroristas em Brasília neste do...",
        url: "https://www.youtube.com/watch?v=JIiFO41CFC4",
        urlToImage: "https://i.ytimg.com/vi/JIiFO41CFC4/maxresdefault.jpg",
        publishedAt: "2023-01-09T00:33:38Z",
        content: null
    },
    {
        source: {
            id: null,
            name: "Uol.com.br"
        },
        author: null,
        title: "Petroleiros alertam para possíveis ataques a refinarias e golpistas fazem bloqueios; veja situação nos estados - UOL",
        description: "Bolsonaristas anunciaram interdições em locais como Duque de Caxias (RJ) e Araucária (PR)",
        url: "https://www1.folha.uol.com.br/mercado/2023/01/petroleiros-alertam-para-possiveis-ataques-a-refinarias.shtml",
        urlToImage: "https://f.i.uol.com.br/fotografia/2023/01/08/167322290363bb5af76379e_1673222903_3x2_md.jpg",
        publishedAt: "2023-01-09T00:14:00Z",
        content: "FUP (Federação Única dos Petroleiros) emitiu nota alertando para possíveis ataques de manifestantes extremistas a refinarias da Petrobras, o que representaria uma nova escalada dos atos golpistas que… [+6166 chars]"
    },
    {
        source: {
            id: null,
            name: "Estadao.com.br"
        },
        author: null,
        title: "Exército põe blindados na rua para isolar QG; golpistas são impedidos de entrar no acampamento - Política Estadão",
        description: "Mais cedo, extremistas que estavam na Esplanada voltaram caminhando para o acampamento na área militar sem que a policia os abordasse",
        url: "https://www.estadao.com.br/politica/apos-invasao-de-predios-radicais-se-refugiam-na-frente-do-qg-do-exercito-sem-ser-importunados/",
        urlToImage: "https://www.estadao.com.br/resizer/ie_uOQISvs2Vlw3m874pYQl1FG4=/1200x630/filters:format(jpg):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/estadao/S4TJR5JHE5CGPB5KYLWSSQRW7M.PNG",
        publishedAt: "2023-01-08T23:40:57Z",
        content: "BRASÍLIA - Parte dos extremistas que participaram dos atos criminosos neste domingo, 8, tentou retornar aos acampamentos erguidos há meses em frente ao Quartel General do Exército, mas foi impedida d… [+2018 chars]"
    },
    {
        source: {
            id: "google-news",
            name: "Google News"
        },
        author: null,
        title: "William Bonner cancela folga e vai às pressas para a Globo por atos golpistas - Notícias da TV",
        description: null,
        url: "https://news.google.com/__i/rss/rd/articles/CBMigAFodHRwczovL25vdGljaWFzZGF0di51b2wuY29tLmJyL25vdGljaWEvdGVsZXZpc2FvL3dpbGxpYW0tYm9ubmVyLWNhbmNlbGEtZm9sZ2EtZS12YWktcHJlc3Nhcy1wYXJhLWdsb2JvLXBvci1hdG9zLWdvbHBpc3Rhcy05NTQ2N9IBAA?oc=5",
        urlToImage: null,
        publishedAt: "2023-01-08T23:25:00Z",
        content: null
    },
    {
        source: {
            id: null,
            name: "Poder360.com.br"
        },
        author: "Caio Spechoto",
        title: "PT desconfia de PM de Brasília desde diplomação de Lula - Poder360",
        description: "Grupo contrário à eleição do petista já havia queimado ônibus na capital federal em dezembro. Leia no Poder360.",
        url: "https://www.poder360.com.br/governo/pt-desconfia-de-pm-de-brasilia-desde-diplomacao-de-lula/",
        urlToImage: "https://static.poder360.com.br/2022/12/Vandalismo-Bolsonaristas-Policiais-Armas-PoliciaApoiadores-Bolsonaro-Fogo-PoliciaFederal-PF-Carros-Onibus-Depedracao-Indigenas-12dez2022-7-1-848x477.jpg",
        publishedAt: "2023-01-08T23:20:40Z",
        content: "As invasões e depredações dos prédios do Palácio do Planalto, do Congresso Nacional e do STF (Supremo Tribunal Federal) trouxeram à tona uma desconfiança entre o grupo político do presidente Luiz Iná… [+2798 chars]"
    },
    {
        source: {
            id: null,
            name: "Uol.com.br"
        },
        author: "Carolina Alberti;",
        title: "Neymar se manifesta sobre morte de Roberto Dinamite: 'lenda' - UOL Esporte",
        description: "Neymar lamentou a morte do ex-jogador Roberto Dinamite em postagem nas redes sociais.O camisa 10 do PSG compartilhou uma foto ao lado do ídolo do Vasco;Dinamite morreu aos 68 anos de causa não divulgada, após mais de um ano tratando tumores na região do i",
        url: "https://www.uol.com.br/esporte/futebol/ultimas-noticias/2023/01/08/neymar-roberto-dinamite-morte.htm",
        urlToImage: "https://conteudo.imguol.com.br/c/esporte/9d/2023/01/08/neymar-homenageia-roberto-dinamite-nas-redes-sociais-1673218941018_v2_615x300.jpg",
        publishedAt: "2023-01-08T23:14:11Z",
        content: "Neymar lamentou a morte do ex-jogador Roberto Dinamite em postagem nas redes sociais. Descanse em paz, lenda. Neymar, atacante do PSG e da seleção brasileira, no Instagram.Roberto Dinamite é o ma…[+389 chars]"
    },
    {
        source: {
            id: "globo",
            name: "Globo"
        },
        author: null,
        title: "VÍDEO: como ficaram salas de Janja e secretário de Comunicação após invasão de bolsonaristas terroristas - Globo.com",
        description: "Cadeiras, mesas, documentos e área de café foram danificadas durante a ação dos apoiadores do ex-presidente Jair Bolsonaro (PL).",
        url: "https://g1.globo.com/politica/noticia/2023/01/08/imagens-mostram-como-ficou-a-sala-de-janja-apos-invasao-de-bolsonaristas-terroristas.ghtml",
        urlToImage: "https://s2.glbimg.com/_h9OHBHlhHZAMZOnuK2X5MPMFq0=/1200x/smart/filters:cover():strip_icc()/s01.video.glbimg.com/x720/11262888.jpg",
        publishedAt: "2023-01-08T22:29:12Z",
        content: null
    },
    {
        source: {
            id: null,
            name: "Uol.com.br"
        },
        author: "Adige Silva",
        title: "MUDANÇAS NO PIS 2023: GOVERNO LULA antecipou VALOR MAIOR do CALENDÁRIO DE PAGAMENTO DO PIS PASEP 2023 p... - TV Jornal",
        description: "Funcionários de todo Brasil aguardam um novo pagamento do PIS",
        url: "https://tvjornal.ne10.uol.com.br/noticias/2023/01/15156063-mudancas-no-pis-2023-governo-lula-antecipou-valor-maior-do-calendario-de-pagamento-do-pis-pasep-2023-para-janeiro-veja-se-recebe-pis-ano-base-2021-como-fazer-saque-pis-consulta-pis-e-veja-tabela-pis.html",
        urlToImage: "https://imagens.ne10.uol.com.br/veiculos/_midias/png/2022/11/16/615x300/1_design_sem_nome__25_-22033738.png",
        publishedAt: "2023-01-08T22:00:00Z",
        content: "Com muita expectativa, trabalhadores do setor privado e funcionários públicos de todo Brasil aguardam o pagamento do novo valor do PIS PASEP 2023. Há a expectativa entre os profissionais que o pagam…[+4627 chars]"
    },
    {
        source: {
            id: null,
            name: "Editalconcursosbrasil.com.br"
        },
        author: "Velvet Agência",
        title: "Vaso sanitário 'inteligente' testa sua urina e diz como está sua saúde - Edital Concursos Brasil",
        description: "Descubra qual é a função de um novo scanner que faz leitura de urina e que pode ser acoplado de maneira sutil em qualquer vaso sanitário.",
        url: "https://editalconcursosbrasil.com.br/noticias/2023/01/vaso-sanitario-inteligente-testa-sua-urina-e-diz-como-esta-sua-saude/",
        urlToImage: "https://editalconcursosbrasil.com.br/wp-content/uploads/2016/05/edital-concursos-brasil.png",
        publishedAt: "2023-01-08T21:02:00Z",
        content: "A empresa Withings é especializada em produzir equipamentos voltados para a área de saúde. Ela anunciou, recentemente, um novo dispositivo bem interessante e um tanto quanto escatológico. De acordo c… [+1774 chars]"
    },
    {
        source: {
            id: null,
            name: "Uol.com.br"
        },
        author: "Jamil Chade",
        title: "Jamil Chade - EUA, UE, ONU e América Latina blindam Lula e condenam atos fascistas - UOL Confere",
        description: "Entidades internacionais e governos estrangeiros saem em defesa da democracia brasileira, diante da invasão de bolsonaristas ao Congresso, STF e Palácio do Planalto. Numa manobra rapidamente coordenada entre as principais capitais do mundo, EUA, Europa e",
        url: "https://noticias.uol.com.br/colunas/jamil-chade/2023/01/08/governos-estrangeiros-temem-capitolio-brasileiro-e-chancelam-lula.htm",
        urlToImage: "https://conteudo.imguol.com.br/55/2023/01/07/lula-entre-o-lider-indigena-raoni-e-a-primeira-dama-janja-da-silva-sauda-o-publico-apos-receber-a-faixa-presidencial-1673100952195_v2_615x300.jpg",
        publishedAt: "2023-01-08T18:38:33Z",
        content: "Entidades internacionais e governos estrangeiros saem em defesa da democracia brasileira, diante da invasão de bolsonaristas ao Congresso, STF e Palácio do Planalto. Numa manobra rapidamente coordena… [+9046 chars]"
    },
    {
        source: {
            id: null,
            name: "Ofuxico.com.br"
        },
        author: "Giovanna Prisco",
        title: "Após polêmica, Príncipe Harry é excluído da coroação do pai Rei Charles - OFuxico",
        description: "Após polêmica, Príncipe Harry é excluído da coroação do pai Rei Charles",
        url: "https://www.ofuxico.com.br/realeza/apos-polemica-principe-harry-e-excluido-da-coroacao-do-pai-rei-charles",
        urlToImage: "https://www.ofuxico.com.br/wp-content/uploads/2023/01/principe-harry-rei-charles-1.jpg",
        publishedAt: "2023-01-08T16:20:00Z",
        content: "No dia 10 de janeiro, está previsto o lançamento de “Spare”, livro autobiográfico de Príncipe Harry, mas alguns trechos da obra já circulam na imprensa internacional. Leia +: Ex - namorada de Príncipe H…[+2755 chars]"
    },
    {
        source: {
            id: null,
            name: "Uol.com.br"
        },
        author: "Guilherme Tagiaroli;",
        title: "Metaverso, carro camaleão e análise de xixi: as tendências da CES 2023 - Tilt",
        description: "Se no ano passado, a CES, maior feira de tecnologia do mundo realizada em Las Vegas, ainda estava em clima de pandemia, com todo mundo mascarado, espaços vazios e um número reduzido de empresas participando, a edição de 2023, que termina neste domingo (8)",
        url: "https://www.uol.com.br/tilt/noticias/redacao/2023/01/08/balanco-ces-2023.htm",
        urlToImage: "https://conteudo.imguol.com.br/c/noticias/42/2023/01/07/edicao-de-2023-da-feira-de-eletronicos-ces-estava-lotada-diferente-da-edicao-do-ano-passado-1673086638471_v2_615x300.jpg",
        publishedAt: "2023-01-08T13:15:48Z",
        content: "Se no ano passado, a CES, maior feira de tecnologia do mundo realizada em Las Vegas, ainda estava em clima de pandemia, com todo mundo mascarado, espaços vazios e um número reduzido de empresas parti… [+5773 chars]"
    },
    {
        source: {
            id: null,
            name: "Gazetaesportiva.com"
        },
        author: null,
        title: "Santos vence amistoso contra EC São Bernardo em Atibaia; veja detalhes e escalações do Peixe - Gazeta Esportiva",
        description: "",
        url: "https://www.gazetaesportiva.com/times/santos/santos-vence-amistoso-contra-ec-sao-bernardo-em-atibaia-veja-detalhes-e-escalacoes-do-peixe/",
        urlToImage: "https://static.gazetaesportiva.com/uploads/imagem/2023/01/08/WhatsApp-Image-2023-01-08-at-11.48.05.jpeg",
        publishedAt: "2023-01-08T13:14:41Z",
        content: "O Santos realizou neste domingo um jogo-treino contra o EC São Bernardo. O amistoso, realizado no Hotel Bourbon, em Atibaia, no interior de São Paulo, terminou com vitória do Peixe, por 2 a 0. Marcos… [+3346 chars]"
    },
    {
        source: {
            id: "info-money",
            name: "InfoMoney"
        },
        author: "Lara Rizério",
        title: "Inflação no Brasil e nos EUA, fala de Powell e balanços em Wall Street: o que acompanhar na semana - InfoMoney",
        description: "Tudo o que o investidor precisa saber antes de operar na semana",
        url: "https://www.infomoney.com.br/mercados/inflacao-no-brasil-e-nos-eua-previa-do-pib-e-fala-de-powell-o-que-acompanhar-na-semana/",
        urlToImage: "https://www.infomoney.com.br/wp-content/uploads/2020/10/GettyImages-1000964844.jpg?fit=2121%2C1414&quality=70&strip=all",
        publishedAt: "2023-01-08T12:00:54Z",
        content: null
    }
];

const CLIMA = {
    coord: {
        lon: -43.7724,
        lat: -21.222
    },
    weather: [
        {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n"
        }
    ],
    base: "stations",
    main: {
        temp: 16.08,
        feels_like: 16.33,
        temp_min: 16.08,
        temp_max: 16.08,
        pressure: 1016,
        humidity: 99,
        sea_level: 1016,
        grnd_level: 890
    },
    visibility: 1337,
    wind: {
        speed: 0.74,
        deg: 78,
        gust: 0.99
    },
    clouds: {
        all: 100
    },
    dt: 1673241895,
    sys: {
        country: "BR",
        sunrise: 1673252498,
        sunset: 1673300527
    },
    timezone: -10800,
    id: 3470858,
    name: "São José do Vale do Rio Preto",
    cod: 200
}

let queue = [
    {
        "senha": 1,
        "guiche": 1
    },
    {
        "senha": 2,
        "guiche": 2
    },
    {
        "senha": 3,
        "guiche": 3
    },
    {
        "senha": 4,
        "guiche": 4
    },
    {
        "senha": 5,
        "guiche": 5
    },
    // {
    //     "senha": 6,
    //     "guiche": 6
    // },
    // {
    //     "senha": 7,
    //     "guiche": 7
    // },
    // {
    //     "senha": 8,
    //     "guiche": 8
    // },
    // {
    //     "senha": 9,
    //     "guiche": 9
    // },
    // {
    //     "senha": 10,
    //     "guiche": 10
    // }
]

const INTERVAL = 5000;

let financasAux = {};
let hasEnded = false;

let queueInterval;
let weatherInterval;
let financasInterval;
let noticiasInterval;
$(document).ready(function () {
    queueInterval = setInterval(() => {
        uiUpdateQueueCalls([...queue]);
        queue.shift();
        if (queue.length == 0) {
            clearInterval(queueInterval);
        }
    }, INTERVAL);

    weatherInterval = setInterval(() => {
        uiUpdateWeather(CLIMA);
    }, INTERVAL);

    financasInterval = setInterval(() => {
        if (!hasEnded) {
            hasEnded = true;
            for (let key in FINANCAS) {
                if (FINANCAS.hasOwnProperty(key)) {
                    if (!financasAux.hasOwnProperty(key)) {
                        financasAux[key] = FINANCAS[key];
                        hasEnded = false;
                        break;
                    }
                }
            }
        }

        if (hasEnded) {
            if (Object.keys(financasAux).length > 0) {
                for (let key in financasAux) {
                    if (financasAux.hasOwnProperty(key)) {
                        delete financasAux[key];
                        break
                    }
                }
            }

            if (Object.keys(financasAux).length == 0) {
                clearInterval(financasInterval);
            }
        }
        uiUpdateMonetary(financasAux);
        if (financasAux.hasOwnProperty("USDBRLT")) {
            financasAux["USDBRLT"]["bid"] += 5;
        }
    }, INTERVAL);

    noticiasInterval = setInterval(() => {
        uiUpdateNews(NOTICIAS[0]);
        NOTICIAS.shift();
        if (NOTICIAS.length == 0)
            clearInterval(noticiasInterval);
    }, INTERVAL);
});
