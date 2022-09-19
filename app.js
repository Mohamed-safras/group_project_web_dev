// const nav_links = document.querySelector("#nav_links");
// const nav_link = nav_links.querySelectorAll(".nav_link");
// const nav_bar = document.querySelector(".nav_bar");

// class App {
//   constructor() {
//     nav_links.addEventListener("click", this._changeTab);
//     window.addEventListener("scroll", this._toggleNavBar);
//   }

//   _changeTab(e) {
//     const target = e.target.closest(".nav_link");

//     if (!target) return;

//     nav_link.forEach((item) => {
//       item.classList.remove("active");
//     });

//     target.classList.add("active");
//   }
//   _toggleNavBar() {
//     if (window.pageYOffset > nav_bar.offsetHeight) {
//       nav_bar.classList.add("sticky");
//     } else {
//       nav_bar.classList.remove("sticky");
//     }
//   }
// }

// const app = new App();
