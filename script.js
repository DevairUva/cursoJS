let valor = prompt('Um valor em metros (mt)');
let opcao = prompt('deseja converter o valor '+valor+
'em: \nmilimetro\ncentímetro\ndecímetro\ndecâmetro\nhectômetro\nquilômetro');

switch(opcao){
    case 'milimetro':
        alert('Valor em milimetros: '+(valor*1000));
        break;
    case 'centímetro':
        alert('Valor em centímetros: '+(valor*100));
        break;
    case 'decímetro':
        alert('Valor em decímetros: '+(valor*10));
        break;
    case 'decâmetro':
        alert('Valor em decâmetros: '+(valor/10));
        break;
    case 'hectômetro':
        alert('Valor em hectômetros: '+(valor/100));
        break;
    case 'quilômetro':
        alert('Valor em quilômetros: '+(valor/1000));
        break;                        
    default:
        alert('Opção incorreta');
}