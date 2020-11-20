function Ambiente() {

    this.Temperatura = null;
    this.Largo = null;
    this.Ancho = null;
    this.Alto = null;
    this.Orientacion = null;
    this.Cocina = null;
    this.Ventanas = null;
    this.Ocupantes = null;

    //SETTERS

    this.setTemperatura = (temperatura) => {

        this.Temperatura = temperatura;
    }

    this.setLargo = (evento) => {
        var largo = parseFloat(evento.target.value);
        if (isNaN(largo) || largo == null || largo === 0) {
            alert('Valor inválido: introducir valor numérico separando los decimales con punto.');
        } else {
            this.Largo = largo;
        }
    }

    this.setAncho = (evento) => {
        var ancho = parseFloat(evento.target.value);
        if (isNaN(ancho) || ancho == null || ancho === 0) {
            alert('Valor inválido: introducir valor numérico separando los decimales con punto.');
        } else {
            this.Ancho = ancho;
        }
    }


    this.setAlto = (evento) => {
        var alto = parseFloat(evento.target.value);
        if (isNaN(alto) || alto == null || alto === 0) {
            alert('Valor inválido: introducir valor numérico separando los decimales con punto.');
        } else {
            this.Alto = alto;
        }
    }

    this.setOrientacion = () => {
        var orientacion = $("#orientacion").val();
        this.Orientacion = orientacion;
    }

    this.setVentanas = (evento) => {
        var ventanas = parseFloat(evento.target.value);
        if (isNaN(ventanas) || ventanas == null) {
            alert('Valor inválido: introducir valor numérico.');
        } else {
            this.Ventanas = ventanas;
        }
    }
    this.setOcupantes = (evento) => {
        var ocupantes = parseFloat(evento.target.value);
        if (isNaN(ocupantes) || ocupantes == null || ocupantes < 1) {
            alert('Valor inválido: introducir valor numérico. La cantidad de ocupantes no puede ser inferior a 1.');
        } else {
            this.Ocupantes = ocupantes;
        }
    }
    //METODO GLOBAL//

    this.calculoGlobal = () => {

        let coeficienteTemperatura = calcularTemperatura();
        let superficieTotal = calcularSuperficieTotal();
        let coeficienteOrientacion = calcularOrientacion();
        let coeficienteCocina = calcularCocina();
        let coeficienteVentanas = calcularVentanas();
        let coeficienteOcupantes = calcularOcupantes();

        let Frigorias = (coeficienteTemperatura * superficieTotal) + coeficienteOrientacion + coeficienteCocina + coeficienteVentanas + coeficienteOcupantes;
        let Kcal = Frigorias * 1;
        let Watts = parseInt(Frigorias * 1.163);
        let Btu = Frigorias * 4;

        $("#contResultado").show();
        $('html, body').animate({
            scrollTop: $("#frigorias").offset().top
        }, 1500);
        $(".superficie__contenedor").slideDown(1000);
        $("#SuperficieTotal").text(superficieTotal);
        $("#frigorias").text(Frigorias);
        $("#Kcal").text(Kcal);
        $("#Watts").text(Watts);
        $("#BTU").text(Btu);

    }

    //GETTERS//

    const calcularTemperatura = () => {
        var multiplicadorTemperatura;
        switch (this.Temperatura) {
            case "calida":
                multiplicadorTemperatura = 60;
                break;
            case "muy calida":
                multiplicadorTemperatura = 70;
                break;
            default:
                multiplicadorTemperatura = 50;
                break;
        }

        return multiplicadorTemperatura;
    };

    const calcularSuperficieTotal = () => {
        var metroscubicos;
        metroscubicos = this.Largo * this.Ancho * this.Alto;

        return metroscubicos;
    };

    const calcularOrientacion = () => {

        var orientacion;
        switch (this.Orientacion) {
            case "norte":
                orientacion = 200;
                break;
            case "sur":
                orientacion = 300;
                break;
            case "este":
                orientacion = 400;
                break;
            default:
                orientacion = 100;
                break;
        }

        return orientacion;
    };
    const calcularCocina = () => {

        var cocina;

        if ($('#cocina').is(":checked")) {
            cocina = 1000;
        } else {
            cocina = 0;
        }

        this.Cocina = cocina;
        return cocina;
    };

    const calcularVentanas = () => {
        var ventanas;
        ventanas = this.Ventanas * 500;

        return ventanas;
    };

    const calcularOcupantes = () => {
        var ocupantes;
        ocupantes = this.Ocupantes * 150;

        return ocupantes;
    }
}