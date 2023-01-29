let count = 0;

function countUp() {
    count++;
    document.getElementById("seconds").innerHTML = count;
}

setInterval(countUp, 1000);