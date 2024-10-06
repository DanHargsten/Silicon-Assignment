var acc = document.getElementsByClassName("btn-circle");
var i;

for (i = 0; i < acc.length; i++) {
   acc[i].addEventListener("click", function () {
      // Toggle active class for the question parent
      this.parentElement.classList.toggle("active");

      // Toggle answer visibility
      var answer = this.parentElement.nextElementSibling;
      if (answer.style.display === "block") {
         answer.style.display = "none";
      } else {
         answer.style.display = "block";
      }
   });
}
