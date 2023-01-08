document.getElementById("nav-toggle").addEventListener("click", toggleNav);

function toggleNav(): void {
document.body.dataset.nav =
    document.body.dataset.nav === "true" ? "false" : "true";
}

export {}