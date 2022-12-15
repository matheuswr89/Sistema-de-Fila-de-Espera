import styled from "styled-components";

export const LOADING = "Gravando...";
export const SUCESSO = "Dados gravados com sucesso!";
export const FALHA = "Erro ao gravar os dados!";
export const CAMPO_VAZIO = "Não pode ter campos vazios!";
export const SELECT_VAZIO = "Selecione pelo menos uma opção!";
export const TEMPO_INVALIDO = "O tempo tem que ser maior do que 30 segundos!";
export const BLOCK =
  "O formulário está bloqueado, clique no botão editar para desbloquea-lo!";
export const ERRO_LOGIN =
  "Dados de login inválidos, corrija os dados e tente novamente!";
export const FAZENDO_LOGIN = "Entrando...";

export const Tab = styled.button.attrs((props: any) => ({
  active: props.active,
}))`
  font-size: 15px;
  padding: 10px 2vw;
  cursor: pointer;
  opacity: 0.6;
  background: white;
  border: 0;
  outline: 0;
  border-radius: 0;
  color: #000;
  ${({ active }: any) =>
    active &&
    `
    border-bottom: 2px solid black;
    opacity: 1;
    background: #E2E2E2;
  `}
`;
export const ButtonGroup = styled.div`
  display: flex;
`;

export const countrys = [
  { name: "Argentina", value: "ar" },
  { name: "Austrália", value: "au" },
  { name: "Áustria", value: "at" },
  { name: "Bélgica", value: "be" },
  { name: "Brasil", value: "br" },
  { name: "Bulgária", value: "bg" },
  { name: "Canadá", value: "ca" },
  { name: "China", value: "cn" },
  { name: "Colômbia", value: "co" },
  { name: "Cuba", value: "cu" },
  { name: "República Tcheca", value: "cz" },
  { name: "Egito", value: "eg" },
  { name: "França", value: "fr" },
  { name: "Alemanha", value: "de" },
  { name: "Grécia", value: "gr" },
  { name: "Hong Kong", value: "hk" },
  { name: "Hungria", value: "hu" },
  { name: "India", value: "in" },
  { name: "Indonésia", value: "id" },
  { name: "Irlanda", value: "ie" },
  { name: "Israel", value: "il" },
  { name: "Itália", value: "it" },
  { name: "Japão", value: "jp" },
  { name: "Letônia", value: "lv" },
  { name: "Lituânia", value: "lt" },
  { name: "Malásia", value: "my" },
  { name: "México", value: "mx" },
  { name: "Marrocos", value: "ma" },
  { name: "Países Baixos", value: "nl" },
  { name: "Nova Zelândia", value: "nz" },
  { name: "Nigeria", value: "ng" },
  { name: "Noruega", value: "no" },
  { name: "Filipinas", value: "ph" },
  { name: "Polónia", value: "pl" },
  { name: "Portugal", value: "pt" },
  { name: "Roménia", value: "ro" },
  { name: "Russia", value: "ru" },
  { name: "Arábia Saudita", value: "sa" },
  { name: "Serbia", value: "rs" },
  { name: "Sérvia", value: "sg" },
  { name: "Eslováquia", value: "sk" },
  { name: "Eslovénia", value: "si" },
  { name: "África do Sul", value: "za" },
  { name: "Coreia do Sul", value: "kr" },
  { name: "Suécia", value: "se" },
  { name: "Suiça", value: "ch" },
  { name: "Taiwan", value: "tw" },
  { name: "Tailândia", value: "th" },
  { name: "Turquia", value: "tr" },
  { name: "Emirados Árabes Unidos", value: "ae" },
  { name: "Ucrânia", value: "ua" },
  { name: "Reino Unido", value: "gb" },
  { name: "Estados Unidos", value: "us" },
  { name: "Venuzuela", value: "ve" },
];

export const categories = [
  { value: "business", name: "Négocios" },
  { value: "entertainment", name: "Entretenimento" },
  { value: "health", name: "Saúde" },
  { value: "science", name: "Ciência" },
  { value: "sports", name: "Esporte" },
  { value: "technology", name: "Tecnologia" },
  { value: "general", name: "Todos" },
];

export const moedas = [
  { value: "USD-BRL", label: "Dólar Americano/Real Brasileiro" },
  { value: "USD-BRLT", label: "Dólar Americano/Real Brasileiro Turismo" },
  { value: "CAD-BRL", label: "Dólar Canadense/Real Brasileiro" },
  { value: "EUR-BRL", label: "Euro/Real Brasileiro" },
  { value: "GBP-BRL", label: "Libra Esterlina/Real Brasileiro" },
  { value: "ARS-BRL", label: "Peso Argentino/Real Brasileiro" },
  { value: "BTC-BRL", label: "Bitcoin/Real Brasileiro" },
  { value: "LTC-BRL", label: "Litecoin/Real Brasileiro" },
  { value: "JPY-BRL", label: "Iene Japonês/Real Brasileiro" },
  { value: "CHF-BRL", label: "Franco Suíço/Real Brasileiro" },
  { value: "AUD-BRL", label: "Dólar Australiano/Real Brasileiro" },
  { value: "CNY-BRL", label: "Yuan Chinês/Real Brasileiro" },
  { value: "ILS-BRL", label: "Novo Shekel Israelense/Real Brasileiro" },
  { value: "ETH-BRL", label: "Ethereum/Real Brasileiro" },
  { value: "XRP-BRL", label: "XRP/Real Brasileiro" },
  { value: "EUR-USD", label: "Euro/Dólar Americano" },
  { value: "CAD-USD", label: "Dólar Canadense/Dólar Americano" },
  { value: "GBP-USD", label: "Libra Esterlina/Dólar Americano" },
  { value: "ARS-USD", label: "Peso Argentino/Dólar Americano" },
  { value: "JPY-USD", label: "Iene Japonês/Dólar Americano" },
  { value: "CHF-USD", label: "Franco Suíço/Dólar Americano" },
  { value: "AUD-USD", label: "Dólar Australiano/Dólar Americano" },
  { value: "CNY-USD", label: "Yuan Chinês/Dólar Americano" },
  { value: "ILS-USD", label: "Novo Shekel Israelense/Dólar Americano" },
  { value: "BTC-USD", label: "Bitcoin/Dólar Americano" },
  { value: "LTC-USD", label: "Litecoin/Dólar Americano" },
  { value: "ETH-USD", label: "Ethereum/Dólar Americano" },
  { value: "XRP-USD", label: "XRP/Dólar Americano" },
  { value: "BRL-USD", label: "Real Brasileiro/Dólar Americano" },
  { value: "BRL-EUR", label: "Real Brasileiro/Euro" },
  { value: "USD-EUR", label: "Dólar Americano/Euro" },
  { value: "CAD-EUR", label: "Dólar Canadense/Euro" },
  { value: "GBP-EUR", label: "Libra Esterlina/Euro" },
  { value: "ARS-EUR", label: "Peso Argentino/Euro" },
  { value: "JPY-EUR", label: "Iene Japonês/Euro" },
  { value: "CHF-EUR", label: "Franco Suíço/Euro" },
  { value: "AUD-EUR", label: "Dólar Australiano/Euro" },
  { value: "CNY-EUR", label: "Yuan Chinês/Euro" },
  { value: "ILS-EUR", label: "Novo Shekel Israelense/Euro" },
  { value: "BTC-EUR", label: "Bitcoin/Euro" },
  { value: "LTC-EUR", label: "Litecoin/Euro" },
  { value: "ETH-EUR", label: "Ethereum/Euro" },
  { value: "XRP-EUR", label: "XRP/Euro" },
  { value: "DOGE-BRL", label: "Dogecoin/Real Brasileiro" },
  { value: "DOGE-EUR", label: "Dogecoin/Euro" },
  { value: "DOGE-USD", label: "Dogecoin/Dólar Americano" },
  { value: "USD-JPY", label: "Dólar Americano/Iene Japonês" },
  { value: "USD-CHF", label: "Dólar Americano/Franco Suíço" },
  { value: "USD-CAD", label: "Dólar Americano/Dólar Canadense" },
  { value: "NZD-USD", label: "Dólar Neozelandês/Dólar Americano" },
  { value: "USD-ZAR", label: "Dólar Americano/Rand Sul-Africano" },
  { value: "USD-TRY", label: "Dólar Americano/Nova Lira Turca" },
  { value: "USD-MXN", label: "Dólar Americano/Peso Mexicano" },
  { value: "USD-PLN", label: "Dólar Americano/Zlóti Polonês" },
  { value: "USD-SEK", label: "Dólar Americano/Coroa Sueca" },
  { value: "USD-SGD", label: "Dólar Americano/Dólar de Cingapura" },
  { value: "USD-DKK", label: "Dólar Americano/Coroa Dinamarquesa" },
  { value: "USD-NOK", label: "Dólar Americano/Coroa Norueguesa" },
  { value: "USD-ILS", label: "Dólar Americano/Novo Shekel Israelense" },
  { value: "USD-HUF", label: "Dólar Americano/Florim Húngaro" },
  { value: "USD-CZK", label: "Dólar Americano/Coroa Checa" },
  { value: "USD-THB", label: "Dólar Americano/Baht Tailandês" },
  { value: "USD-AED", label: "Dólar Americano/Dirham dos Emirados" },
  { value: "USD-JOD", label: "Dólar Americano/Dinar Jordaniano" },
  { value: "USD-KWD", label: "Dólar Americano/Dinar Kuwaitiano" },
  { value: "USD-HKD", label: "Dólar Americano/Dólar de Hong Kong" },
  { value: "USD-SAR", label: "Dólar Americano/Riyal Saudita" },
  { value: "USD-INR", label: "Dólar Americano/Rúpia Indiana" },
  { value: "USD-KRW", label: "Dólar Americano/Won Sul-Coreano" },
  { value: "FJD-USD", label: "Dólar de Fiji/Dólar Americano" },
  { value: "GHS-USD", label: "Cedi Ganês/Dólar Americano" },
  { value: "KYD-USD", label: "Dólar das Ilhas Cayman/Dólar Americano" },
  { value: "SGD-USD", label: "Dólar de Cingapura/Dólar Americano" },
  { value: "USD-ALL", label: "Dólar Americano/Lek Albanês" },
  { value: "USD-AMD", label: "Dólar Americano/Dram Armênio" },
  { value: "USD-ANG", label: "Dólar Americano/Guilder das Antilhas" },
  { value: "USD-ARS", label: "Dólar Americano/Peso Argentino" },
  { value: "USD-AUD", label: "Dólar Americano/Dólar Australiano" },
  { value: "USD-BBD", label: "Dólar Americano/Dólar de Barbados" },
  { value: "USD-BDT", label: "Dólar Americano/Taka de Bangladesh" },
  { value: "USD-BGN", label: "Dólar Americano/Lev Búlgaro" },
  { value: "USD-BHD", label: "Dólar Americano/Dinar do Bahrein" },
  { value: "USD-BIF", label: "Dólar Americano/Franco Burundinense" },
  { value: "USD-BND", label: "Dólar Americano/Dólar de Brunei" },
  { value: "USD-BOB", label: "Dólar Americano/Boliviano" },
  { value: "USD-BSD", label: "Dólar Americano/Dólar das Bahamas" },
  { value: "USD-BWP", label: "Dólar Americano/Pula de Botswana" },
  { value: "USD-BZD", label: "Dólar Americano/Dólar de Belize" },
  { value: "USD-CLP", label: "Dólar Americano/Peso Chileno" },
  { value: "USD-CNY", label: "Dólar Americano/Yuan Chinês" },
  { value: "USD-COP", label: "Dólar Americano/Peso Colombiano" },
  { value: "USD-CRC", label: "Dólar Americano/Colón Costarriquenho" },
  { value: "USD-CUP", label: "Dólar Americano/Peso Cubano" },
  { value: "USD-DJF", label: "Dólar Americano/Franco do Djubouti" },
  { value: "USD-DOP", label: "Dólar Americano/Peso Dominicano" },
  { value: "USD-DZD", label: "Dólar Americano/Dinar Argelino" },
  { value: "USD-EGP", label: "Dólar Americano/Libra Egípcia" },
  { value: "USD-ETB", label: "Dólar Americano/Birr Etíope" },
  { value: "USD-FJD", label: "Dólar Americano/Dólar de Fiji" },
  { value: "USD-GBP", label: "Dólar Americano/Libra Esterlina" },
  { value: "USD-GEL", label: "Dólar Americano/Lari Georgiano" },
  { value: "USD-GHS", label: "Dólar Americano/Cedi Ganês" },
  { value: "USD-GMD", label: "Dólar Americano/Dalasi da Gâmbia" },
  { value: "USD-GNF", label: "Dólar Americano/Franco de Guiné" },
  { value: "USD-GTQ", label: "Dólar Americano/Quetzal Guatemalteco" },
  { value: "USD-HNL", label: "Dólar Americano/Lempira Hondurenha" },
  { value: "USD-HRK", label: "Dólar Americano/Kuna Croata" },
  { value: "USD-HTG", label: "Dólar Americano/Gourde Haitiano" },
  { value: "USD-IDR", label: "Dólar Americano/Rupia Indonésia" },
  { value: "USD-IQD", label: "Dólar Americano/Dinar Iraquiano" },
  { value: "USD-IRR", label: "Dólar Americano/Rial Iraniano" },
  { value: "USD-ISK", label: "Dólar Americano/Coroa Islandesa" },
  { value: "USD-JMD", label: "Dólar Americano/Dólar Jamaicano" },
  { value: "USD-KES", label: "Dólar Americano/Shilling Queniano" },
  { value: "USD-KHR", label: "Dólar Americano/Riel Cambojano" },
  { value: "USD-KMF", label: "Dólar Americano/Franco Comorense" },
  { value: "USD-KZT", label: "Dólar Americano/Tengue Cazaquistanês" },
  { value: "USD-LAK", label: "Dólar Americano/Kip Laosiano" },
  { value: "USD-LBP", label: "Dólar Americano/Libra Libanesa" },
  { value: "USD-LKR", label: "Dólar Americano/Rúpia de Sri Lanka" },
  { value: "USD-LSL", label: "Dólar Americano/Loti do Lesoto" },
  { value: "USD-LYD", label: "Dólar Americano/Dinar Líbio" },
  { value: "USD-MAD", label: "Dólar Americano/Dirham Marroquino" },
  { value: "USD-MDL", label: "Dólar Americano/Leu Moldavo" },
  { value: "USD-MGA", label: "Dólar Americano/Ariary Madagascarense" },
  { value: "USD-MKD", label: "Dólar Americano/Denar Macedônio" },
  { value: "USD-MMK", label: "Dólar Americano/Kyat de Mianmar" },
  { value: "USD-MOP", label: "Dólar Americano/Pataca de Macau" },
  { value: "USD-MRO", label: "Dólar Americano/Ouguiya Mauritana" },
  { value: "USD-MUR", label: "Dólar Americano/Rúpia Mauriciana" },
  { value: "USD-MVR", label: "Dólar Americano/Rufiyaa Maldiva" },
  { value: "USD-MWK", label: "Dólar Americano/Kwacha Malauiana" },
  { value: "USD-MYR", label: "Dólar Americano/Ringgit Malaio" },
  { value: "USD-NAD", label: "Dólar Americano/Dólar Namíbio" },
  { value: "USD-NGN", label: "Dólar Americano/Naira Nigeriana" },
  { value: "USD-NIO", label: "Dólar Americano/Córdoba Nicaraguense" },
  { value: "USD-NPR", label: "Dólar Americano/Rúpia Nepalesa" },
  { value: "USD-NZD", label: "Dólar Americano/Dólar Neozelandês" },
  { value: "USD-OMR", label: "Dólar Americano/Rial Omanense" },
  { value: "USD-PAB", label: "Dólar Americano/Balboa Panamenho" },
  { value: "USD-PEN", label: "Dólar Americano/Sol do Peru" },
  { value: "USD-PGK", label: "Dólar Americano/Kina Papua-Nova Guiné" },
  { value: "USD-PHP", label: "Dólar Americano/Peso Filipino" },
  { value: "USD-PKR", label: "Dólar Americano/Rúpia Paquistanesa" },
  { value: "USD-PYG", label: "Dólar Americano/Guarani Paraguaio" },
  { value: "USD-QAR", label: "Dólar Americano/Rial Catarense" },
  { value: "USD-RON", label: "Dólar Americano/Leu Romeno" },
  { value: "USD-RSD", label: "Dólar Americano/Dinar Sérvio" },
  { value: "USD-RWF", label: "Dólar Americano/Franco Ruandês" },
  { value: "USD-SCR", label: "Dólar Americano/Rúpias de Seicheles" },
  { value: "USD-SDG", label: "Dólar Americano/Libra Sudanesa" },
  { value: "USD-SOS", label: "Dólar Americano/Shilling Somaliano" },
  { value: "USD-STD", label: "Dólar Americano/Dobra São Tomé/Príncipe" },
  { value: "USD-SVC", label: "Dólar Americano/Colon de El Salvador" },
  { value: "USD-SYP", label: "Dólar Americano/Libra Síria" },
  { value: "USD-SZL", label: "Dólar Americano/Lilangeni Suazilandês" },
  { value: "USD-TND", label: "Dólar Americano/Dinar Tunisiano" },
  { value: "USD-TTD", label: "Dólar Americano/Dólar de Trinidad" },
  { value: "USD-TWD", label: "Dólar Americano/Dólar Taiuanês" },
  { value: "USD-TZS", label: "Dólar Americano/Shilling Tanzaniano" },
  { value: "USD-UAH", label: "Dólar Americano/Hryvinia Ucraniana" },
  { value: "USD-UGX", label: "Dólar Americano/Shilling Ugandês" },
  { value: "USD-UYU", label: "Dólar Americano/Peso Uruguaio" },
  { value: "USD-UZS", label: "Dólar Americano/Som Uzbequistanês" },
  { value: "USD-VEF", label: "Dólar Americano/Bolívar Venezuelano" },
  { value: "USD-VND", label: "Dólar Americano/Dong Vietnamita" },
  { value: "USD-VUV", label: "Dólar Americano/Vatu de Vanuatu" },
  { value: "USD-XAF", label: "Dólar Americano/Franco CFA Central" },
  { value: "USD-XCD", label: "Dólar Americano/Dólar do Caribe Oriental" },
  { value: "USD-XOF", label: "Dólar Americano/Franco CFA Ocidental" },
  { value: "USD-XPF", label: "Dólar Americano/Franco CFP" },
  { value: "USD-YER", label: "Dólar Americano/Riyal Iemenita" },
  { value: "USD-ZMK", label: "Dólar Americano/Kwacha Zambiana" },
  { value: "AED-USD", label: "Dirham dos Emirados/Dólar Americano" },
  { value: "DKK-USD", label: "Coroa Dinamarquesa/Dólar Americano" },
  { value: "HKD-USD", label: "Dólar de Hong Kong/Dólar Americano" },
  { value: "MXN-USD", label: "Peso Mexicano/Dólar Americano" },
  { value: "NOK-USD", label: "Coroa Norueguesa/Dólar Americano" },
  { value: "PLN-USD", label: "Zlóti Polonês/Dólar Americano" },
  { value: "RUB-USD", label: "Rublo Russo/Dólar Americano" },
  { value: "SAR-USD", label: "Riyal Saudita/Dólar Americano" },
  { value: "SEK-USD", label: "Coroa Sueca/Dólar Americano" },
  { value: "TRY-USD", label: "Nova Lira Turca/Dólar Americano" },
  { value: "TWD-USD", label: "Dólar Taiuanês/Dólar Americano" },
  { value: "ZAR-USD", label: "Rand Sul-Africano/Dólar Americano" },
  { value: "UYU-USD", label: "Peso Uruguaio/Dólar Americano" },
  { value: "PYG-USD", label: "Guarani Paraguaio/Dólar Americano" },
  { value: "CLP-USD", label: "Peso Chileno/Dólar Americano" },
  { value: "COP-USD", label: "Peso Colombiano/Dólar Americano" },
  { value: "PEN-USD", label: "Sol do Peru/Dólar Americano" },
  { value: "NIO-USD", label: "Córdoba Nicaraguense/Dólar Americano" },
  { value: "BOB-USD", label: "Boliviano/Dólar Americano" },
  { value: "KRW-USD", label: "Won Sul-Coreano/Dólar Americano" },
  { value: "EGP-USD", label: "Libra Egípcia/Dólar Americano" },
  { value: "USD-BYN", label: "Dólar Americano/Rublo Bielorrusso" },
  { value: "USD-MZN", label: "Dólar Americano/Metical de Moçambique" },
  { value: "INR-USD", label: "Rúpia Indiana/Dólar Americano" },
  { value: "JOD-USD", label: "Dinar Jordaniano/Dólar Americano" },
  { value: "KWD-USD", label: "Dinar Kuwaitiano/Dólar Americano" },
  { value: "USD-AZN", label: "Dólar Americano/Manat Azeri" },
  { value: "USD-CNH", label: "Dólar Americano/Yuan chinês offshore" },
  { value: "USD-KGS", label: "Dólar Americano/Som Quirguistanês" },
  { value: "USD-TJS", label: "Dólar Americano/Somoni do Tajiquistão" },
  { value: "USD-RUB", label: "Dólar Americano/Rublo Russo" },
  { value: "MYR-USD", label: "Ringgit Malaio/Dólar Americano" },
  { value: "UAH-USD", label: "Hryvinia Ucraniana/Dólar Americano" },
  { value: "HUF-USD", label: "Florim Húngaro/Dólar Americano" },
  { value: "IDR-USD", label: "Rupia Indonésia/Dólar Americano" },
  { value: "USD-AOA", label: "Dólar Americano/Kwanza Angolano" },
  { value: "VND-USD", label: "Dong Vietnamita/Dólar Americano" },
  { value: "BYN-USD", label: "Rublo Bielorrusso/Dólar Americano" },
  { value: "XBR-USD", label: "Brent Spot/Dólar Americano" },
  { value: "THB-USD", label: "Baht Tailandês/Dólar Americano" },
  { value: "PHP-USD", label: "Peso Filipino/Dólar Americano" },
  { value: "USD-TMT", label: "Dólar Americano/TMT" },
  { value: "XAGG-USD", label: "XPrata/Dólar Americano" },
  { value: "USD-MNT", label: "Dólar Americano/Mongolian Tugrik" },
  { value: "USD-AFN", label: "Dólar Americano/Afghani do Afeganistão" },
  { value: "AFN-USD", label: "Afghani do Afeganistão/Dólar Americano" },
  { value: "SYP-USD", label: "Libra Síria/Dólar Americano" },
  { value: "IRR-USD", label: "Rial Iraniano/Dólar Americano" },
  { value: "IQD-USD", label: "Dinar Iraquiano/Dólar Americano" },
  { value: "USD-NGNI", label: "Dólar Americano/Naira Nigeriana" },
  { value: "USD-ZWL", label: "Dólar Americano/Dólar Zimbabuense" },
  { value: "BRL-ARS", label: "Real Brasileiro/Peso Argentino" },
  { value: "BRL-AUD", label: "Real Brasileiro/Dólar Australiano" },
  { value: "BRL-CAD", label: "Real Brasileiro/Dólar Canadense" },
  { value: "BRL-CHF", label: "Real Brasileiro/Franco Suíço" },
  { value: "BRL-CLP", label: "Real Brasileiro/Peso Chileno" },
  { value: "BRL-DKK", label: "Real Brasileiro/Coroa Dinamarquesa" },
  { value: "BRL-HKD", label: "Real Brasileiro/Dólar de Hong Kong" },
  { value: "BRL-JPY", label: "Real Brasileiro/Iene Japonês" },
  { value: "BRL-MXN", label: "Real Brasileiro/Peso Mexicano" },
  { value: "BRL-SGD", label: "Real Brasileiro/Dólar de Cingapura" },
  { value: "SGD-BRL", label: "Dólar de Cingapura/Real Brasileiro" },
  { value: "AED-BRL", label: "Dirham dos Emirados/Real Brasileiro" },
  { value: "BRL-AED", label: "Real Brasileiro/Dirham dos Emirados" },
  { value: "BRL-BBD", label: "Real Brasileiro/Dólar de Barbados" },
  { value: "BRL-BHD", label: "Real Brasileiro/Dinar do Bahrein" },
  { value: "BRL-CNY", label: "Real Brasileiro/Yuan Chinês" },
  { value: "BRL-CZK", label: "Real Brasileiro/Coroa Checa" },
  { value: "BRL-EGP", label: "Real Brasileiro/Libra Egípcia" },
  { value: "BRL-GBP", label: "Real Brasileiro/Libra Esterlina" },
  { value: "BRL-HUF", label: "Real Brasileiro/Florim Húngaro" },
  { value: "BRL-IDR", label: "Real Brasileiro/Rupia Indonésia" },
  { value: "BRL-ILS", label: "Real Brasileiro/Novo Shekel Israelense" },
  { value: "BRL-INR", label: "Real Brasileiro/Rúpia Indiana" },
  { value: "BRL-ISK", label: "Real Brasileiro/Coroa Islandesa" },
  { value: "BRL-JMD", label: "Real Brasileiro/Dólar Jamaicano" },
  { value: "BRL-JOD", label: "Real Brasileiro/Dinar Jordaniano" },
  { value: "BRL-KES", label: "Real Brasileiro/Shilling Queniano" },
  { value: "BRL-KRW", label: "Real Brasileiro/Won Sul-Coreano" },
  { value: "BRL-LBP", label: "Real Brasileiro/Libra Libanesa" },
  { value: "BRL-LKR", label: "Real Brasileiro/Rúpia de Sri Lanka" },
  { value: "BRL-MAD", label: "Real Brasileiro/Dirham Marroquino" },
  { value: "BRL-MYR", label: "Real Brasileiro/Ringgit Malaio" },
  { value: "BRL-NAD", label: "Real Brasileiro/Dólar Namíbio" },
  { value: "BRL-NOK", label: "Real Brasileiro/Coroa Norueguesa" },
  { value: "BRL-NPR", label: "Real Brasileiro/Rúpia Nepalesa" },
  { value: "BRL-NZD", label: "Real Brasileiro/Dólar Neozelandês" },
  { value: "BRL-OMR", label: "Real Brasileiro/Rial Omanense" },
  { value: "BRL-PAB", label: "Real Brasileiro/Balboa Panamenho" },
  { value: "BRL-PHP", label: "Real Brasileiro/Peso Filipino" },
  { value: "BRL-PKR", label: "Real Brasileiro/Rúpia Paquistanesa" },
  { value: "BRL-PLN", label: "Real Brasileiro/Zlóti Polonês" },
  { value: "BRL-QAR", label: "Real Brasileiro/Rial Catarense" },
  { value: "BRL-RON", label: "Real Brasileiro/Leu Romeno" },
  { value: "BRL-RUB", label: "Real Brasileiro/Rublo Russo" },
  { value: "BRL-SAR", label: "Real Brasileiro/Riyal Saudita" },
  { value: "BRL-SEK", label: "Real Brasileiro/Coroa Sueca" },
  { value: "BRL-THB", label: "Real Brasileiro/Baht Tailandês" },
  { value: "BRL-TRY", label: "Real Brasileiro/Nova Lira Turca" },
  { value: "BRL-VEF", label: "Real Brasileiro/Bolívar Venezuelano" },
  { value: "BRL-XAF", label: "Real Brasileiro/Franco CFA Central" },
  { value: "BRL-XCD", label: "Real Brasileiro/Dólar do Caribe Oriental" },
  { value: "BRL-XOF", label: "Real Brasileiro/Franco CFA Ocidental" },
  { value: "BRL-ZAR", label: "Real Brasileiro/Rand Sul-Africano" },
  { value: "BRL-TWD", label: "Real Brasileiro/Dólar Taiuanês" },
  { value: "DKK-BRL", label: "Coroa Dinamarquesa/Real Brasileiro" },
  { value: "HKD-BRL", label: "Dólar de Hong Kong/Real Brasileiro" },
  { value: "MXN-BRL", label: "Peso Mexicano/Real Brasileiro" },
  { value: "NOK-BRL", label: "Coroa Norueguesa/Real Brasileiro" },
  { value: "NZD-BRL", label: "Dólar Neozelandês/Real Brasileiro" },
  { value: "PLN-BRL", label: "Zlóti Polonês/Real Brasileiro" },
  { value: "SAR-BRL", label: "Riyal Saudita/Real Brasileiro" },
  { value: "SEK-BRL", label: "Coroa Sueca/Real Brasileiro" },
  { value: "THB-BRL", label: "Baht Tailandês/Real Brasileiro" },
  { value: "TRY-BRL", label: "Nova Lira Turca/Real Brasileiro" },
  { value: "TWD-BRL", label: "Dólar Taiuanês/Real Brasileiro" },
  { value: "ZAR-BRL", label: "Rand Sul-Africano/Real Brasileiro" },
  { value: "BRL-PYG", label: "Real Brasileiro/Guarani Paraguaio" },
  { value: "BRL-UYU", label: "Real Brasileiro/Peso Uruguaio" },
  { value: "BRL-COP", label: "Real Brasileiro/Peso Colombiano" },
  { value: "BRL-PEN", label: "Real Brasileiro/Sol do Peru" },
  { value: "BRL-BOB", label: "Real Brasileiro/Boliviano" },
  { value: "CLP-BRL", label: "Peso Chileno/Real Brasileiro" },
  { value: "PYG-BRL", label: "Guarani Paraguaio/Real Brasileiro" },
  { value: "UYU-BRL", label: "Peso Uruguaio/Real Brasileiro" },
  { value: "COP-BRL", label: "Peso Colombiano/Real Brasileiro" },
  { value: "PEN-BRL", label: "Sol do Peru/Real Brasileiro" },
  { value: "BOB-BRL", label: "Boliviano/Real Brasileiro" },
  { value: "RUB-BRL", label: "Rublo Russo/Real Brasileiro" },
  { value: "INR-BRL", label: "Rúpia Indiana/Real Brasileiro" },
  { value: "EUR-GBP", label: "Euro/Libra Esterlina" },
  { value: "EUR-JPY", label: "Euro/Iene Japonês" },
  { value: "EUR-CHF", label: "Euro/Franco Suíço" },
  { value: "EUR-AUD", label: "Euro/Dólar Australiano" },
  { value: "EUR-CAD", label: "Euro/Dólar Canadense" },
  { value: "EUR-NOK", label: "Euro/Coroa Norueguesa" },
  { value: "EUR-DKK", label: "Euro/Coroa Dinamarquesa" },
  { value: "EUR-PLN", label: "Euro/Zlóti Polonês" },
  { value: "EUR-NZD", label: "Euro/Dólar Neozelandês" },
  { value: "EUR-SEK", label: "Euro/Coroa Sueca" },
  { value: "EUR-ILS", label: "Euro/Novo Shekel Israelense" },
  { value: "EUR-TRY", label: "Euro/Nova Lira Turca" },
  { value: "EUR-THB", label: "Euro/Baht Tailandês" },
  { value: "EUR-ZAR", label: "Euro/Rand Sul-Africano" },
  { value: "EUR-MXN", label: "Euro/Peso Mexicano" },
  { value: "EUR-SGD", label: "Euro/Dólar de Cingapura" },
  { value: "EUR-HUF", label: "Euro/Florim Húngaro" },
  { value: "EUR-HKD", label: "Euro/Dólar de Hong Kong" },
  { value: "EUR-CZK", label: "Euro/Coroa Checa" },
  { value: "EUR-KRW", label: "Euro/Won Sul-Coreano" },
  { value: "BHD-EUR", label: "Dinar do Bahrein/Euro" },
  { value: "EUR-AED", label: "Euro/Dirham dos Emirados" },
  { value: "EUR-AFN", label: "Euro/Afghani do Afeganistão" },
  { value: "EUR-ALL", label: "Euro/Lek Albanês" },
  { value: "EUR-ANG", label: "Euro/Guilder das Antilhas" },
  { value: "EUR-ARS", label: "Euro/Peso Argentino" },
  { value: "EUR-BAM", label: "Euro/Marco Conversível" },
  { value: "EUR-BBD", label: "Euro/Dólar de Barbados" },
  { value: "EUR-BDT", label: "Euro/Taka de Bangladesh" },
  { value: "EUR-BGN", label: "Euro/Lev Búlgaro" },
  { value: "EUR-BHD", label: "Euro/Dinar do Bahrein" },
  { value: "EUR-BIF", label: "Euro/Franco Burundinense" },
  { value: "EUR-BND", label: "Euro/Dólar de Brunei" },
  { value: "EUR-BOB", label: "Euro/Boliviano" },
  { value: "EUR-BSD", label: "Euro/Dólar das Bahamas" },
  { value: "EUR-BWP", label: "Euro/Pula de Botswana" },
  { value: "EUR-BYN", label: "Euro/Rublo Bielorrusso" },
  { value: "EUR-BZD", label: "Euro/Dólar de Belize" },
  { value: "EUR-CLP", label: "Euro/Peso Chileno" },
  { value: "EUR-CNY", label: "Euro/Yuan Chinês" },
  { value: "EUR-COP", label: "Euro/Peso Colombiano" },
  { value: "EUR-CRC", label: "Euro/Colón Costarriquenho" },
  { value: "EUR-CUP", label: "Euro/Peso Cubano" },
  { value: "EUR-CVE", label: "Euro/Escudo cabo-verdiano" },
  { value: "EUR-DJF", label: "Euro/Franco do Djubouti" },
  { value: "EUR-DOP", label: "Euro/Peso Dominicano" },
  { value: "EUR-DZD", label: "Euro/Dinar Argelino" },
  { value: "EUR-EGP", label: "Euro/Libra Egípcia" },
  { value: "EUR-ETB", label: "Euro/Birr Etíope" },
  { value: "EUR-FJD", label: "Euro/Dólar de Fiji" },
  { value: "EUR-GHS", label: "Euro/Cedi Ganês" },
  { value: "EUR-GMD", label: "Euro/Dalasi da Gâmbia" },
  { value: "EUR-GNF", label: "Euro/Franco de Guiné" },
  { value: "EUR-GTQ", label: "Euro/Quetzal Guatemalteco" },
  { value: "EUR-HNL", label: "Euro/Lempira Hondurenha" },
  { value: "EUR-HRK", label: "Euro/Kuna Croata" },
  { value: "EUR-HTG", label: "Euro/Gourde Haitiano" },
  { value: "EUR-IDR", label: "Euro/Rupia Indonésia" },
  { value: "EUR-INR", label: "Euro/Rúpia Indiana" },
  { value: "EUR-IQD", label: "Euro/Dinar Iraquiano" },
  { value: "EUR-IRR", label: "Euro/Rial Iraniano" },
  { value: "EUR-ISK", label: "Euro/Coroa Islandesa" },
  { value: "EUR-JMD", label: "Euro/Dólar Jamaicano" },
  { value: "EUR-JOD", label: "Euro/Dinar Jordaniano" },
  { value: "EUR-KES", label: "Euro/Shilling Queniano" },
  { value: "EUR-KHR", label: "Euro/Riel Cambojano" },
  { value: "EUR-KWD", label: "Euro/Dinar Kuwaitiano" },
  { value: "EUR-KYD", label: "Euro/Dólar das Ilhas Cayman" },
  { value: "EUR-KZT", label: "Euro/Tengue Cazaquistanês" },
  { value: "EUR-LAK", label: "Euro/Kip Laosiano" },
  { value: "EUR-LBP", label: "Euro/Libra Libanesa" },
  { value: "EUR-LKR", label: "Euro/Rúpia de Sri Lanka" },
  { value: "EUR-LSL", label: "Euro/Loti do Lesoto" },
  { value: "EUR-LYD", label: "Euro/Dinar Líbio" },
  { value: "EUR-MAD", label: "Euro/Dirham Marroquino" },
  { value: "EUR-MDL", label: "Euro/Leu Moldavo" },
  { value: "EUR-MGA", label: "Euro/Ariary Madagascarense" },
  { value: "EUR-MKD", label: "Euro/Denar Macedônio" },
  { value: "EUR-MMK", label: "Euro/Kyat de Mianmar" },
  { value: "EUR-MOP", label: "Euro/Pataca de Macau" },
  { value: "EUR-MRO", label: "Euro/Ouguiya Mauritana" },
  { value: "EUR-MUR", label: "Euro/Rúpia Mauriciana" },
  { value: "EUR-MWK", label: "Euro/Kwacha Malauiana" },
  { value: "EUR-MYR", label: "Euro/Ringgit Malaio" },
  { value: "EUR-NAD", label: "Euro/Dólar Namíbio" },
  { value: "EUR-NGN", label: "Euro/Naira Nigeriana" },
  { value: "EUR-NIO", label: "Euro/Córdoba Nicaraguense" },
  { value: "EUR-NPR", label: "Euro/Rúpia Nepalesa" },
  { value: "EUR-OMR", label: "Euro/Rial Omanense" },
  { value: "EUR-PAB", label: "Euro/Balboa Panamenho" },
  { value: "EUR-PEN", label: "Euro/Sol do Peru" },
  { value: "EUR-PGK", label: "Euro/Kina Papua-Nova Guiné" },
  { value: "EUR-PHP", label: "Euro/Peso Filipino" },
  { value: "EUR-PKR", label: "Euro/Rúpia Paquistanesa" },
  { value: "EUR-PYG", label: "Euro/Guarani Paraguaio" },
  { value: "EUR-QAR", label: "Euro/Rial Catarense" },
  { value: "EUR-RON", label: "Euro/Leu Romeno" },
  { value: "EUR-RSD", label: "Euro/Dinar Sérvio" },
  { value: "EUR-RWF", label: "Euro/Franco Ruandês" },
  { value: "EUR-SAR", label: "Euro/Riyal Saudita" },
  { value: "EUR-SCR", label: "Euro/Rúpias de Seicheles" },
  { value: "EUR-SDG", label: "Euro/Libra Sudanesa" },
  { value: "EUR-SDR", label: "Euro/DSE" },
  { value: "EUR-SOS", label: "Euro/Shilling Somaliano" },
  { value: "EUR-STD", label: "Euro/Dobra São Tomé/Príncipe" },
  { value: "EUR-SVC", label: "Euro/Colon de El Salvador" },
  { value: "EUR-SYP", label: "Euro/Libra Síria" },
  { value: "EUR-SZL", label: "Euro/Lilangeni Suazilandês" },
  { value: "EUR-TND", label: "Euro/Dinar Tunisiano" },
  { value: "EUR-TTD", label: "Euro/Dólar de Trinidad" },
  { value: "EUR-TWD", label: "Euro/Dólar Taiuanês" },
  { value: "EUR-TZS", label: "Euro/Shilling Tanzaniano" },
  { value: "EUR-UAH", label: "Euro/Hryvinia Ucraniana" },
  { value: "EUR-UGX", label: "Euro/Shilling Ugandês" },
  { value: "EUR-UYU", label: "Euro/Peso Uruguaio" },
  { value: "EUR-UZS", label: "Euro/Som Uzbequistanês" },
  { value: "EUR-VEF", label: "Euro/Bolívar Venezuelano" },
  { value: "EUR-VND", label: "Euro/Dong Vietnamita" },
  { value: "EUR-XAF", label: "Euro/Franco CFA Central" },
  { value: "EUR-XOF", label: "Euro/Franco CFA Ocidental" },
  { value: "EUR-XPF", label: "Euro/Franco CFP" },
  { value: "EUR-ZMK", label: "Euro/Kwacha Zambiana" },
  { value: "GHS-EUR", label: "Cedi Ganês/Euro" },
  { value: "NZD-EUR", label: "Dólar Neozelandês/Euro" },
  { value: "SGD-EUR", label: "Dólar de Cingapura/Euro" },
  { value: "AED-EUR", label: "Dirham dos Emirados/Euro" },
  { value: "DKK-EUR", label: "Coroa Dinamarquesa/Euro" },
  { value: "EUR-XCD", label: "Euro/Dólar do Caribe Oriental" },
  { value: "HKD-EUR", label: "Dólar de Hong Kong/Euro" },
  { value: "MXN-EUR", label: "Peso Mexicano/Euro" },
  { value: "NOK-EUR", label: "Coroa Norueguesa/Euro" },
  { value: "PLN-EUR", label: "Zlóti Polonês/Euro" },
  { value: "RUB-EUR", label: "Rublo Russo/Euro" },
  { value: "SAR-EUR", label: "Riyal Saudita/Euro" },
  { value: "SEK-EUR", label: "Coroa Sueca/Euro" },
  { value: "TRY-EUR", label: "Nova Lira Turca/Euro" },
  { value: "TWD-EUR", label: "Dólar Taiuanês/Euro" },
  { value: "ZAR-EUR", label: "Rand Sul-Africano/Euro" },
  { value: "MAD-EUR", label: "Dirham Marroquino/Euro" },
  { value: "KRW-EUR", label: "Won Sul-Coreano/Euro" },
  { value: "EGP-EUR", label: "Libra Egípcia/Euro" },
  { value: "EUR-MZN", label: "Euro/Metical de Moçambique" },
  { value: "INR-EUR", label: "Rúpia Indiana/Euro" },
  { value: "JOD-EUR", label: "Dinar Jordaniano/Euro" },
  { value: "KWD-EUR", label: "Dinar Kuwaitiano/Euro" },
  { value: "EUR-AZN", label: "Euro/Manat Azeri" },
  { value: "EUR-AMD", label: "Euro/Dram Armênio" },
  { value: "EUR-TJS", label: "Euro/Somoni do Tajiquistão" },
  { value: "EUR-RUB", label: "Euro/Rublo Russo" },
  { value: "HUF-EUR", label: "Florim Húngaro/Euro" },
  { value: "GEL-EUR", label: "Lari Georgiano/Euro" },
  { value: "EUR-GEL", label: "Euro/Lari Georgiano" },
  { value: "IDR-EUR", label: "Rupia Indonésia/Euro" },
  { value: "EUR-AOA", label: "Euro/Kwanza Angolano" },
  { value: "BYN-EUR", label: "Rublo Bielorrusso/Euro" },
  { value: "XAGG-EUR", label: "XPrata/Euro" },
  { value: "PEN-EUR", label: "Sol do Peru/Euro" },
];
