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