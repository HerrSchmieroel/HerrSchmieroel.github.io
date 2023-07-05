let answer
let items
let randomIndex
let randomItem
var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");

let button = document.getElementById("retry");
button.style.display = 'none';


function computer() {
    items = ['Rock' , 'Paper' , 'Scissors'];
    randomIndex = Math.floor(Math.random() * items.length);
    randomItem = items[randomIndex];
}



document.getElementById("rock").onclick = function() {
    answer = "Rock"
    computer();
    document.getElementById("rock_paper_scissors").innerHTML = randomItem
    if (answer == randomItem) {
        document.getElementById("result").innerHTML = "Tie"
    }
    else if (randomItem == "Paper") {
        document.getElementById("result").innerHTML = "You lost!"
    }
    else if (randomItem == "Scissors") {
        document.getElementById("result").innerHTML = "You won!"
    }
    button.style.display = '';
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;

    

}

document.getElementById("paper").onclick = function() {
    answer = "Paper"
    computer();
    document.getElementById("rock_paper_scissors").innerHTML = randomItem
    if (answer == randomItem) {
        document.getElementById("result").innerHTML = "Tie"
    }
    else if (randomItem == "Scissors") {
        document.getElementById("result").innerHTML = "You lost!"
    }
    else if (randomItem == "Rock") {
        document.getElementById("result").innerHTML = "You won!"
    }
    button.style.display = '';
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;

}

document.getElementById("scissors").onclick = function() {
    answer = "Scissors"
    computer();
    document.getElementById("rock_paper_scissors").innerHTML = randomItem
    if (answer == randomItem) {
        document.getElementById("result").innerHTML = "Tie"
    }
    else if (randomItem == "Rock") {
        document.getElementById("result").innerHTML = "You lost!"
    }
    else if (randomItem == "Paper") {
        document.getElementById("result").innerHTML = "You won!"
    }
    button.style.display = '';
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;

}

document.getElementById("retry").onclick = function() {
    answer = ""
    document.getElementById("result").innerHTML = ""
    button.style.display = 'none';
    document.getElementById("rock_paper_scissors").innerHTML = ""
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;


}
