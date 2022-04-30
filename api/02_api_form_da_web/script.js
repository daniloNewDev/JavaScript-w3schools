//APIs de validação de JavaScript.

//Métodos DOM de validação de restrição:

//Por meio do método 'checkValidity()' é possível exibir uma mensagem caso algum campo de entrada contiver dados inválidos:

function myFunction() {
    const inpObj = document.getElementById('id1')
    if (!inpObj.checkValidity()) {
        document.getElementById('demo').innerHTML = inpObj.validationMessage
    } else {
        document.getElementById('demo').innerHTML = "Input OK"
    }
}
//Neste exemplo acima foram usadas as "Propriedades DOM de validação de restrição" chamadas:

//validity,
//que contém uma propriedade de valor 'Boolean';

//validationMessage,
//contém uma mensagem do Browser informando quando a validade for 'false';

//willValidate,
//indica se um elemento 'input' será validável.