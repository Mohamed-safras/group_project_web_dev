const nav_links = document.querySelector("#nav_links");
const nav_link = nav_links.querySelectorAll(".nav_link");
nav_links.addEventListener("click", (e) => {
  const target = e.target.closest(".nav_link");

  if (!target) return;

  nav_link.forEach((item) => {
    item.classList.remove("active");
  });

  target.classList.add("active");
});
