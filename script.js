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


// let inicial = parseInt(prompt('digite a quantidade inicial'));
// let atual = parseInt(inicial);
// let add = parseInt(0);
// let sub = parseInt(0);
// let opcao = 0;

// do{
//     opcao = parseInt(prompt('Você tem R$'+atual+'. O que deseja fazer?\n1)Aumentar\n2)Diminuir\n3)Sair'));
//     switch(opcao){
//         case 1:
//             add = parseInt(prompt('Aumentar quanto?'));
//             atual = parseInt(atual+add);
//             break;
//         case 2:
//             sub = prompt('Diminuir quanto?');
//             atual = atual-sub;
//             break;
//         case 3:
//             alert("Saindo do menu.")
//             break
//         default:
//             alert('Opção inválida.')
//     }
// }while(opcao != 3);

//TABUADA
// let numero = prompt('Deseja a tabuada de qual número?');
// let resposta = ''

// for(i=1; i<21; i++){
//     let resultado = numero*i;
//     resposta += numero+" x "+i+" = "+resultado+"\n";
// }

// alert(resposta);

//Palíndromo
// let nome = prompt('Digite uma palavra para descobrir se a mesma é um palíndromo:');
// let contrario = '' ;
// let j = nome.length-1;

// for(i=0; i<nome.length; i++){
//     contrario += nome[j];
//     j--;
// }

// if(nome == contrario){
//     alert(nome+' é um palíndromo.');
// } else {
//     alert(
//         'O nome = '+nome+
//         '\nO nome ao contrário = '+contrario
//     )
// }

//Array
const arr = [];
arr.push('devair'); //insere no final
arr.push(8);
console.log(arr);
console.log(arr[2]);
arr.push('macaco')
console.log(arr);
console.log(arr[2])
arr.unshift('isabela'); //inclui no início
console.log(arr);
arr.pop(); //remove o último
console.log(arr);
arr.shift(); //remove primeiro
console.log(arr);
let falso = arr.includes('graça'); //pesquisa e retorna true ou false
console.log(falso);
let verdadeiro = arr.includes(8); 
console.log(verdadeiro);
let posicao = arr.indexOf('devair'); //pesquisa e retorna a posição
console.log(posicao);
let vazio = arr.indexOf(81); //retorna negativo, pq não existe
console.log(vazio);
arr.push('isabela', 33);
console.log(arr);
const arr2 = arr.slice(1,4); //copia os elemento de 1 a 3 do array anterior
console.log(arr2);
const negativo = arr.slice(-2); //pegando a partir de um indíce de trás pra frente
console.log(negativo);
