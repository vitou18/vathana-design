// playVido course
const videoCourse = document.getElementById("courseVideo");
const playBtnCourse = document.getElementById("playCourse");

playBtnCourse.addEventListener("click", () => {
  playBtnCourse.style.display = "none";
  videoCourse.play();
  videoCourse.setAttribute("controls", "true");
});

// Accordion Card Toggle
const accordionItems = document.querySelectorAll(".accordion__card");

accordionItems.forEach((item) => {
  const content = item.querySelector(".accordion__content");
  const button = item.querySelector(".accordion__button");

  item.addEventListener("click", () => {
    const isActive = content.classList.contains("active");

    // Toggle current one
    if (!isActive) {
      content.classList.add("active");
      button.classList.add("active");
      content.style.maxHeight = content.scrollHeight + "px";
    } else {
      content.classList.remove("active");
      button.classList.remove("active");
      content.style.maxHeight = null;
    }
  });
});

// playVido Curios
const videoCurios = document.getElementById("curiosVideo");
const playBtnCurios = document.getElementById("playCurios");

playBtnCurios.addEventListener("click", () => {
  playBtnCurios.style.display = "none";
  videoCurios.play();
  videoCurios.setAttribute("controls", "true");
});
