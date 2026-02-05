// ============================
// WISHLIST – LOCAL STORAGE
// ============================

function getWishlist() {
    return JSON.parse(localStorage.getItem("wishlist")) || [];
}

function saveWishlist(data) {
    localStorage.setItem("wishlist", JSON.stringify(data));
}

document.addEventListener("click", function (e) {
    const btn = e.target.closest(".wishlist-btn");
    if (!btn) return;

    const card = btn.closest("[data-id]");
    if (!card) return;

    const id = String(card.dataset.id);
    const title = card.querySelector("h3")?.innerText.trim();
    const img = card.querySelector("img")?.getAttribute("src");

    if (!id || !title || !img) return;

    let wishlist = getWishlist();
    const index = wishlist.findIndex(item => String(item.id) === id);

    if (index === -1) {
        wishlist.push({ id, title, img });
        btn.classList.add("active");
    } else {
        wishlist.splice(index, 1);
        btn.classList.remove("active");
    }

    saveWishlist(wishlist);
});

window.addEventListener("DOMContentLoaded", function () {
    const wishlist = getWishlist();

    document.querySelectorAll("[data-id]").forEach(card => {
        const id = String(card.dataset.id);
        const btn = card.querySelector(".wishlist-btn");
        if (!btn) return;

        if (wishlist.some(item => String(item.id) === id)) {
            btn.classList.add("active");
        }
    });
});
