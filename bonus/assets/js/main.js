/* 
1 - L'utente clicca su un bottone che genererà una griglia di gioco quadrata. 
    1.1 - Ogni cella ha un numero progressivo, da 1 a 100.
    1.2 - Ci saranno quindi 10 caselle per ognuna delle 10 righe.
2 - Quando l'utente clicca su ogni cella, 
    2.1 - la cella cliccata si colora di azzurro 
    2.2 - ed emetto un messaggio in console con il numero della cella cliccata.
*/

//Seleziono il bottone
const buttonEl = document.querySelector('.my_btn');

buttonEl.addEventListener('click', function() {
    //Seleziono 'select'
    const selectEl = document.getElementById('lvl');
    //Acquisisco il valore del livello
    const sizeLvl = Number(selectEl.options[selectEl.selectedIndex].value);
    //Seleziono la griglia
    const gridEL = document.querySelector('.grid');
    //Aggiung0 un'istruzione per cui la griglia si resetti
    gridEL.innerHTML = ''; 

    for (let i = sizeLvl; i > 0; i--) {
        //Inserisco il markup di ogni box nel DOM
        gridEL.insertAdjacentHTML('afterbegin', `<div class="box">${i}</div>`);

        const boxEl = document.querySelector('.box');
        boxEl.style.width = `calc(100% / ${Math.sqrt(sizeLvl)})`;
        const num = Number(boxEl.textContent);

        boxEl.addEventListener('click', function() {
            if (boxEl.style.backgroundColor === "lightblue") {
                boxEl.style.backgroundColor = "white";
            } else {
                boxEl.style.backgroundColor = "lightblue";
            }
            console.log(num);
        })

    }

});
