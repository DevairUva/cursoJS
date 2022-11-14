let nome = prompt ('nome do turista');
let opcao = prompt('Já visitou alguma cidade?');
let cont = 0;

if(opcao === "sim"){
    cont++;
    let cidades = prompt('escreva o nome da cidade');
    while(opcao !== 'não'){
        opcao = prompt('Já visitou alguma outra cidade?');
        if(opcao === "sim"){
            cidades += '\n'+prompt('escreva o nome da cidade');
            cont++;
        } else {
            alert('ok')
        }
    }
    alert(nome+' visitou um total de '+cont+' cidade(s).\nSão elas: : \n'+cidades);
} else {
    alert('Poxa, '+nome+'. Você precisa curtir mais a vida!')
}