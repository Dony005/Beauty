// Навигация: выделяем активную ссылку
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".nav-link");
    const current = window.location.pathname;
  
    links.forEach(link => {
      if (link.getAttribute("href") === current.split("/").pop()) {
        link.classList.add("active");
      }
    });
  });
  