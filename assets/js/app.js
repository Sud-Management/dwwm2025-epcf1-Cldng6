// console.log('Le test marche correctement!');
// 1. récupérer le bouton
const btn = document.getElementById("hambuger")
// const switchBtn = document.getElementById("hambuger")
// 2. récupérer la nav
const menu = document.querySelector('nav');

// 3. détecter le clic sur le bouton...
btn.addEventListener('click', (event) => {
    
    if (menu.className === '') {
        // 4. ...pour afficher la liste
        menu.className = 'menu-hamburger-on'
        // btn.className = 'button-off'
            
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

