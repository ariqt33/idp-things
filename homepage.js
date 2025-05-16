// Simulated behavior when clicking "Check Your Skin Now"

document.addEventListener("DOMContentLoaded", () => {
  const checkBtn = document.getElementById("check-skin-btn");

  checkBtn.addEventListener("click", () => {
    alert("Redirecting to image upload or detection section...");
    // In a real app: scroll to upload section or open modal
  });
});
