// Navigation menu functionality
const hamburgerbtn = document.querySelector(".hamburger");
const nav_list = document.querySelector(".nav-list");
const closebtn = document.querySelector(".close");

if (hamburgerbtn && nav_list) {
  hamburgerbtn.addEventListener("click", () => {
    nav_list.classList.add("active");
  });
}

if (closebtn && nav_list) {
  closebtn.addEventListener("click", () => {
    nav_list.classList.remove("active");
  });
}

// Close menu when clicking outside (optional enhancement)
if (nav_list) {
  document.addEventListener("click", (e) => {
    if (!nav_list.contains(e.target) && !hamburgerbtn.contains(e.target) && nav_list.classList.contains("active")) {
      nav_list.classList.remove("active");
    }
  });
}

// Flash Sale Countdown Timer
const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

if (hour && minute && second) {
  const countToDate = new Date().setHours(new Date().getHours() + 24);
  let previousTimeBetweenDates;
  
  setInterval(() => {
    const currentDate = new Date();
    const timeBetweenDates = Math.ceil((countToDate - currentDate) / 1000);
    
    // Only update if time has changed
    if (timeBetweenDates !== previousTimeBetweenDates) {
      flipAllCards(timeBetweenDates);
      previousTimeBetweenDates = timeBetweenDates;
    }
    
    // Reset timer if countdown reaches zero
    if (timeBetweenDates <= 0) {
      hour.innerHTML = "0";
      minute.innerHTML = "0";
      second.innerHTML = "0";
    }
  }, 250);
  
  function flipAllCards(time) {
    if (time < 0) time = 0;
    const seconds = time % 60;
    const minutes = Math.floor(time / 60) % 60;
    const hours = Math.floor(time / 3600);
    
    if (hour) hour.innerHTML = String(hours).padStart(2, '0');
    if (minute) minute.innerHTML = String(minutes).padStart(2, '0');
    if (second) second.innerHTML = String(seconds).padStart(2, '0');
  }
}

// Counter section logic (requires jQuery)
if (typeof jQuery !== 'undefined') {
  jQuery(document).ready(function ($) {
    if ($.fn.counterUp) {
      $(".count").counterUp({
        delay: 10,
        time: 1200,
      });
    }
  });
}


