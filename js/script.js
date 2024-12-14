// window.addEventListener("scroll", function () {
//   var header = document.querySelector("header");
//   header.classList.toggle("sticky", window.scrollY > 130);
// });

// document.addEventListener("DOMContentLoaded", () => {
//   const dropdownMains = document.querySelectorAll(".user-profile.dropdoen-main");

//   dropdownMains.forEach((dropdownMain) => {
//     dropdownMain.addEventListener("click", (e) => {
//       e.stopPropagation();
//       const dropdownMenu = dropdownMain.nextElementSibling;

//       if (dropdownMenu.classList.contains("show")) {
//         dropdownMenu.classList.remove("show");
//       } else {
//         document.querySelectorAll(".dropdown-menu.show").forEach((menu) => {
//           menu.classList.remove("show");
//         });
//         dropdownMenu.classList.add("show");
//       }
//     });
//   });

//   document.addEventListener("click", () => {
//     document.querySelectorAll(".dropdown-menu.show").forEach((menu) => {
//       menu.classList.remove("show");
//     });
//   });
// });

// document.addEventListener("DOMContentLoaded", () => {
//   const dropdownMains = document.querySelectorAll(".user .dropdown-main");

//   dropdownMains.forEach((dropdownMain) => {
//     dropdownMain.addEventListener("click", (e) => {
//       e.stopPropagation();

//       const dropdownMenu = dropdownMain.nextElementSibling;
//       const icon = dropdownMain.querySelector(".icon svg");

//       document.querySelectorAll(".dropdown-menu.show").forEach((menu) => {
//         if (menu !== dropdownMenu) {
//           menu.classList.remove("show");
//           const otherIcon = menu.parentElement.querySelector(".icon svg");
//           if (otherIcon) {
//             otherIcon.style.transform = "rotate(0deg)";
//           }
//         }
//       });

//       if (dropdownMenu.classList.contains("show")) {
//         dropdownMenu.classList.remove("show");
//         icon.style.transform = "rotate(0deg)";
//       } else {
//         dropdownMenu.classList.add("show");
//         icon.style.transform = "rotate(180deg)";
//       }
//     });
//   });

//   document.addEventListener("click", () => {
//     document.querySelectorAll(".dropdown-menu.show").forEach((menu) => {
//       menu.classList.remove("show");
//       const icon = menu.parentElement.querySelector(".icon svg");
//       if (icon) {
//         icon.style.transform = "rotate(0deg)";
//       }
//     });
//   });
// });

// document.addEventListener("DOMContentLoaded", () => {
//   const counters = document.querySelectorAll(".counter");

//   const observer = new IntersectionObserver((entries, observer) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         const counter = entry.target;
//         const target = +counter.getAttribute("data-target");
//         const span = counter.querySelector("span");

//         const updateCounter = () => {
//           const current = +span.innerText;
//           const increment = target / 200;

//           if (current < target) {
//             span.innerText = Math.ceil(current + increment);
//             setTimeout(updateCounter, 10);
//           } else {
//             span.innerText = target;
//           }
//         };

//         updateCounter();
//         observer.unobserve(counter);
//       }
//     });
//   }, { threshold: 0.5 });

//   counters.forEach(counter => {
//     observer.observe(counter);
//   });
// });

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
