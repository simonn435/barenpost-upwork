// Close navbar when X is clicked
const navCloserButton = document.querySelector(".nav-closer-btn");
const navCollapse = document.querySelector(".navbar-collapse");
const closeNavHandler = () => {
  navCollapse.classList.toggle("show");
};
navCloserButton.addEventListener("click", closeNavHandler);
