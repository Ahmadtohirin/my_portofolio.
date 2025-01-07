document.addEventListener("scroll", () => {
  const navbar = document.querySelector(".nav");

  if (window.scrollY >= 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Ambil elemen input dan tombol search
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const navLinks = document.querySelectorAll(".search-bar .nav-item .nav-link");

// Tambahkan event listener untuk tombol Search
searchButton.addEventListener("click", () => {
  const searchTerm = searchInput.value.toLowerCase().trim(); // Ambil teks pencarian
  let found = false;

  // Loop melalui setiap item menu
  navLinks.forEach((link) => {
    const text = link.textContent.toLowerCase(); // Ambil teks dari menu

    // Cek apakah teks pencarian cocok dengan menu
    if (text.includes(searchTerm)) {
      link.scrollIntoView({ behavior: "smooth", block: "center" }); // Scroll ke menu
      found = true;

      // Cek apakah pencarian cocok dengan menu tertentu dan gulir ke bagian tersebut
      const targetId = link.getAttribute("href").substring(1); // Ambil ID dari href
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        // Scroll ke elemen yang sesuai dengan ID
        targetSection.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    } else {
      link.style.color = ""; // Reset warna jika tidak cocok
    }
  });

  // Jika tidak ada menu yang cocok
  if (!found) {
    alert("Menu not found!");
  }
});
