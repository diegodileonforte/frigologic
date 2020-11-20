let miAmbiente = new Ambiente();

$(".temp_btn_onclick").click((evento)=>{
    miAmbiente.setTemperatura(evento.target.parentNode.value)
});

$("#largo").change(miAmbiente.setLargo);
$("#ancho").change(miAmbiente.setAncho);
$("#alto").change(miAmbiente.setAlto);
$("#orientacion").change(miAmbiente.setOrientacion);
$("#ventanas").change(miAmbiente.setVentanas);
$("#ocupantes").change(miAmbiente.setOcupantes);
$("#calcular").click(miAmbiente.calculoGlobal);

/* // //Botón imprimir//
function imprimir() {
    window.print();

//Botón guardar// */