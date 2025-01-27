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

            // aggiungiamo in pagina (usando innerHTML) quello che ci serve
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
            

            container.innerHTML += cardHtml;
        }

        const cards = document.querySelectorAll(".card");

        cards.forEach(card => {
            card.addEventListener('click', () => {

                // Trova l'immagine all'interno della card
                const imageElement = card.querySelector('.singleImg'); // Trova immagine
                const imageUrl = imageElement.src; // Estrai URL dell'immagine

                // Crea il contenuto dinamico del popup
                const popUpContent = `
                    <img src="${imageUrl}" alt="Popup Image" class="popup-image">
                `;

                popUpImg.innerHTML = popUpContent;

                popUp.classList.remove('hidden');
            });
        })

    })
    .catch(error => {
        console.log(error);
    }); 

// Chiudi il popup
closePopUp.addEventListener('click', () => {
    popUp.classList.add('hidden'); 
});



