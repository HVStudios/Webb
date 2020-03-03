var x = 0;
var tal = new Array();

function adda()
{
 tal[x] = document.getElementById("skrivning").value;
 x++;
 document.getElementById("skrivning").value = "";
}

function visa()
{  
    tal.sort(function(a, b){return b-a});
    document.getElementById("biggestboi").innerHTML = "Ditt största tal är " + tal[0];
    document.getElementById("smallestboi").innerHTML = "Ditt minsta tal är " + tal[tal.length - 1];
}