// settiamo le variabile di output
const container = document.getElementById('container');

const photoPopup = document.getElementById("photoPopup");


// effettuiamo una chiamata AJAX all'API 
// // (nel nostro caso è un array di ogetti)
axios.get("https://lanciweb.github.io/demo/api/pictures/")
    .then(response => {
        console.log(response);

        const arrayList = response.data;
        console.log(arrayList);

        // quindi estrapoliamo gli oggetti singoli dell'array con un ciclo
        for(i =0; i < arrayList.length; i++){
            console.log(arrayList[i]);
            
            // poi da ogni oggetto prendiamo gli elementi che ci servono e li salviamo in una variabile
            const {id, title, date, url} = arrayList[i];
            console.log(id, title, date, url);

            // aggiungiamo in pagina (usando innerHtml) quello che ci serve
            container.innerHTML += `
                <div class="card">
                    <div class="containerPhoto">
                        <img src="./img/pin.svg" alt="" class="pinImg">
                        <img src=${url} alt="photo" class="singleImg">
                    </div>
                    <div class="date">${date}</div>
                    <div class="text">${title.toUpperCase()}</div> 
                </div>
            `;  
        };
    })
    .catch(error => {
        console.log(error);
        
    });













