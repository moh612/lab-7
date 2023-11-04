document.getElementById("colorForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Get the color input value from the form and convert it to lowercase
  var color = document.getElementById("colorInput").value.toLowerCase();

  // Change the text color of the header
  document.getElementById("header").style.color = color;
});