
const nome = prompt("Qual seu nome ?");
const novoNome = document.getElementById("nome");
novoNome.innerHTML= "Olá " + nome + " vamos jogar!"


let inicioJogo = prompt("Selecione uma opção: \n Por favor, selecionar apenas números 1 ou 2. \n Você gostaria de jogar? \n 1. Sim \n 2.Não " );

if (inicioJogo == 1) {
    alert ("Vamos iniciar" \n "Lembre-se de selecionar apenas a letra correta: a, b ou c");

    const primeiraPergunta = prompt("1.Qual a capital do Brasil? \n a)Brasília \n b)Salvador \n c)Rio de Janeiro");
    const capitalBrasil = document.getElementById("primeiraPergunta");
    capitalBrasil.innerHTML= "a"

    const segundaPergunta = prompt("2.Qual a capital do Peru? \n a)Cusco \n b)Lima \n c)Trujillo");
    //const capitalPeru = document.getElementById("segundaPergunta");
    //segundaPergunta.innerHTML= "b " 

    const terceiraPergunta = prompt("3.Qual a capital do Colombia? \n a)Bucaramanga \n b)Barranquilla \n c)Bogota");
    //const capitalColombia = document.getElementById("nome");
    //terceiraPergunta.innerHTML= "c " !"
}else {
    alert ("Obrigada por participar.");

}

//document.write ("Olá " + nome + " vamos jogar!");



/*function () {
    if === a {
        alert ("Parabéns você acertou!")
    } else {
        alert("Tente novamente!")
    }
}*/