//WebWorker
//  'Web Worker' é um JavaScript que é executado em segundo plano, sem afetar o desempenho da página.

//Neste exemplo, o web worker executar um contador do tipo cronômetro:
let w

function start() {
    if (typeof(w) == "undefined") {
        w = new Worker("demo_workers.js")
    } //É preciso gerar um script que faz a contagem
    w.onmessage = function(event) {
        document.getElementById("res").innerHTML = event.data
    }
}

function stop() {
    w.terminate() //Encerrando o Web Worker.
    w = undefined
        //Undefined é usado para redefinir o valor de w e reutilizar o contador.
}

/* Exemplo modelo de contador:

let i = 0

function timedCount() {
    i++
    postMessage(i)
    setTimeout("timedCount()", 100)
}
timedCount()

//      'postMessage()'
        //Neste modelo acima foi utilizado o método 'postMessage()' que é usado para postar uma mensagem de retorno na página HTML.


//      'onmessage'
        //Após o Web Worker enviar a mensagem pelo'postMessage()', o código dentro do 'event listener' "onmessage" é executado. Os dados do Web Worker são armazenados em 'event.data'.

//      'terminate()'
        //O método 'terminate()' encerra o Web Worker. O Web Worker ser criado e continua ouvir as mensagens, mesmo após a conclusão do script externo. Neste caso é possível encerrar o Web Worker com o método 'terminate()' para liberar recursos do navegador e hardware.

*/