function sumar(){
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;

    var sumar = parseInt(num1) + parseInt(num2);

    document.getElementById('resultado_suma'). value = sumar;
}

function multiplicar(){
    var num3 = document.getElementById('num3').value;
    var num4 = document.getElementById('num4').value;

    var multiplicar = parseInt(num3) * parseInt(num4);

    document.getElementById('resultado_multi'). value = multiplicar;
}

function restar(){
    var num5 = document.getElementById('num5').value;
    var num6 = document.getElementById('num6').value;

    var restar = parseInt(num5) - parseInt(num6);

    document.getElementById('resultado_resta'). value = restar;
}