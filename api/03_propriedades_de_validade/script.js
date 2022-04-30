//Propriedades de validade

//A propriedade de validade de um elemento de entrada contém várias propriedades relacionadas à validade de dados:
/*
    custonError:
        Retorna 'true' se a validade personalizada for válida;
    patternMismatch:
        Retorna 'true' se um valor de um elemento não confere com o atributo paterno;
    rangeOverflow:
        Retorna 'true' se um valor de um elemento for maior que o seu atributo máximo;
    rangeUnderflow:
        Retorna 'true' se o valor de um elemento for menor que o atributo mínimo;
    stepMismatch:
        Retorna 'true' se o valor de um elemento for inválido por seu atributo de passo;
    tooLong:
        Retorna 'true' se o valor de um elemento exceder o maxLength de um atributo;
    typeMismatch:
        Retorna 'true' se o vlor de um elemento é inválido pelo seu tipo de atributo;
    valueMissing:
        Retorna 'true' se um elemento (com atributo requirido) não tem valor;
    valid:
        Retorna 'true' se um valor de um elemento for válido.
*/