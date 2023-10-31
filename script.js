function sumar(){
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;

    var sumar = parseInt(num1) + parseInt(num2);

    document.getElementById('resultado'). value = sumar;
}