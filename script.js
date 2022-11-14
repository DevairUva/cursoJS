let nome = prompt ('nome do turista');
let opcao = prompt('Já visitou alguma cidade?');
let cidades = prompt('escreva o nome da cidade');

while(opcao !== 'não'){
    opcao = prompt('Já visitou alguma outra cidade?');
    if(opcao === "sim"){
        cidades += ', '+prompt('escreva o nome da cidade');
    } else {
        alert('ok')
    }
}

alert(nome+' já visitou as seguintes cidades: \n'+cidades);