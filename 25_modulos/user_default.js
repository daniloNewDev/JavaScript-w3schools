//    Exprotação Padrão (Default)   //

//Só é possível haver uma exportação em cada arquivo:

const userNamed = () => {
  const name = "Moshe";
  const id = 11;
  return `Nome: ${name}, id:${id}.`;
};

export default userNamed;
