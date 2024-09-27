// dropdown.js

fdocument
  .getElementById("navbarDropdown")
  .addEventListener("click", function (event) {
    var dropdownMenuWrapper = this.nextElementSibling;
    var isDisplayed =
      window.getComputedStyle(dropdownMenuWrapper).display !== "none";

    if (isDisplayed) {
      dropdownMenuWrapper.style.display = "none";
    } else {
      dropdownMenuWrapper.style.display = "block";
    }
  });
