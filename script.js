// let nome = prompt ('nome do turista');
// let opcao = prompt('Já visitou alguma cidade?');
// let cont = 0;

// if(opcao === "sim"){
//     cont++;
//     let cidades = prompt('escreva o nome da cidade');
//     while(opcao !== 'não'){
//         opcao = prompt('Já visitou alguma outra cidade?');
//         if(opcao === "sim"){
//             cidades += '\n'+prompt('escreva o nome da cidade');
//             cont++;
//         } else {
//             alert('ok')
//         }
//     }
//     alert(nome+' visitou um total de '+cont+' cidade(s).\nSão elas: : \n'+cidades);
// } else {
//     alert('Poxa, '+nome+'. Você precisa curtir mais a vida!')
// }


let inicial = parseInt(prompt('digite a quantidade inicial'));
let atual = parseInt(inicial);
let add = parseInt(0);
let sub = parseInt(0);
let opcao = 0;

do{
    opcao = parseInt(prompt('Você tem R$'+atual+'. O que deseja fazer?\n1)Aumentar\n2)Diminuir\n3)Sair'));
    switch(opcao){
        case 1:
            add = parseInt(prompt('Aumentar quanto?'));
            atual = parseInt(atual+add);
            break;
        case 2:
            sub = prompt('Diminuir quanto?');
            atual = atual-sub;
            break;
        case 3:
            alert("Saindo do menu.")
            break
        default:
            alert('Opção inválida.')
    }
}while(opcao != 3);