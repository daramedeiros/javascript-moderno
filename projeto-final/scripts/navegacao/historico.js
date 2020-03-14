const listaSites = JSON.parse(sessionStorage.getItem('historico')) || [];
const posicao = JSON.parse(sessionStorage.getItem('posicaoHistorico')) || -1;

export function adicionar(endereco) {

}

export function voltar() {
    if (posicao > 0) {
        posicao--;
        sessionStorage.setItem('posicaoHistorico', posicao);
        return listaSites[posicao];
    }
}

export function avançar() {
    if (posicao < listaSites.length) {
        posicao++;
        sessionStorage.setItem('pposicaoHistoricos', posicao);
        return listaSites;
    }
}
