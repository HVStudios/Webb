function validate() {
    var namnyeet = document.forms["datForm"]["namn"].value;
    var nummeryeet = document.forms["datForm"]["nummer"].value;
    var mailyeet = document.forms["datForm"]["mail"].value;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (namnyeet == "") {
      document.getElementById("felnamn").innerHTML = "Vänligen fyll i ditt namn";
    } else if (isNaN(namnyeet)) {
        document.getElementById("felnamn").innerHTML = "";
    } else {
        document.getElementById("felnamn").innerHTML = "Vänligen använd endast bokstäver";
    }
    if (nummeryeet == "") {
        document.getElementById("felnummer").innerHTML = "Vänligen skriv in ditt telefonnummer";
    } else if (isNaN(nummeryeet)) {
        document.getElementById("felnummer").innerHTML = "Vänligen använd endast siffror";
    } else {
        document.getElementById("felnummer").innerHTML = "";
    }
    if (mailyeet.match(mailformat)) {
        document.getElementById("felmail").innerHTML = "";
    } else {
        document.getElementById("felmail").innerHTML = "Vänligen skriv in en korrekt mailaddress"
    }
    if (mailyeet == "") {
        document.getElementById("felmail").innerHTML = "Vänligen skriv in din epost";
        return false;
    } else {
        return true;
    }
  }