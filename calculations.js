var calculation = 0;

var number1 = 0;
var number2 = 0;


function addNum()
{
    number1 = parseInt(document.getElementById("num1").value);
    number2 = parseInt(document.getElementById("num2").value);

    calculation = number1 + number2;
    document.getElementById("answer").innerHTML = "Answer: " + calculation;
}

function subNum()
{
    number1 = parseInt(document.getElementById("num1").value);
    number2 = parseInt(document.getElementById("num2").value);

    calculation = number1 - number2;
    document.getElementById("answer").innerHTML = "Answer: " + calculation;
}

function divNum()
{
    number1 = parseInt(document.getElementById("num1").value);
    number2 = parseInt(document.getElementById("num2").value);

    calculation = number1 / number2;
    document.getElementById("answer").innerHTML = "Answer: " + calculation;
}

function mulNum()
{
    number1 = parseInt(document.getElementById("num1").value);
    number2 = parseInt(document.getElementById("num2").value);

    calculation = number1 * number2;
    document.getElementById("answer").innerHTML = "Answer: " + calculation;
}

function clearNum()
{
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('answer').innerHTML = 'Answer: ';
}
