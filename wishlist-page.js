document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".wishlist-list");
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    if (!container) return;

    if (wishlist.length === 0) {
        container.innerHTML = "<p>Chưa có món ăn nào.</p>";
        return;
    }

    wishlist.forEach((item, index) => {
        const div = document.createElement("div");

        div.innerHTML = `
            <img src="${item.img}" width="200">
            <h3>${item.title}</h3>
            <button data-index="${index}">Xóa</button>
        `;

        container.appendChild(div);
    });

    container.addEventListener("click", function (e) {
        if (e.target.tagName !== "BUTTON") return;

        const index = e.target.dataset.index;
        wishlist.splice(index, 1);
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
        location.reload();
    });
});








