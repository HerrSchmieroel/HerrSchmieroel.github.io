let timer = 59;
let click = 0;
const Restart = document.getElementById("Yes");
const Rickroll = document.getElementById("No");
let Frage = document.getElementById("nochmalspielentext");
Restart.style.display = "none";
Rickroll.style.display = "none";

document.getElementById("Clickfield").onclick = function() {
  if (timer == 59) {
    const intervalId = setInterval(() => {
      document.getElementById("timer").innerHTML = timer;
      timer--;

      if (timer < 0) {
        clearInterval(intervalId);
        let Button = document.getElementById("Clickfield");
        Button.setAttribute("disabled", true);
        let fragetext = "Your score is " + click + " do want to play again?";
        document.getElementById("nochmalspielentext").innerHTML = fragetext;
        Restart.style.display = "";
        Rickroll.style.display = "";
      }
    }, 1000);
  }

  click++;
  document.getElementById("Yes").onclick = function() {
    window.location.href = "index.html";
  };
  
  document.getElementById("No").onclick = function() {
    window.location.href = "https://youtu.be/dQw4w9WgXcQ";
  };
  
  document.getElementById("score").innerHTML = click;
};
