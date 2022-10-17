/* 
1 - L'utente clicca su un bottone che genererà una griglia di gioco quadrata. 
    1.1 - Ogni cella ha un numero progressivo, da 1 a 100.
    1.2 - Ci saranno quindi 10 caselle per ognuna delle 10 righe.
2 - Quando l'utente clicca su ogni cella, 
    2.1 - la cella cliccata si colora di azzurro 
    2.2 - ed emetto un messaggio in console con il numero della cella cliccata.
*/

//Seleziono il box nel DOM
const boxEl = document.querySelector('.box_menu');
//Inserisco il pulsante per generare un campo
boxEl.insertAdjacentHTML('afterbegin', `<button class="my_btn">Create Pitch</button>`)
//Seleziono il bottone
const buttonEl = document.querySelector('.my_btn');

buttonEl.addEventListener('click', function() {
    //Seleziono 'select'
    const selectEl = document.getElementById('lvl');
    //Acquisisco la difficoltà del livello
    const difficult = Number(selectEl.options[selectEl.selectedIndex].value);
    console.log(difficult);
});