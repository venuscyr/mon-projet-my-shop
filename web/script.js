// Redirection vers les pages correspondantes
document.getElementById("login-btn").addEventListener("click", function() {
    window.location.href = "index2.html";  // Remplacer par le chemin de ta page de connexion
});

document.getElementById("cart-btn").addEventListener("click", function() {
    window.location.href = "index3.html";  // Remplacer par le chemin de ta page de panier
});

// Dynamique et responsive
window.addEventListener("resize", function() {
    if (window.innerWidth < 768) {
        document.getElementById("search-input").placeholder = "Rechercher...";
    } else {
        document.getElementById("search-input").placeholder = "Search for products...";
    }
});