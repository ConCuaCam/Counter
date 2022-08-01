const count = document.querySelector(".count");
const buttons = document.querySelector(".buttons")
buttons.addEventListener("click", (e) =>{
  if(e.target.classList.contains("increase")) {
    count.innerHTML++;
  }
  if(e.target.classList.contains("decrease")) {
    count.innerHTML--;
  }
  if(e.target.classList.contains("reset")) {
    count.innerHTML = 0;
  }
  
  if(count.innerHTML > 0) {
    count.style.color = "green";
  }
  if(count.innerHTML < 0 ) {
    count.style.color = "red"
  }
  if(count.innerHTML == 0) {
    count.style.color = "#222";
  }
})