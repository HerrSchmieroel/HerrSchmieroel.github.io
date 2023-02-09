let operrator
let sum

document.getElementById("+").onclick = function() {
    operrator = "+"
}

document.getElementById("-").onclick = function() {
    operrator = "-"
}

document.getElementById("*").onclick = function() {
    operrator = "*"
}

document.getElementById("/").onclick = function() {
    operrator = "/"
}





document.getElementById("Submit").onclick = function(){ // Submit Button
    let a 
    a = document.getElementById("ErsteZeile").value;
    a = Number(a);
    

    let b 
    b = document.getElementById("ZweiteZeile").value;
    b = Number(b);

    if (operrator == "+") {
        sum = (a + b);
        Finaltext = "The result is: " + sum
        document.getElementById("Final").innerHTML = Finaltext
    }
    else if (operrator == "-") {
        sum = (a - b);
        Finaltext = "The result is: " + sum
        document.getElementById("Final").innerHTML = Finaltext
    }
    else if (operrator == "*") {
        sum = (a * b);
        Finaltext = "The result is: " + sum
        document.getElementById("Final").innerHTML = Finaltext
    }
    else if (operrator == "/") {
        sum = (a / b);
        Finaltext = "The result is: " + sum
        document.getElementById("Final").innerHTML = Finaltext
    }
    else {
        alert("Error operator wasn´t found!")
    }

}

document.getElementById("Reset").onclick = function() {
    operrator = ""
    sum = ""
    document.getElementById("ErsteZeile").value = "";
    document.getElementById("ZweiteZeile").value = "";
    document.getElementById("Final").innerHTML = ""
    

}

