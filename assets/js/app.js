// console.log('Le test marche correctement!');
// 1. récupérer le bouton
const btn = document.getElementById("hambuger")
// const switchBtn = document.getElementById("hambuger")
// 2. récupérer la nav
const menu = document.querySelector('nav');
// const ul = document.querySelector ('ul')

// 3. détecter le clic sur le bouton...
btn.addEventListener('click', (event) => {
    
    if (menu.className === '') {
        // 4. ...pour afficher la liste
        menu.className = 'menu-hamburger-on'
        // ul.style.background = 'red'
            
        }else{
            menu.className = ''

        }
    })
    
    // // si le <ul> est actuellement en "display: none"...
    // if (styles.display === 'none') {
    //     // ...alors on le passe en "display: block"
    //     menu.style.display = 'block';
    // } else {
    //     // ...sinon (= le <ul> n'est pas en "display: none") on le passe en "display: none"
    //     menu.style.display = 'none';
    // }

// 1. récupérer le bouton
const switchBtn = document.getElementById("switch-on")

// const switchBtn = document.getElementById("hambuger")
// 2. récupérer la main
const main = document.querySelector('main');
const switchBtnOn = document.getElementById('switch-on');
const switchBtnOff = document.getElementById('switch-off');
console.log(switchBtnOff, switchBtn);

// const ul = document.querySelector ('ul')

// 3. détecter le clic sur le bouton...
switchBtn.addEventListener('click', (event) => {
    
    if (main.className === '') {
        // 4. ...pour afficher la liste
        main.style.backgroundColor = '#ffffff'

            
        }else{
            main.backgroundColor = 'black'

        }
    })