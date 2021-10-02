window.addEventListener("load", function() {
    const closeButton = document.getElementById("close");
    closeButton.style = "color: blue;";
    closeButton.innerHTML = "<span>X</span><span>Close buton</span>";
    closeButton.textContent = "X Close Button";

    const closeButtonHandler = function() {
        const modalContainer = document.querySelector(".parent");
        closeButton.removeEventListener("click", closeButtonHandler);
        modalContainer.remove();
    };

    closeButton.addEventListener("click", closeButtonHandler);

    const openModal = document.getElementById("open-modal");
    openModal.addEventListener("click", () => {
        const modal = document.createElement("div");
        modal.setAttribute("class", "parent");

        modal.innerHTML = '<div class="child">Turinys <span id="close">X</span></div>';
        document.body.appendChild(modal);
    });
});
