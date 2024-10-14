console.log("Javascript is linked");

var comment = document.getElementById('myFieldset');
comment.style.display="none";


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

function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x== null || x == "" || x.length < 3) {
        document.forms.myForm.fname.style.borderColor = "red";
        document.getElementById('feedback').innerHTML = "<b>*Fill in proplery</b>";
        return false;
    }
}

function showExtraFields() {
    var y = document.getElementById('myFieldset');
    y.style.display = "block";
}