// settiamo le variabile di output
const container = document.getElementById('container');

// effettuiamo una chiamata AJAX all'API 
// // (nel nostro caso è un array di ogetti)
axios.get("https://lanciweb.github.io/demo/api/pictures/")
.then(response => {
    console.log(response);

    const arrayList = response.data;
    console.log(arrayList);

    // quindi estrapoliamo gli oggetti singoli dell'array  con un ciclo
    for(i =0; i < arrayList.length; i++){
        console.log(arrayList[i]);
        
    }

});




// poi da ogni oggetto prendiamo gli elementi che ci servono 
// e li salviamo in una variabile

// aggiungiamo in pagina (usando innerHtml) quello che ci serve






