const form = document.getElementById('form-lista');
const nome_contato = document.getElementById ('contato');
const Tel_contato  = document.getElementById ('telefone');
const lista_contato = [];
const lista_tel = [];

let linhas = '';

form.addEventListener('submit',function(e){
    e.preventDefault();

    adicionar_linha();
    atualizar_tabela();
});

function adicionar_linha() { /* cria uma função chamada adicionar linha, esta função cria a linha */

    if (lista_contato.includes(nome_contato.value)) {
        alert(`o contato: ${nome_contato.value} já foi inserido!`)
    }
    else {
        lista_contato.push(nome_contato.value); /* adiciona as informações que foram digitados no campo atividade e salva na array */
        lista_tel.push(parseFloat(nome_contato.value)); /* adiciona as informações que foram digitado no campo nota no arrey, o parseFloat transforma todo os numero da array em numero */

        let linha = '<tr>';
        linha += `<td>${nome_contato.value}</td>`; /* adiciona mais uma linha */
        linha += `<td>${Tel_contato.value}</td>`;  /* adiciona mais uma linha */
        linha += `</tr>`;

        linhas += linha;
    }
    
    nome_contato.value = '';
    Tel_contato.value = '';
}

function atualizar_tabela() {
    const tabela_contato = document.querySelector('tbody');
    tabela_contato.innerHTML = linhas;
}