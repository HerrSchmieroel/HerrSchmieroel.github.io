let count = 0;

document.getElementById("-").onclick = function () {
    count-=1;
    document.getElementById("counter").innerHTML = count;

}


document.getElementById("+").onclick = function () {
    count+=1;
    document.getElementById("counter").innerHTML = count;
}



document.getElementById("reset").onclick = function() {
    count=0;
    document.getElementById("counter").innerHTML = count;
}
