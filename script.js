function validateForm() {
    const rating = document.getElementById("rating").value;
    const message = document.getElementById("message");
  
    if (rating < 1 || rating > 5) {
      message.textContent = "Rating must be between 1 and 5.";
      message.style.color = "red";
      return false;
    }
  
    message.textContent = "Thank you for your feedback!";
    message.style.color = "green";
    return false; 
  }
  