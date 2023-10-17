const accordionArray = document.getElementsByClassName("accordion-wrapper");

for (i = 0; i < accordionArray.length; i++) {
  accordionArray[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}
