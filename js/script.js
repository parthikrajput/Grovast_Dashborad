// header sticky
window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 80);
});
// droupdown open and hide
document.addEventListener("DOMContentLoaded", () => {
  const dropdownMains = document.querySelectorAll(".dropdown-main");

  dropdownMains.forEach((dropdownMain) => {
    dropdownMain.addEventListener("click", (e) => {
      e.stopPropagation();
      const dropdownMenu = dropdownMain.nextElementSibling;
      const icon = dropdownMain.querySelector(".icon svg");

      document.querySelectorAll(".dropdown-menu.show").forEach((menu) => {
        if (menu !== dropdownMenu) {
          menu.classList.remove("show");
          const otherIcon = menu.parentElement.querySelector(".icon svg");
          if (otherIcon) {
            otherIcon.style.transform = "rotate(0deg)";
          }
        }
      });
      if (dropdownMenu.classList.contains("show")) {
        dropdownMenu.classList.remove("show");
        icon.style.transform = "rotate(0deg)";
      } else {
        dropdownMenu.classList.add("show");
        icon.style.transform = "rotate(180deg)";
      }
    });
  });
  document.addEventListener("click", () => {
    document.querySelectorAll(".dropdown-menu.show").forEach((menu) => {
      menu.classList.remove("show");
      const icon = menu.parentElement.querySelector(".icon svg");
      if (icon) {
        icon.style.transform = "rotate(0deg)";
      }
    });
  });
});
// couter
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          const target = +counter.getAttribute("data-target");
          const span = counter.querySelector("span");

          const updateCounter = () => {
            const current = +span.innerText;
            const increment = target / 200;

            if (current < target) {
              span.innerText = Math.ceil(current + increment);
              setTimeout(updateCounter, 10);
            } else {
              span.innerText = target;
            }
          };

          updateCounter();
          observer.unobserve(counter);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((counter) => {
    observer.observe(counter);
  });
});
// user login and signup animation
document.addEventListener("DOMContentLoaded", () => {
  const loginText = document.querySelector(".user-login .title-text .login");
  const loginForm = document.querySelector(".user-login form.login");
  const loginBtn = document.querySelector(".user-login label.login");
  const signupBtn = document.querySelector(".user-login label.signup");
  const signupLink = document.querySelector(".user-login form .signup-link a");
  const loginLink = document.querySelector(".user-login form .login-link a");

  signupBtn.addEventListener("click", () => {
    loginForm.style.marginLeft = "-50%";
    loginText.style.marginLeft = "-50%";
  });

  loginBtn.addEventListener("click", () => {
    loginForm.style.marginLeft = "0%";
    loginText.style.marginLeft = "0%";
  });

  signupLink.addEventListener("click", (e) => {
    e.preventDefault();
    signupBtn.click();
  });

  loginLink.addEventListener("click", (e) => {
    e.preventDefault();
    loginBtn.click();
  });
});
// side bar
document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector("header .menu");
  const sideBar = document.querySelector(".side-bar");
  const header = document.querySelector("header"); // Header element
  const dashBody = document.querySelector(".main-dashbody"); // Header element
  const menuIcon = menuButton.querySelector(".menu-icon"); // Menu SVG icon
  const closeIcon = menuButton.querySelector(".close-icon");

  menuButton.addEventListener("click", () => {
    const isActive = sideBar.classList.toggle("active"); // Toggle active class on the sidebar
    header.style.paddingLeft = isActive ? "330px" : "0px"; // Adjust header padding dynamically
    dashBody.style.paddingLeft = isActive ? "330px" : "0px"; // Adjust header padding dynamically

    // Toggle SVG icons
    if (isActive) {
      menuIcon.style.display = "none"; // Hide menu icon
      closeIcon.style.display = "block"; // Show close icon
    } else {
      menuIcon.style.display = "block"; // Show menu icon
      closeIcon.style.display = "none"; // Hide close icon
    }
  });
});
