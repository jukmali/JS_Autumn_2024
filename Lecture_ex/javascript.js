console.log("Javascript is linked");


function firstFunction( number) {
    console.log("This is the first function " + number);
    document.getElementById('demo').innerHTML = number;
}

function mySecondFunction(number) {
    console.log("This is the second function");
    return number + 1;
}

function buttonFunction() {
    console.log("This is the button function");
}  

function showXY(event) {
    var x = event.clientX;
    var y = event.clientY;
    var coords = "X coords: " + x + ",<br> Y coords: " + y;
    document.getElementById('coordinates').innerHTML = coords;
}