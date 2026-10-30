function ligar(id, evento, funcao) {
    const elemento = document.getElementById(id);
    if (elemento) {
        elemento.addEventListener(evento, funcao);
    }
}

function mostrarTexto(id, texto) {
    document.getElementById(id).textContent = texto;
}

ligar("menu-botao", "click", alternarMenu);
function alternarMenu() {
    const lista = document.getElementById("menu-lista");
    const aberto = lista.classList.toggle("aberto");
    document.getElementById("menu-botao").setAttribute("aria-expanded", aberto);
}

const dicas = [
    "Abra o menu e visite as dez páginas.",
    "Teste o formulário de contato: as mensagens ficam salvas no navegador.",
    "Diminua a janela para ver o site se adaptar ao celular.",
    "Na página JavaScript, calcule a média de duas notas."
];
let posicaoDica = 0;
ligar("botao-inicio", "click", mostrarDica);
function mostrarDica() {
    mostrarTexto("resultado-inicio", "Dica: " + dicas[posicaoDica]);
    posicaoDica = posicaoDica + 1;
    if (posicaoDica === dicas.length) {
        posicaoDica = 0;
    }
}

ligar("botao-sobre", "click", destacarTexto);
function destacarTexto() {
    document.getElementById("texto-sobre").classList.toggle("destacado");
}

ligar("botao-html", "click", mostrarExplicacao);
function mostrarExplicacao() {
    document.getElementById("explicacao-html").classList.toggle("oculto");
}

ligar("botao-css", "click", mudarCor);
function mudarCor() {
    const texto = document.getElementById("texto-css");
    if (texto.style.color === "red") {
        texto.style.color = "";
    } else {
        texto.style.color = "red";
    }
}

const alinhamentos = ["flex-start", "center", "flex-end", "space-between"];
let posicaoAlinhamento = 3;
ligar("botao-flex", "click", mudarAlinhamento);
function mudarAlinhamento() {
    posicaoAlinhamento = posicaoAlinhamento + 1;
    if (posicaoAlinhamento === alinhamentos.length) {
        posicaoAlinhamento = 0;
    }
    const valor = alinhamentos[posicaoAlinhamento];
    document.getElementById("exemplo-flex").style.justifyContent = valor;
    mostrarTexto("alinhamento-atual", valor);
}

ligar("botao-galeria", "click", alternarImagem);
function alternarImagem() {
    document.getElementById("imagem-exemplo").classList.toggle("oculto");
}

function lerMensagens() {
    return JSON.parse(localStorage.getItem("mensagens")) || [];
}

function guardarMensagens(mensagens) {
    localStorage.setItem("mensagens", JSON.stringify(mensagens));
}

function criarMensagem(mensagem, posicao) {
    const caixa = document.createElement("article");
    caixa.className = "mensagem-salva";
    const titulo = document.createElement("h3");
    titulo.textContent = mensagem.assunto + " — " + mensagem.nome;
    const detalhe = document.createElement("small");
    detalhe.textContent = mensagem.email + " · " + mensagem.data;
    const texto = document.createElement("p");
    texto.textContent = mensagem.mensagem;
    const remover = document.createElement("button");
    remover.type = "button";
    remover.className = "btn btn-sm btn-outline-danger";
    remover.textContent = "Remover";
    remover.addEventListener("click", function () {
        removerMensagem(posicao);
    });
    caixa.append(titulo, detalhe, texto, remover);
    return caixa;
}

function mostrarMensagens() {
    const area = document.getElementById("lista-mensagens");
    const mensagens = lerMensagens();
    area.replaceChildren();
    if (mensagens.length === 0) {
        mostrarTexto("contador-mensagens", "Nenhuma mensagem salva ainda.");
        document.getElementById("botao-limpar").disabled = true;
    } else {
        mostrarTexto("contador-mensagens", "Mensagens salvas: " + mensagens.length);
        document.getElementById("botao-limpar").disabled = false;
    }
    for (let i = 0; i < mensagens.length; i++) {
        area.appendChild(criarMensagem(mensagens[i], i));
    }
}

function salvarContato(evento) {
    evento.preventDefault();
    const mensagens = lerMensagens();
    mensagens.push({
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        assunto: document.getElementById("assunto").value,
        mensagem: document.getElementById("mensagem").value,
        data: new Date().toLocaleString("pt-BR")
    });
    guardarMensagens(mensagens);
    evento.target.reset();
    mostrarTexto("retorno-contato", "Mensagem salva com sucesso!");
    mostrarMensagens();
}

function removerMensagem(posicao) {
    const mensagens = lerMensagens();
    mensagens.splice(posicao, 1);
    guardarMensagens(mensagens);
    mostrarMensagens();
}

function limparMensagens() {
    localStorage.removeItem("mensagens");
    mostrarTexto("retorno-contato", "Todas as mensagens foram apagadas.");
    mostrarMensagens();
}

if (document.getElementById("formulario-contato")) {
    ligar("formulario-contato", "submit", salvarContato);
    ligar("botao-limpar", "click", limparMensagens);
    mostrarMensagens();
}

ligar("botao-lista", "click", mostrarLista);
function mostrarLista() {
    const tecnologias = ["HTML", "CSS", "JavaScript", "Bootstrap"];
    let texto = "";
    for (let i = 0; i < tecnologias.length; i++) {
        texto = texto + (i + 1) + ". " + tecnologias[i] + "\n";
    }
    mostrarTexto("resultado-lista", texto);
}

function mostrarFavorito() {
    const favorito = localStorage.getItem("assuntoFavorito");
    if (favorito) {
        mostrarTexto("resultado-favorito", "Assunto salvo: " + favorito);
        document.getElementById("assunto-favorito").value = favorito;
    }
}

ligar("botao-salvar", "click", salvarFavorito);
function salvarFavorito() {
    const assunto = document.getElementById("assunto-favorito").value;
    if (assunto === "") {
        mostrarTexto("resultado-favorito", "Escolha uma opção.");
    } else {
        localStorage.setItem("assuntoFavorito", assunto);
        mostrarTexto("resultado-favorito", "Assunto salvo: " + assunto);
    }
}

if (document.getElementById("botao-salvar")) {
    mostrarFavorito();
}

ligar("botao-media", "click", calcularMedia);
function calcularMedia() {
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    if (isNaN(nota1) || isNaN(nota2) || nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
        mostrarTexto("resultado-media", "Digite duas notas entre 0 e 10.");
        return;
    }
    const media = (nota1 + nota2) / 2;
    let situacao = "Reprovado";
    if (media >= 7) {
        situacao = "Aprovado";
    } else if (media >= 5) {
        situacao = "Em recuperação";
    }
    mostrarTexto("resultado-media", "Média: " + media.toFixed(1) + " — " + situacao);
}
