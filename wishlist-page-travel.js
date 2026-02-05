// ============================
// WISHLIST TRAVEL – PAGE
// ============================

function getWishlistTravel() {
    return JSON.parse(localStorage.getItem("wishlist_travel")) || [];
}

function saveWishlistTravel(data) {
    localStorage.setItem("wishlist_travel", JSON.stringify(data));
}

document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("wishlistTravelContainer");
    const emptyText = document.querySelector(".wishlist-empty");
    const wishlist = getWishlistTravel();

    if (!wishlist.length) {
        emptyText.style.display = "block";
        return;
    }

    wishlist.forEach(item => {
        container.insertAdjacentHTML("beforeend", renderCard(item));
    });
});

// ============================
// TEMPLATE CARD (GIỐNG INDEX)
// ============================

function renderCard(item) {
    return `
    <div class="col-lg-4 col-md-6 col-12" data-id="${item.id}">
      <div class="product-card radius16 hover-on-image wishlist-travel-card">
        <div class="image">
          <img src="${item.image}" loading="lazy" alt="${item.title}">
          <div class="review text text-14">
            <strong>${item.location}</strong>
          </div>

          <button class="wishlist-remove-btn" onclick="removeTravel('${item.id}')">
            ❌
          </button>
        </div>

        <div class="content">
          <a href="${item.link}" class="no-underline product-title">
            <h2 class="heading text-24">${item.title}</h2>
          </a>

          <div class="price-booking-wrap">
            <a href="${item.link}" class="button button--primary button--slim">
              Xem ngay
            </a>
          </div>
        </div>
      </div>
    </div>
    `;
}

// ============================
// XOÁ KHỎI YÊU THÍCH
// ============================

function removeTravel(id) {
    let wishlist = getWishlistTravel();
    wishlist = wishlist.filter(item => item.id !== id);
    saveWishlistTravel(wishlist);
    location.reload();
}
