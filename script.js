function changeMode(){
    changeClasses();
    changeText();
}

function changeClasses(){
    botao.classList.toggle('dark-mode');
    title.classList.toggle('dark-mode');
    corpo.classList.toggle('dark-mode');
    rodape.classList.toggle('dark-mode');
}

function changeText(){
    const darkMode = "Dark Mode";
    const lightMode = "Light Mode";

    if(corpo.classList.contains(darkModeClass)) {
        botao.innerHTML = lightMode;
        title.innerHTML = darkMode + ' on';
        return;
    }
    botao.innerHTML = darkMode;
    title.innerHTML = lightMode + ' on';
}

const darkModeClass = 'dark-mode';
const botao = document.getElementById('mode-selector');
const title = document.getElementById('page-title');
const corpo = document.getElementsByTagName('body')[0];
const rodape = document.getElementsByTagName('footer')[0];

botao.addEventListener('click', changeMode);