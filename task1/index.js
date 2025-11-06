let followbtn = document.getElementById("followbtn")


followbtn.addEventListener("click", () => {
    if (followbtn.innerHTML === "Follow") {
    followbtn.innerHTML = "Following";
    followbtn.style.backgroundColor = "#4CAF50";
    followbtn.style.color = "white";
  } else {
    followbtn.innerHTML = "Follow";
    followbtn.style.backgroundColor = "rgba(183, 182, 182, 0.841)";
    followbtn.style.color = "black";
  }
})


let darkmodebtn = document.getElementById("darkmodebtn");

darkmodebtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    darkmodebtn.innerHTML = "Light Mode";
  } else {
    darkmodebtn.innerHTML = "Dark Mode";
  }
});

