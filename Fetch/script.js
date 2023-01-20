// 1.1 Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para 
// hacer un .fetch() y recibir los datos que devuelve. Imprimelo mediante un 
// console.log(). Para ello, es necesario que crees un .html y un .js.

fetch('https://api.agify.io?name=michael')
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    console.log(myJson);
  });


// 2.1 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando 
// fetch() para hacer una consulta a la api cuando se haga click en el botón, 
// pasando como parametro de la api, el valor del input.


// 2.3 En base al ejercicio anterior. Crea dinamicamente un elemento  por cada petición 
// a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.
// EJ: El nombre Pepe tiene un 22 porciento de ser de ET y un 6 porciento de ser 
// de MZ.


// 2.4 En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno 
// de los p que hayas insertado y que si el usuario hace click en este botón 
// eliminemos el parrafo asociado.

baseUrl = 'https://api.nationalize.io/'

let valorInputs = document.querySelector('input').addEventListener('change', value);
let inputText

function value(event) {
    inputText = event.target.value;
}

const getName = async () => {
    const res = await fetch (`${baseUrl}?name=${inputText}`);
    if(inputText == undefined) {
        console.log('Introduce un valor en el input');
    } else {
    const resData = await res.json();

    for (let i = 0; i < resData.country.length; i++) {
        const parrafo = document.createElement('p');
        const closeButton = document.createElement('button');
        parrafo.innerHTML = `${resData.name} tiene un ${resData.country[i].probability} % de ser de ${resData.country[i].country_id} `
        parrafo.setAttribute('id', `parrafo${i}`);
        closeButton.innerText = 'x';
        parrafo.append(closeButton);
        document.body.append(parrafo);
            function removeParagraph () {
                let myParagraph = document.getElementById(`parrafo${i}`);
                myParagraph.remove();
            }
            closeButton.addEventListener('click', removeParagraph);        
        }
    }

    
    }
    
    const myButton = document.querySelector('button');
    myButton.addEventListener('click', getName);