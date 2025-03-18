// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let arrayAmigos=[];


function limpiarCaja(){
    document.querySelector('#amigo').value ='';
    return;
}

function crearLiElements(){
    let listaDeAmigos = document.querySelector('#listaAmigos');
    listaDeAmigos.innerHTML = '';
    for (let i = 0; i < arrayAmigos.length; i++){
        listaDeAmigos.innerHTML += `<li>${arrayAmigos[i]}</li>`;
    }
}

function agregarAmigo(){
    
    let nombreDigitado =document.getElementById('amigo').value;
    if (nombreDigitado == ''){
        alert('Por favor, inserte un nombre');
    } else if (arrayAmigos.includes(nombreDigitado)){
        alert('El nombre digitado ya se encuentra en la lista');
    } else {
        arrayAmigos.push(nombreDigitado);
        console.log(arrayAmigos);
        limpiarCaja();
        crearLiElements();
    }
    return arrayAmigos;
}

function sortearAmigo(){
    if (arrayAmigos.length < 2){
        alert('Por favor inserte al menos dos nombres para sortear');
    } else{
        let indiceAmigo = Math.floor(Math.random()*(arrayAmigos.length));
        let nombreSelecccionado = document.getElementById('resultado');
        nombreSelecccionado.innerHTML = arrayAmigos[indiceAmigo];
        return nombreSelecccionado;
    }
}


        