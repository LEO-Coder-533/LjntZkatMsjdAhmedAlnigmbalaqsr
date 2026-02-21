const checkbox = document.getElementById("togglemenu");
const container = document.querySelector(".linkdiv");
const links = document.querySelectorAll(".linkdiv a");
checkbox.addEventListener("change", function () {
  if (checkbox.checked) {
    container.classList.remove("hide", "hide1");
    container.classList.add("show"); // نفس عرض الكونتينر
  } else {
    container.classList.add("hide1");
    container.classList.remove("show");
  }
});

links.forEach(link => {
  link.addEventListener("click", () => {

    if (window.matchMedia("(max-width: 700px)").matches) {
      container.classList.add("hide1");
      container.classList.remove("show");
      checkbox.checked = false;
    }

  });
});