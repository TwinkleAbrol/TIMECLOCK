const clock = () => {
  const d = new Date();
  const date = d.toLocaleString();
  const hours = d.getHours();
  const ampm = hours >= 12 ? "PM" : "AM";
  const mins = d.getMinutes();
  const secs = d.getSeconds();
  const hour = hours % 12;

  const h1 = document.querySelector(".th");
  const greetings = document.querySelector(".greetings");
  const body = document.querySelector(".body");
  h1.innerHTML = `${hour}: ${mins} : <small>${secs} : ${ampm}</small>`;
  let bg;
  if (hours > 12 && hours < 17) {
    greetings.innerHTML = `Good Evening,Twinkle `;
    bg = `url(https://source.unsplash.com/Cjz1UAz8VBs)`;
  } else if (hours < 12) {
    greetings.innerHTML = `Good Morning,Twinkle `;
    bg = `url(https://source.unsplash.com/G_a9JhmiZFk)`;
  } else {
    greetings.innerHTML = `Good Night,Twinkle `;
    bg = `url(https://source.unsplash.com/ln5drpv_ImI)`;
  }

  body.style.background = `${bg} center/cover`;
  setTimeout(clock, 1000);
};

window.addEventListener("DOMContentLoaded", clock);
const focus = document.querySelector(".focus");
const label = document.querySelector(".label");
const labelfocus = document.querySelector(".labelfocus");

focus.addEventListener("keypress", (e) => {
  const event = e.keyCode;
  if (event == 13) {
    e.preventDefault();

    const value = e.target.value;
    if (value.length === 0) {
      alert("please type something ");
    }
  }
  label.classList.add("hide");
  labelfocus.classList.remove("hide");
});
