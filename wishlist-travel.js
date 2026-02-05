// ============================
// WISHLIST TRAVEL – LOCAL STORAGE (THỨ 2)
// ============================

function getWishlistTravel() {
    return JSON.parse(localStorage.getItem("wishlist_travel")) || [];
}

function saveWishlistTravel(data) {
    localStorage.setItem("wishlist_travel", JSON.stringify(data));
}
document.addEventListener("click", function (e) {
    const btn = e.target.closest(".wishlist-btn1");
    if (!btn) return;

    const card = btn.closest(".product-card");
    if (!card) return;

    const id = card.closest("[data-id]")?.dataset.id;
    if (!id) return;

    let wishlist = getWishlistTravel();

    const index = wishlist.findIndex(item => item.id === id);

    if (index === -1) {
        // ➕ THÊM
        wishlist.push(getCardData(card, id));
        btn.classList.add("active");
    } else {
        // ❌ XOÁ
        wishlist.splice(index, 1);
        btn.classList.remove("active");
    }

    saveWishlistTravel(wishlist);
});
function getCardData(card, id) {
    return {
        id: id,
        title: card.querySelector(".product-title h2")?.innerText || "",
        image: card.querySelector(".image img")?.src || "",
        location: card.querySelector(".review strong")?.innerText || "",
        link: card.querySelector(".product-title")?.href || ""
    };
}
document.addEventListener("DOMContentLoaded", function () {
    const wishlist = getWishlistTravel();

    document.querySelectorAll(".product-card").forEach(card => {
        const id = card.closest("[data-id]")?.dataset.id;
        if (!id) return;

        const btn = card.querySelector(".wishlist-btn1");
        if (!btn) return;

        if (wishlist.some(item => item.id === id)) {
            btn.classList.add("active");
        }
    });
});
