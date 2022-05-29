
const idmaiuscula = document.querySelector('#idmaiuscula');
const idminuscula = document.querySelector('#idminuscula');

idmaiuscula.addEventListener('change', function(){
    document.getElementById('#idtexto');
    alert(texto.toUpperCase());
})

idminuscula.addEventListener('change', function(){
    document.getElementById('#idtexto');
    alert(texto.toLowerCase());
})
