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
// const arr = [];
// arr.push('devair'); //insere no final
// arr.push(8);
// console.log(arr);
// console.log(arr[2]);
// arr.push('macaco')
// console.log(arr);
// console.log(arr[2])
// arr.unshift('isabela'); //inclui no início
// console.log(arr);
// arr.pop(); //remove o último
// console.log(arr);
// arr.shift(); //remove primeiro
// console.log(arr);
// let falso = arr.includes('graça'); //pesquisa e retorna true ou false
// console.log(falso);//false
// let verdadeiro = arr.includes(8); 
// console.log(verdadeiro);//true
// let posicao = arr.indexOf('devair'); //pesquisa e retorna a posição
// console.log(posicao);//0
// let vazio = arr.indexOf(81); //retorna negativo, pq não existe
// console.log(vazio);//-1
// arr.push('isabela', 33);
// console.log(arr);
// const arr2 = arr.slice(1,4); //copia os elemento de 1 a 3 do array anterior
// console.log(arr2);
// const negativo = arr.slice(-2); //pegando a partir de um indíce de trás pra frente
// console.log(negativo);
// let juntos = arr2.concat(negativo, 8, 'eita');//concatena dois arrays
// console.log(juntos);
// let indiceEita = juntos.indexOf('eita');//posição de 'eita'
// console.log(indiceEita);//6
// let removidos = juntos.splice(indiceEita, 1, "vem que vem");
// console.log(juntos);
// console.log('item removido de "juntos" : '+removidos);
// console.log(juntos[6]); //vem que vem;

//lista de pacientes
// let pacientes = ['Matheus', 'Marcos', 'Lucas', 'João'];
// let novoPaciente = '';
// let atendido = ''
// let op = 0;
// let lista = [];

// for (i = 0; i < pacientes.length; i++) {
//     lista.push(`${(i + 1)}° Paciente: ${pacientes[i]}\n`);
// }

// op = prompt(
//     `Lista de Pacientes:\n${lista.join('')}\nSelecione uma da seguintes opções:
//     \n1.Add novo paciente\n2.Atenter paciente\n3.Sair`
// );

// while (op != 3) {
//     if (op == 1) {
//         lista = [];
//         novoPaciente = prompt('Digite o nome do novo paciente');
//         pacientes.push(novoPaciente);
//         for (i = 0; i < pacientes.length; i++) {
//             lista.push(`${(i + 1)}° Paciente: ${pacientes[i]}\n`);
//         }
//         op = prompt(`Lista de Pacientes:\n${lista.join('')}\nSelecione uma da seguintes opções:
//         \n1.Add novo paciente\n2.Atenter paciente\n3.Sair`);
//     } else if (op == 2) {
//         atendido = pacientes.shift();
//         alert('Paciente atendido: ' + atendido);
//         lista = [];
//         for (i = 0; i < pacientes.length; i++) {
//             lista.push(`${(i + 1)}° Paciente: ${pacientes[i]}\n`);
//         }
//         if (lista[0] == undefined) {
//             op = 3;
//             alert(`${atendido} foi o último paciente da lista. Não existem pacientes em espera!\nSaindo...`);
//         } else {
//             op = prompt(`Lista de Pacientes:\n${lista.join('')}\nSelecione uma da seguintes opções:
//         \n1.Add novo paciente\n2.Atenter paciente\n3.Sair`);
//         }
//     } else if (op != 1 || op != 2 || op != 3) {
//         alert('Opção inválida');
//         op = prompt(`Lista de Pacientes:\n${lista.join('')}\nSelecione uma da seguintes opções:
//         \n1.Add novo paciente\n2.Atenter paciente\n3.Sair`);
//     } else if (op == 3) {
//         alert('Saindo...')
//     }
// }

//Baralho
// let pacientes = ['A', '2', '3', '4'];
// let novoPaciente = '';
// let atendido = ''
// let op = 0;
// let lista = [];

// for (i = pacientes.length; i > 0; i--) {
//     let aux = pacientes.shift();
//     lista.unshift(`${i}° carta: ${aux}\n`);
//     pacientes.push(aux);
// }

// op = prompt(
//     `Lista de cartas:\n${lista.join('')}\nSelecione uma da seguintes opções:
//     \n1.Add nova carta ao topo\n2.Retirar carta do topo\n3.Sair`
// );

// do {
//     if (op == 1) {
//         lista = [];
//         novoPaciente = prompt('Qual carta será adicionada?');
//         pacientes.push(novoPaciente);
//         for (i = pacientes.length; i > 0; i--) {
//             let aux = pacientes.shift();
//             lista.unshift(`${i}° carta: ${aux}\n`);
//             pacientes.push(aux);     
//         }
//         op = prompt(`Lista de cartas:\n${lista.join('')}\nSelecione uma da seguintes opções:
//         \n1.Add nova carta ao topo\n2.Retirar carta do topo\n3.Sair`);
//     } else if (op == 2) {
//         atendido = pacientes.pop();
//         alert(`Carta retirada: "${atendido}"`);
//         lista = [];
//         for (i = pacientes.length; i > 0; i--) {
//             let aux = pacientes.shift();
//             lista.unshift(`${i}° carta: ${aux}\n`);
//             pacientes.push(aux);
//         }
//         if (lista[0] == undefined) {
//             op = 3;
//             alert(`"${atendido}" foi a última carta da pilha. Não existem cartas na pilha!\nSaindo...`);
//         } else {
//             op = prompt(`Lista de cartas:\n${lista.join('')}\nSelecione uma da seguintes opções:
//             \n1.Add nova carta ao topo\n2.Retirar carta do topo\n3.Sair`);
//         }
//     }  else if (op == 3) {
//         alert('Saindo...')
//     } else if (op != 1 || op != 2 || op != 3) {
//         alert('Opção inválida');
//         op = prompt(`Lista de cartas:\n${lista.join('')}\nSelecione uma da seguintes opções:
//         \n1.Add nova carta ao topo\n2.Retirar carta do topo\n3.Sair`);
//     }
// } while (op != 3)

//bidimencionais
// const arr= [
//     "1° nível",
//     ["2° nível", 42, true],
//     [
//         ["3° nível, 1° item", "Bom dia" ],
//         ["3° nível, 2° item", "Boa tarde"]
//     ],
//     ["4° nível"]
// ]

// console.log(arr[2][1])//3° nível, 1° item, Bom dia
// console.log(arr);//tudo
// console.log(arr[3])//4° nível
// console.log(arr[1][2])//true
// console.log(arr[2][1][1])//Boa tarde
// console.log(arr[2][0][0])//3° nível, 1° item

// const matriz = [
//     ["1°l, 1°c", "1°l, 2°c", "1°l 3°c"],
//     ["2°l, 1°c", "2°l, 2°c", "2°l 3°c"],
//     ["3°l, 1°c", "3°l, 2°c", "3°l 3°c"]
// ]

// matriz.push(['devair', 'isabela', 'gisele']);//nova linha no final do array
// matriz[0].push('cachorro');//cachorro ao final da linha 0
// matriz[0][1] = 'gato';//gato na 1° linha 2° coluna
// matriz[2].push('papagaio')//papagaio ao final da 3°linha
// matriz[2][1] = '';//"" na 3°linha 2°coluna
// matriz[1].pop();//apaga o último elemento da 2° linha
// // matriz.pop()//apaga a linha 3

// console.table(matriz) // função para printar matrix

//objetos
// let funcao = 'log';
// console[funcao]("olá mundo"); //assim como chamo log após o ponto, posso chamar dentro das []
// console[funcao]("Devair");//log é uma propiedade do objeto console
// const pessoa = {}; //criação de um objeto
// pessoa.nome = 'isabela'; //propiedade nome
// pessoa.idade = 26; //propiedade idade
// console[funcao](pessoa); //print
// pessoa.colegas = [["fabiano"], ["fabio, gisele"]]; //array dentro de um objeto
// pessoa.endereco = { //objeto dentro de outro objeto
//     rua: "Sao miguel",
//     numero: 19,
//     bairro: "Parada de Lucas",
//     estado: "RJ"
// }
// console[funcao](pessoa); //print pessoas
// console.log(pessoa.endereco.estado) //propiedade estado do objeto pessoa "rj"
// console.log(pessoa.colegas[1]) //segunda posição do array de arrays "fabio, gisele"
// console['log']('nome')

//imóveis
let op = 0;
let quantidade = [];

op = prompt(`Existe(m) ${quantidade.length} imóvel(veis) cadastrado(s).\n
Selecione uma das opções a seguir:\n
1. Cadastrar imóvel\n
2. Mostrar imóveis cadastrados.\n
3. Sair`);

do {
    if (op == 1) {

        const imovel = {
            propietario: prompt("Propietário:"),
            quartos: prompt("Quantidade de quartos"),
            banheiros: prompt("Quantidade de banheiros"),
            garagem: "",

            toString() {
                return `Propietário do imóvel: ${this.propietario}\n
                Quantidade de quartos:${this.quartos}\n
                Quantidade de banheiros: ${this.banheiros}\n
                O imóvel ${this.garagem}`;
            }
        };

				let aux = prompt("Possui garagem?\n 1/Sim\n 2/Não")
        
        do {
            if (aux == 1) {
                imovel.garagem = "possui garagem.";
            } else if (aux == 2) {
                imovel.garagem = "não possui garagem";
            } else {
                alert("Opção incorreta!");
                aux = prompt("Possui garagem?\n 1/Sim\n 2/Não");
                if (aux == 1) {
                    imovel.garagem = "possui garagem.";
                } else if (aux == 2) {
                    imovel.garagem = "não possui garagem";
                }
            }
        } while (aux != 1 && aux != 2);
        quantidade.push(imovel);
        
        op = prompt(`Existe(m) ${quantidade.length} imóvel(veis) cadastrado(s).\n
        Selecione uma das opções a seguir:\n
        1. Cadastrar imóvel\n
        2. Mostrar imóveis cadastrados.\n
        3. Sair`);

    } else if (op == 2) {
        
        for (i = 0; i < quantidade.length; i++) {
            alert(quantidade[i]);
        }
        op = prompt(`Existe(m) ${quantidade.length} imóvel(veis) cadastrado(s).\n
        Selecione uma das opções a seguir:\n
        1. Cadastrar imóvel\n
        2. Mostrar imóveis cadastrados.\n
        3. Sair`);

    } else if (op == 3) {
        alert("Saindo");

    } else {
        alert("Opção incorreta!")
        op = prompt(`Existe(m) ${quantidade.length} imóvel(veis) cadastrado(s).\n
        Selecione uma das opções a seguir:\n
        1. Cadastrar imóvel\n
        2. Mostrar imóveis cadastrados.\n
        3. Sair`);
    }

} while (op != 3)

//return
// function criarProduto(nome, preco, estoque){
// 	const produto = {
// 		nome,
// 		preco,
// 		estoque,
// 	};
// 	return produto; //objeto sempre será retornado
// }
// const cadeira = criarProduto("cadeira", 500, 1) //criação de objeto com parâmetro
// console.log(cadeira) //conseguimos imprimir graças ao return
// cadeira.estoque++
// console.log(cadeira.estoque)

// function soma(a, b){ //soma dois números
// 	// const resultado = parseFloat(a + b); //utilizando uma função no recebimento
// 	// return resultado; //retorno
// 	return a+b //podemos usar direto no return
// }
// console.log(soma(8,2)) //função soma dentro da função console.log

// function soma(primeiro, segundo){
// 	return primeiro+segundo;
// }
// function dobrouSoma(normal){
// 	return soma(normal, normal) //função no retorno de outra
// }

// console.log(soma(1,2))
// console.log(dobrouSoma(2))

//NODE.JS

// const moment = require ('moment');

// function myName(name){
// 	console.log(name);
// 	console.log(moment().format('HH:mm'))
// }

// myName("Devair Martins")