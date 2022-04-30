//API Web Storage

//O API de armazenamento da Web é uma sintaxe simples para armazenar e recuperar dados do navegador. Considerado simples de usar:

localStorage.setItem("nome", "Moshe") //localStorage == 'Object'
localStorage.getItem("nome")

//O 'object' 'localStorage' fornece acesso a um armazenamento local para um determinado site. Permite que você armazene, leia, adicione, modifique e exclua itens de dados para este domínio.
//       Neste caso os dados NÃO são excluídos quando o navegador é fechado.


//Método 'setItem()'
//      Armazena um item de dados em um 'storage':

localStorage.setItem("idade", "40") //Recebendo um nome e um parâmetro.

//Método 'getItem()'
//      Recupera um Item de dados do armazenamento:

localStorage.getItem("nome") //Neste caso, recebe um nome como parâmetro.



//Objeto 'sessionStorage':

sessionStorage.getItem("idade")
    //O objeto 'sessionStorage' é praticamente igual ao 'localStorage', o que difere um do outro é a sessão, pois o 'sessionStorage' armazena dados de uma sessão. Quando o navegador é fechado ou atualizado, automáticamente os dados são apagados.

sessionStorage.setItem("nome2", "Shlomo") //Usando o método 'setItem()'
sessionStorage.getItem("nome2") //Usando o método 'getItem()'