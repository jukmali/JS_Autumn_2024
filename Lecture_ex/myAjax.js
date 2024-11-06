function loadXMLcd(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var xmlDoc = this.responseXML;
            var x = xmlDoc.getElementsByTagName("CD");

            var table = "<table border='1'>";
            table += "<tr><th>Artist</th><th>Title</th></tr>";

            for(var i = 0; i < x.length; i++){
                table += "<tr><td>" + x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue + "</td><td>" + x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue + "</td></tr>";
            }
            table += "</table>";
            document.getElementById("myDiv").innerHTML = table;
        }
    };
    xmlhttp.open("GET", "https://www.w3schools.com/xml/cd_catalog.xml", true);
    xmlhttp.send();
}

function loadJSONfile(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "https://www.omdbapi.com/?s=star+wars&apikey=cbbc6750", true);
    xmlhttp.send();

    xmlhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var jsonDoc = xmlhttp.responseText;
            var jsData = JSON.parse(jsonDoc);

            var table = "<table border='1'>";
            table += "<tr><th>Title</th><th>Poster</th></tr>";

            for(var i = 0; i < jsData.Search.length; i++){
                table += "<tr><td>" + jsData.Search[i].Title + "</td><td><img src='" + jsData.Search[i].Poster + "'></td></tr>";
            }
            table += "</table>";

            document.getElementById("myDiv").innerHTML = table;

           
        };
    }
}