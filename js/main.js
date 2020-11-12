let miAmbiente = new Ambiente();

let botonesTemperatura = document.getElementsByClassName('temp_btn_onclick');

for (let i = 0; i < botonesTemperatura.length; i++) {
    botonesTemperatura[i].addEventListener('click', (evento) => {
        miAmbiente.setTemperatura(evento.target.parentNode.value);
    });
}

document.getElementById("largo").onchange = miAmbiente.setLargo;
document.getElementById("ancho").onchange = miAmbiente.setAncho;
document.getElementById("alto").onchange = miAmbiente.setAlto;
document.getElementById("orientacion").onchange = miAmbiente.setOrientacion;
document.getElementById("ventanas").onchange = miAmbiente.setVentanas;
document.getElementById("personas").onchange = miAmbiente.setOcupantes;
document.getElementById("calcular").onclick = miAmbiente.calculoGlobal;

/* // //Botón imprimir//
function imprimir() {
    window.print();

//Botón guardar// */