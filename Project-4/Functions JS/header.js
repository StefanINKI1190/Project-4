let open = document.querySelector(".mobile");
let close = document.querySelector(".close");

function mOpen() {
    open.classList.add("m-open");
    close.classList.add("false");
}

function mClose() {
    open.classList.remove("m-open");
    close.classList.remove("false");
}