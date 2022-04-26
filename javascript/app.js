
const listaVez = document.getElementsByClassName('seta-vez');
const listaBotoes = document.getElementsByTagName('button');
const btnLimparTabuleiro = document.getElementById('div-btn');

var vez = 1;
var totalJogadas = 0;

function selecionaBotao()
{
    let valor = this.innerHTML;

    if (valor == '')
    {
        let simbolo = vez == 1 ? 'O' : 'X';
        this.innerHTML = simbolo;

        listaVez[vez - 1].style.display = 'none';

        vez = vez == 1 ? vez = 2 : vez = 1;

        listaVez[vez - 1].style.display = '';
        totalJogadas = totalJogadas + 1;

        verificaVencedor();
    }
}

function verificaVencedor()
{
    let arraySeqTabuleiro = [listaBotoes[0].innerHTML + listaBotoes[1].innerHTML + listaBotoes[2].innerHTML,
                             listaBotoes[3].innerHTML + listaBotoes[4].innerHTML + listaBotoes[5].innerHTML,
                             listaBotoes[6].innerHTML + listaBotoes[7].innerHTML + listaBotoes[8].innerHTML,
                             listaBotoes[0].innerHTML + listaBotoes[3].innerHTML + listaBotoes[6].innerHTML,
                             listaBotoes[1].innerHTML + listaBotoes[4].innerHTML + listaBotoes[7].innerHTML,
                             listaBotoes[2].innerHTML + listaBotoes[5].innerHTML + listaBotoes[8].innerHTML,
                             listaBotoes[0].innerHTML + listaBotoes[4].innerHTML + listaBotoes[8].innerHTML,
                             listaBotoes[2].innerHTML + listaBotoes[4].innerHTML + listaBotoes[6].innerHTML];
    
    if (arraySeqTabuleiro.includes('OOO'))
    {
        let indice  = arraySeqTabuleiro.indexOf('OOO');
        pintaTabuleiroVencedor(indice);

        bloqueiaTabuleiro();
        atualizaPlacar(1);
        alert('Jogador 1 (O) venceu a partida!');
    }
    else if (arraySeqTabuleiro.includes('XXX'))
    {
        let indice  = arraySeqTabuleiro.indexOf('XXX');
        pintaTabuleiroVencedor(indice);

        bloqueiaTabuleiro();
        atualizaPlacar(2);
        alert('Jogador 2 (X) venceu a partida!');
    }
    else
    {
        if (totalJogadas == 9)
        {
            atualizaPlacar(0);
            alert('Nenhum jogador venceu a partida!');
        }
    }
}

function atualizaPlacar(indiceJogador)
{
    let placarPartidas = document.getElementById('total-partidas');
    let totalPartidas = parseInt(placarPartidas.innerHTML);

    if (indiceJogador > 0)
    {
        let placarJogador = document.getElementById('vitorias-jog' + indiceJogador);
        let totalVitorias = parseInt(placarJogador.innerHTML);

        placarJogador.innerHTML = totalVitorias + 1;
    }
    
    placarPartidas.innerHTML = totalPartidas + 1;
}

function pintaTabuleiroVencedor(indice)
{
    const corVerde = '#55FF55';

    switch (indice)
    {
        case 0:
            listaBotoes[0].style.backgroundColor = corVerde;
            listaBotoes[1].style.backgroundColor = corVerde;
            listaBotoes[2].style.backgroundColor = corVerde;
            break;
        case 1:
            listaBotoes[3].style.backgroundColor = corVerde;
            listaBotoes[4].style.backgroundColor = corVerde;
            listaBotoes[5].style.backgroundColor = corVerde;
            break
        case 2:
            listaBotoes[6].style.backgroundColor = corVerde;
            listaBotoes[7].style.backgroundColor = corVerde;
            listaBotoes[8].style.backgroundColor = corVerde;
            break;
        case 3:
            listaBotoes[0].style.backgroundColor = corVerde;
            listaBotoes[3].style.backgroundColor = corVerde;
            listaBotoes[6].style.backgroundColor = corVerde;
            break;
        case 4:
            listaBotoes[1].style.backgroundColor = corVerde;
            listaBotoes[4].style.backgroundColor = corVerde;
            listaBotoes[7].style.backgroundColor = corVerde;
            break
        case 5:
            listaBotoes[2].style.backgroundColor = corVerde;
            listaBotoes[5].style.backgroundColor = corVerde;
            listaBotoes[8].style.backgroundColor = corVerde;
            break;
        case 6:
            listaBotoes[0].style.backgroundColor = corVerde;
            listaBotoes[4].style.backgroundColor = corVerde;
            listaBotoes[8].style.backgroundColor = corVerde;
            break;
        case 7:
            listaBotoes[2].style.backgroundColor = corVerde;
            listaBotoes[4].style.backgroundColor = corVerde;
            listaBotoes[6].style.backgroundColor = corVerde;
            break;
    }
}

function limpaTabuleiro()
{
    const corPadrao = '';

    for (let i = 0 ; i < listaBotoes.length ; i++)
    {
        listaBotoes[i].innerHTML = '';
        listaBotoes[i].disabled = false;
        listaBotoes[i].style.backgroundColor = corPadrao;
    }

    vez = 1;
    listaVez[0].style.display = '';
    listaVez[1].style.display = 'none';
    totalJogadas = 0;
}

function bloqueiaTabuleiro()
{
    for (let i = 0 ; i < listaBotoes.length ; i++)
    {
        listaBotoes[i].disabled = true;
    }
}

listaBotoes[0].addEventListener('click', selecionaBotao);
listaBotoes[1].addEventListener('click', selecionaBotao);
listaBotoes[2].addEventListener('click', selecionaBotao);
listaBotoes[3].addEventListener('click', selecionaBotao);
listaBotoes[4].addEventListener('click', selecionaBotao);
listaBotoes[5].addEventListener('click', selecionaBotao);
listaBotoes[6].addEventListener('click', selecionaBotao);
listaBotoes[7].addEventListener('click', selecionaBotao);
listaBotoes[8].addEventListener('click', selecionaBotao);

btnLimparTabuleiro.addEventListener('click', limpaTabuleiro)