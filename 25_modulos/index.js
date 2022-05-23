//    Módulos JavaScript    //

//Em JavaScript é possível que o usuário divida o código em arquivos separados. Isso facilita a manutençãoda base do código. Os módulos JavaScript dependem das Statements "import" e "export".

//  Para criar um módulo é preciso criar um arquivo, como "nomes.js" e preencher com dados que ocasionalmente serão exportados;
//  Existem dois tipos de exports que são "Named" e "Default":
/*
            "user_named.js"

            "user_default.js"
*/

//    Importar (import)   //

//Você pode importar módulos para um arquivo de duas maneiras, com base na exportação named e exportação default:

//  As expressões named são construídas usando chaves '{ }':
import { name, id } from "./user_default.js";
let user1 = name + id;
document.getElementById("dem").innerHTML = user1;
