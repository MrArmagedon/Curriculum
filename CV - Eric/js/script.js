
function canviaNom(){
    let nombre = document.getElementById("name").value;
    document.getElementById("nom").innerHTML = nombre;
}

function canviaColor(){
    let color = document.getElementById("color").value;
    document.body.style.color = color;
}

function canviaFons(){
    let fons = document.getElementById("fons").value;
    document.body.style.backgroundColor = fons;
}

function canviaArxiu(){
    let imatge = document.getElementById("image").value;
    document.getElementById("img").src = imatge;
}