//seleccionar elementos html con js 


//query selector 
//retorna los elementos que concuerda con el selector que estoy escribiendo 

// const heading = document.querySelector('h2');
// console.log(heading);

// //query selector all
// //devuelve 0 o mas elementos 

// const heading1 = document.querySelectorAll('.navegacion_enlace');
// console.log(heading1[0]);


//eventos en Java Script 

window.addEventListener('load', function(){ //load espera a que el js y los archivos del html esten listos 
    console.log(2);

})

// lo mismo escrito de otra forma

window.onload = function(){
    console.log(333);
}


window.addEventListener('DOMContentLoaded',function(){ //domcontentloaded solo espera que descargue el html pero no espera css o imagenes !


    console.log('4');
})


window.onscroll = function (){
    console.log('scrolling');
}

//seleccionar elementos y asosciarles eventos
const benviar = document.querySelector('.boton--primario');
benviar.addEventListener('click',function(){

    console.log('mostrando cosas !'
    )
})