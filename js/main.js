let miAmbiente = new Ambiente();

$(".temp_btn_onclick").click((evento) => {
    miAmbiente.setTemperatura(evento.target.parentNode.value)
});

$("#largo").change(miAmbiente.setLargo);
$("#ancho").change(miAmbiente.setAncho);
$("#alto").change(miAmbiente.setAlto);
$("#orientacion").change(miAmbiente.setOrientacion);
$("#ventanas").change(miAmbiente.setVentanas);
$("#ocupantes").change(miAmbiente.setOcupantes);
$("#calcular").click(miAmbiente.calculoGlobal);

//Botón imprimir//

$("#imprimir").click(() => {
    window.print();
})


//Botón guardar//

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

document.getElementById("guardar").addEventListener("click", () => {

    var text = "Estimado usuario: \nPara su habitación de " + $("#SuperficieTotal").val() + " m3 le recomendamos un equipo de " + $("#frigorias").val() + " frigorias " + "\(" + $("#Watts").val() + " Watts/" + $("#Kcal").val() + " Kcal/" + $("#BTU").val() + " BTU" + "\).\n" + "Ante cualquier duda, escríbanos a ayuda@grigologic.com.";
    var filename = "frigologic.txt";

    download(filename, text);

}, false);