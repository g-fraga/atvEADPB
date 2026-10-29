/* =========================================================
   script.js — Interatividade da página "Mundo dos Gatos"
   Este arquivo cuida do COMPORTAMENTO da página:
   o que acontece quando o usuário clica nos botões.
   ========================================================= */


// ---------- FUNCIONALIDADE 1: MOSTRAR CURIOSIDADES ----------

// Lista (array) com as curiosidades. Cada clique mostra a próxima.
const curiosidades = [
  "Gatos dormem, em média, de 12 a 16 horas por dia.",
  "Gatos não conseguem sentir o sabor doce.",
  "Cada orelha de um gato tem 32 músculos, o que permite girá-las para ouvir melhor.",
  "Os bigodes ajudam o gato a perceber se ele cabe em um espaço apertado.",
  "O desenho do nariz de cada gato é único, como a nossa impressão digital.",
  "Gatos adultos quase não miam entre si: o miado é usado principalmente para falar com pessoas."
];

// Guarda a posição da próxima curiosidade a ser mostrada.
// Começa em 0, que é a primeira posição da lista.
let posicaoAtual = 0;

// Pega no HTML, pelo id, o parágrafo da curiosidade e o botão.
const textoCuriosidade = document.getElementById("curiosidade");
const botaoCuriosidade = document.getElementById("botao-curiosidade");

// Função executada quando o usuário clica no botão "Mostrar curiosidade".
// Troca o texto do parágrafo pela curiosidade da posição atual
// e avança para a próxima. Quando chega ao fim da lista, volta ao início.
function mostrarCuriosidade() {
  // Coloca a curiosidade da posição atual dentro do parágrafo.
  textoCuriosidade.textContent = curiosidades[posicaoAtual];

  // Avança uma posição na lista.
  posicaoAtual = posicaoAtual + 1;

  // Se já mostrou todas, volta para a primeira.
  if (posicaoAtual === curiosidades.length) {
    posicaoAtual = 0;
  }

  // Depois do primeiro clique, o texto do botão muda.
  botaoCuriosidade.textContent = "Próxima curiosidade";
}

// "Escuta" o clique no botão: quando ele for clicado, chama a função acima.
botaoCuriosidade.addEventListener("click", mostrarCuriosidade);


// ---------- FUNCIONALIDADE 2: MODO NOTURNO ----------

// Pega no HTML o botão do modo noturno, pelo id.
const botaoTema = document.getElementById("botao-tema");

// Função executada quando o usuário clica no botão "Modo noturno".
// Liga ou desliga a classe "modo-noturno" na tag <body>.
// As cores escuras dessa classe estão definidas no style.css.
function alternarModoNoturno() {
  // toggle: se a classe não existe, adiciona; se já existe, remove.
  document.body.classList.toggle("modo-noturno");

  // Muda o texto do botão de acordo com o modo que está ativo.
  if (document.body.classList.contains("modo-noturno")) {
    botaoTema.textContent = "☀️ Modo claro";
  } else {
    botaoTema.textContent = "🌙 Modo noturno";
  }
}

// Quando o botão do tema for clicado, chama a função alternarModoNoturno.
botaoTema.addEventListener("click", alternarModoNoturno);
