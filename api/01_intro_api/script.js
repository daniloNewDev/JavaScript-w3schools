//Introdução à API de Web.

//'API' significa Interface de Programação de Aplicativos.
//Todos os navegadores têm um conjunto de APIs da Web intergradas para oferecer suporte a operações complexas e para ajudar no acesso a dados.

//APIs do navegador:
let x = document.getElementById('demo')

function getLocation() {
    try {
        navigator.geolocation.getCurrentPosition(showPosition)
    } catch {
        x.innerHTML = 'Erro'
    }
}

function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude
}


//APIs de terceiros:
//Apis de terceiros não são incorporados ao seu navegador. Para usar estas APIs é necessário baixar o código da Web, como por exemplo, Youtube, Facebook...