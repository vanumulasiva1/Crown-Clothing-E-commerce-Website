// Show button when user scrolls down
const backToTopBtn = document.getElementById("button");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

// Smooth scroll to top
backToTopBtn.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

const purchaseBtn = document.querySelector(".btn.btn-primary");
purchaseBtn.addEventListener("click", (event) => {
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("form19").value.trim();

  if (!firstName || !lastName || !email) {
    event.preventDefault(); // stop redirection
    alert("Please fill in all required fields before purchase.");
  }
});

