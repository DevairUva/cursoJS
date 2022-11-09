let nomeP1 = prompt('nome p1');
let atk = prompt('ataque');
let nomeP2 = prompt('nome p2');
let vida = prompt('vida '+nomeP2);
let dfs = prompt('defesa '+nomeP2);
let escudo = confirm(nomeP2+' possui um escudo?')
let esc;
let dano;

if(atk>dfs && escudo == false){
    dano = atk - dfs;
} else if (atk>dfs && escudo == true){
    dano = (atk - dfs)/2;
} else if (atk == dfs){
    dano = 0;
}

let vidaRestante = vida-dano;

if(escudo == true){
    esc = "sim"
} else {
    esc = "não"
}

if(vidaRestante<=0){
    vidaRestante = 'se fudeu'
}

alert(
    'Atacante: '+nomeP1+' | ataque: '+atk+
    '\nDefensor: '+nomeP2+' | vida antes do ataque: '+vida+
    '| dfs: '+dfs+' | escudo: '+esc+' | dano: '+dano+' | vida após ataque: '+vidaRestante
)