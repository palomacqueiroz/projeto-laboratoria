
const nome = prompt("Qual seu nome ?");
const novoNome = document.getElementById("nome");
novoNome.innerHTML= "Olá " + nome + " vamos jogar!"
//novoNome.innerHTML= "OláBlá "  


let inicioJogo = prompt("Selecione uma opção: \n Você gostaria de jogar? \n 1. Sim \n 2.Não " );

if (inicioJogo == 1) {
    alert ("Vamos iniciar");

    const primeiraPergunta = prompt("1.Qual a capital do Brasil? \n a)Brasília \n b)Salvador \n c)Rio de Janeiro");
    const capitalBrasil = document.getElementById("primeiraPergunta");
    capitalBrasil.innerHTML= "b"

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