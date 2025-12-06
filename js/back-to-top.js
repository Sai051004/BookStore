// Back to top button functionality
const backbtn = document.querySelector(".back-to-top");

if (backbtn) {
  // Show/hide button based on scroll position
  const scrollBtnDisplay = function () {
    if (window.scrollY > 100) {
      backbtn.classList.add("show");
    } else {
      backbtn.classList.remove("show");
    }
  };
  
  // Smooth scroll to top
  const scrollToTop = function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  // Add event listeners
  window.addEventListener("scroll", scrollBtnDisplay);
  backbtn.addEventListener("click", scrollToTop);
  
  // Initial check on page load
  scrollBtnDisplay();
}