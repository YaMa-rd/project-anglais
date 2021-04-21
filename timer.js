let secondes = 5;
let minutes = 0;

let timerContainer = document.createElement("div");
timerContainer.setAttribute("id","timer");
document.body.querySelector("main").appendChild(timerContainer);

let timer = setInterval(() => {
     secondes--;
     if (secondes <= 0) {
          if (minutes > 0) {
               secondes = 60;
               minutes--;
          }
          else {
               stopTimer();
          }
     }
     timerContainer.innerHTML = `${minutes}:${secondes}`;
}, 1000);

function stopTimer()
{
     clearInterval(timer);
     alert("time off");
     timerContainer.remove();
     calculateResult();
}