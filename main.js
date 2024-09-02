const ratingButtons = document.querySelectorAll(".rating-button");
const submitButton = document.getElementById("submit-button");
const ratingBox = document.getElementById("one");
const thankYouBox = document.getElementById("two");
const ratingSpan = document.querySelector(".span span");

// Function to handle rating button click
ratingButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    ratingButtons.forEach((btn) => btn.classList.remove("active"));
    // Add active class to the clicked button
    button.classList.add("active");
    // Update the rating span with the selected rating
    ratingSpan.textContent = button.textContent;
  });
});

// Function to handle submit button click
submitButton.addEventListener("click", (event) => {
  if (ratingSpan.textContent === "") {
    event.preventDefault();
    alert("Please select a rating before submitting.");
  } else {
    // Change submit button style
    submitButton.classList.add("submitted");
    // Show the thank you box and hide the rating box
    thankYouBox.classList.remove("hidden");
  }
});
