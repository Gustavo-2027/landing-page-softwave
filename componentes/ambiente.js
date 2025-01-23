const titles = document.querySelectorAll(".tit h1"); // Seleciona todos os <h1>
titles.forEach(title => { // Percorre cada elemento da NodeList
    title.addEventListener("mouseover", function() {
        title.style.cssText = "color: var(--cor-fundo); transition: 1s;";
    });

    title.addEventListener("mouseout", function() {
        title.style.cssText = "color: white; transition: 1s;";
    });
});

const elementosMenu = document.querySelectorAll(".menu a"); // menu
elementosMenu.forEach(a => {
    a.addEventListener("mouseover", function(){
        a.style.cssText = "color: var(--cor-fundo); transition: 1s;";
    })

    a.addEventListener("mouseout", function(){
        a.style.cssText = "color: white; transition: 1s;";
    })

    const loginEs = document.querySelector("#login-es");
    loginEs.addEventListener("mouseover", function() {
    loginEs.style.cssText = `color: white; background-color: var(--cor-fundo); transition: 1s;`
})
});

const subtitle1 = document.querySelector("#subtitle1"); // subtitles
const subtitle2 = document.querySelector("#subtitle2");
subtitle1.addEventListener("mouseover", function(){
    subtitle1.style.cssText = "color: var(--cor-fundo); transition: 1s;";
    subtitle2.style.cssText = "color: white; transition: 1s;";
    
});

subtitle1.addEventListener("mouseout", function() {
    subtitle1.style.cssText = "color: white; transition: 1s;";
    subtitle2.style.cssText = "color:  var(--cor-fundo); transition: 1s;";
});


const enviar = document.querySelector("#enviar");
enviar.addEventListener("mouseover", function() {
    enviar.style.cssText = `background-color: white; color: var(--cor-fundo); transition: 1s; `;

    enviar.addEventListener("mouseout", function() {
        enviar.style.cssText = `transition: 1s;`;
    })
});

const body = document.querySelector("body"); // Seleciona o body
const mudarCor = document.querySelector("#cor"); // Seleciona o botão
const main = document.querySelector("main");
let corAlternada = false; // Variável para controlar o estado da cor
const img = document.querySelector("#imagem");

mudarCor.addEventListener("click", function () {
    if (corAlternada) {
        body.style.cssText = "background-color: #222222; transition: 1.5s;";
        document.documentElement.style.setProperty("--cor-fundo", "#47dacb");
        img.setAttribute("src", "componentes/img/01.svg");
        img.style.cssText = "transition: 2s;";
    } else {
        body.style.cssText = "background-color: burlywood; transition: 1.5s;";
        document.documentElement.style.setProperty("--cor-fundo", "brown");
        img.setAttribute("src", "componentes/img/02.svg");
        img.style.cssText = "transition: 2s;";
    }
    corAlternada = !corAlternada; // Alterna entre true e false
});






