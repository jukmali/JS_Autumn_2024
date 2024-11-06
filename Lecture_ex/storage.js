if(localStorage.getItem('nameList') === null) {
    var names=[];
    localStorage.setItem('nameList', JSON.stringify(names));
}

function saveData(){
    var names = JSON.parse(localStorage.getItem('nameList'));

    var firstName = document.getElementById("fname").value;
    var lastName = document.getElementById("lname").value;

    // Creat and JSON object
    var fullName = {
        fname: firstName,
        lname: lastName
    }; 
    
    // Save the object in the array
    names.push(fullName);
    localStorage.setItem('nameList', JSON.stringify(names));
    showData();
}

function showData(){
    var jsonNames = JSON.parse(localStorage.getItem('nameList'));

    var table = "<table border='1'><tr><th>Nro</th><th>First Name</th><th>Last Name</th></tr>";

    for(var i = 0; i < jsonNames.length; i++){
        table += "<tr><td>" + (i) + "</td><td>" + jsonNames[i].fname + "</td><td>" + jsonNames[i].lname + "</td></tr>";
    }

    var place = document.getElementById("storage_place");
    place.innerHTML = table;

}

function deleteData(){
    jsonNames = JSON.parse(localStorage.getItem('nameList'));

    var delNumbe = document.getElementById("delNumber").value;

    jsonNames.splice(delNumber, 1);

    localStorage.setItem('nameList', JSON.stringify(jsonNames));
    showData();

}