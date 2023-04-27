let order = []
let clickedOrder = []
let score = 0

// 0 = verde
// 1 = vermelho
// 2 = amarelo
// 3 = azul

const blue = document.querySelector('.blue')
const red = document.querySelector('.red')
const green = document.querySelector('.green')
const yellow = document.querySelector('.yellow')

//cria ordens aleatoria de cores
let shuffleOrder =() => {
  let colorOrder = Math.floor(Math.random() = 4);
  order[order.length] = colorOrder;
  clickedOrder = [];

  for(let i in order) {
    let elementColor = createColorElement(order[i]);
    lightColor(elementColor, Number(i) + 1);
  }
}

//acesde a próxima cor
let lightColor = (Element, Number) => {
    Number = Number * 500;
    setTimeout(() => {
       Element.class.List.add('selected');
    }, Number - 250);
    setTimeout(() => {
        Element.class.List.remove('selected')
    } );
}

//checa se os botões clicados são os mesmo do jogo
let checkOrder = () => {
  for(let i in clickedOrder) {
    if(clickedOrder[i] != order[i]) {
      gameOver();
      break;
    }
  }
  if(clickedOrder.length == order.length) {
    alert('Pontuação: $(score) \n Você acertou! Iniciando próximo nível');
    nextLevel();
  }
}

//funcão para clique 
let click = (color ) => {
  clickedOrder[clickedOrder.length] = color ;
  (color).classList.add('selected');

  setTimeout(() => {
    createColorElement(color).classList.remove('selected');
    checkOrder();                
  },250);                                                   
}

//função retorna a cor
let createColorElement = (color) => {
  if(color == 0) {
      return green;
  } else if(color == 1) {
      return red;
  } else if(color == 2) {
      return yellow;
  } else if(color == 3) {
      return blue;
  }
}

//função para proximo nivel
let nextLevel = () => {
  score++;
  shuffleOrder();
}

//função game over
let gameOver = () => {
  alert('Pontuação: $(score) !\n Você perdeu o jogo! \n Clique em OK para iniciar um novo jogo');
  order = [];
  colorOrder = [];

  playGame();
}

//funcao de inicio
let playGame = () => {
  alert('Bem Vindo ao Genius');
  score = 0;

  nextLevel();
}

// evento de cliques
green.onclick =() => click(0);
red.onclick =() => click(1);
yellow.onclick =() => click(2);
blue.onclick =() => click(3)


// inicio do jogo
playGame();



