// dichiazazione variabili di output
const container = document.getElementById('container');
const popUp = document.getElementById('popUp');
const closePopUp = document.getElementById('closePopUp');
const popUpImg = document.getElementById('popUpImg')

// effettuiamo una chiamata AJAX all'API con axios 
axios.get("https://lanciweb.github.io/demo/api/pictures/")
    .then(response => {
        // console.log(response);

        const arrayList = response.data;
        // console.log(arrayList);

        // quindi estrapoliamo gli oggetti singoli dell'array con un ciclo
        for (let i = 0; i < arrayList.length; i++) {
            // console.log(arrayList[i]);

            // poi da ogni oggetto prendiamo gli elementi che ci servono e li salviamo in una variabile
            const { id, title, date, url } = arrayList[i];
            // console.log(id, title, date, url);

            // dichiariamo una variabile che contenga l'html da aggiungere
            const cardHtml = `
                <div class="card">
                    <div class="containerPhoto">
                        <img src="./img/pin.svg" alt="" class="pinImg">
                        <img src="${url}" alt="photo" class="singleImg">
                    </div>
                    <div class="date">${date}</div>
                    <div class="text">${title.toUpperCase()}</div> 
                </div>
            `;

            console.log(cardHtml);
            
            // aggiungiamo il contenuto in pagina usando innerHTML
            container.innerHTML += cardHtml;
        }

        // richiamiamo la classe card aggiunta in precedenza salvandola in una costante
        const cards = document.querySelectorAll(".card");

        // creiamo un ciclo per l'evento click
        cards.forEach(card => {
            card.addEventListener('click', () => {

                // salviamo in una costante l'immagine all'interno della card
                const imageElement = card.querySelector('.singleImg');

                // Estraiamo URL dell'immagine e salviamocelo
                const imageUrl = imageElement.src;

                // Creiamo il contenuto dinamico del popup da aggiungere in pagina
                const popUpContent = `
                    <img src="${imageUrl}" alt="Popup Image" class="popup-image">
                `;

                // aggiungiamo il contenuto in pagina usando innerHTML
                popUpImg.innerHTML = popUpContent;

                // rimuoviamo la classe hidden per mostrare in contenuto al click
                popUp.classList.remove('hidden');
            });
        })

    })
    .catch(error => {
        console.log(error);
    }); 

// Chiudi il popup
closePopUp.addEventListener('click', () => {
    
    // al click sul bottone aggiungiamo la classe hidden per nascondelo
    popUp.classList.add('hidden'); 
});



