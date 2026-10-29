# Mundo dos Gatos

Atividade da disciplina de **Programação Web** — Análise e Desenvolvimento de Sistemas (1ª fase, EaD).
Aluno: Gustavo Fraga

Página sobre gatos feita com HTML, CSS e JavaScript, com informações, uma lista de cuidados, curiosidades que mudam a cada clique e um botão de modo noturno.

## Arquivos

- `index.html` – estrutura e conteúdo da página
- `style.css` – estilização (cores, tamanhos, espaçamentos)
- `script.js` – interatividade dos botões

Para ver a página, basta abrir o `index.html` no navegador.

## Perguntas

### 1. Qual é a função do HTML na página desenvolvida?

O HTML é a estrutura da página. Foi com ele que eu organizei todo o conteúdo: o título principal (`<h1>`), os parágrafos (`<p>`), a foto do gato (`<img>`), a lista de cuidados (`<ul>` e `<li>`) e os botões (`<button>`). Também é no HTML que eu liguei os outros dois arquivos: o CSS pela tag `<link>` no `<head>` e o JavaScript pela tag `<script>` no final do `<body>`. Sem o HTML não existiria conteúdo para o CSS estilizar nem para o JavaScript controlar.

### 2. Onde você utilizou CSS e quais alterações ele realizou?

Usei o CSS no arquivo `style.css`. Ele mudou a cor de fundo da página para um tom creme, deixou o cabeçalho laranja e mudou as cores e os tamanhos do título, dos subtítulos e dos parágrafos. Também coloquei o conteúdo em "cartões" brancos com cantos arredondados e sombra, arredondei a imagem, mudei a cor das bolinhas da lista e destaquei a caixa de curiosidade. Nos botões, mudei a cor, arredondei as bordas, coloquei o cursor de "mãozinha" e um efeito que escurece e aumenta o botão quando o mouse passa por cima. Por último, criei as cores do modo noturno e diminuí o título em telas de celular.

### 3. Onde você utilizou JavaScript e o que acontece quando ele é executado?

Usei o JavaScript no arquivo `script.js`, com duas funcionalidades:

- **Mostrar curiosidade:** quando o usuário clica no botão, o texto da caixa "Você sabia?" é trocado por uma curiosidade sobre gatos. A cada clique aparece a próxima, e quando acabam a lista volta para o começo.
- **Modo noturno:** quando o usuário clica no botão do cabeçalho, a página troca as cores claras por cores escuras, e o texto do botão muda para "Modo claro". Clicando de novo, volta ao normal.

### 4. Qual é a principal diferença entre CSS e JavaScript?

O CSS cuida da aparência: ele define como os elementos ficam (cores, tamanhos, espaços, bordas). O JavaScript cuida do comportamento: ele reage às ações do usuário, como um clique, e muda a página enquanto ela está aberta. No meu projeto dá para ver bem essa diferença: as cores do modo noturno estão escritas no CSS, mas quem liga e desliga esse modo quando o botão é clicado é o JavaScript.
