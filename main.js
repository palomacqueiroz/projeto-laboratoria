
const nome = prompt("Qual seu nome ?");
const novoNome = document.getElementById("nome");
novoNome.innerHTML= nome + " obrigada por jogar!"


let inicioJogo = prompt("Selecione uma opção: \n Por favor, selecionar apenas números 1 ou 2. \n Você gostaria de jogar? \n 1. Sim \n 2.Não " );

if (inicioJogo == 1) {
    alert ("Vamos iniciar - Lembre-se de selecionar apenas a letra correta: a, b ou c");

    const primeiraPergunta = prompt("1.Qual a capital do Brasil? \n a)Brasília \n b)Salvador \n c)Rio de Janeiro");
        if(primeiraPergunta == "a"){
            const capitalBrasil = document.getElementById("primeiraPergunta");            
            document.write( "\n Resposta 1 Correta.");
        } else{
            document.write( "\n Resposta 1 Incorreta.");    
        }
    
    //const capitalBrasil = document.getElementById("primeiraPergunta");
    //capitalBrasil.innerHTML= "a"

    const segundaPergunta = prompt("2.Qual a capital do Peru? \n a)Cusco \n b)Lima \n c)Trujillo");
        if(segundaPergunta == "b"){
            const capitalPeru = document.getElementById("segundaPergunta");          
            document.write( "\n Resposta 2 Correta.");
        } else{
            document.write( "\n Resposta 2 Incorreta.");    
        }

    //const capitalPeru = document.getElementById("segundaPergunta");
    //segundaPergunta.innerHTML= "b " 

    const terceiraPergunta = prompt("3.Qual a capital do Colombia? \n a)Bucaramanga \n b)Barranquilla \n c)Bogota");
        if(terceiraPergunta == "c"){
            const capitalColombia = document.getElementById("terceiraPergunta");            
            document.write( "\n Resposta 3 Correta.");
        } else{
            document.write( "\n Resposta 3 Incorreta.");    
        }

    //const capitalColombia = document.getElementById("nome");
    //terceiraPergunta.innerHTML= "c " !"
}else {
    alert ("Obrigada por participar.");

}



