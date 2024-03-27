let label = document.querySelector(".menubar");
let sm_view = document.querySelector(".sm_view");
let first_line = document.querySelector(".first_line");
let second_line = document.querySelector(".second_line");
let third_line = document.querySelector(".third_line");
let nav_items = document.querySelectorAll(".nav_items");
let body = document.body;
function cross_check() {
    first_line.style.display = "flex";
    second_line.style.transform = "rotate(0deg)";
    third_line.style.transform = "rotate(0deg)";
    third_line.classList.remove("pos_changes_cross");
    second_line.classList.remove("pos_changes_cross_2");
};


label.addEventListener("click", () => {
    sm_view.classList.toggle("show");
    if (sm_view.classList.contains("show")) {
        first_line.style.display = "none";
        second_line.style.transform = "rotate(135deg)";
        third_line.style.transform = "rotate(-135deg)";
        third_line.classList.add("pos_changes_cross");
        second_line.classList.add("pos_changes_cross_2");
        body.style.overflow = "hidden";
    } else {
        body.style.overflow = "auto";
        cross_check();
    }

    nav_items.forEach(element => {
        element.addEventListener("click", () => {
            if (sm_view.classList.contains("show")) {
                sm_view.classList.remove("show");
            } else {
                cross_check();
                body.style.overflow = "auto";
            }
        });
    });
});

let tabs = document.querySelectorAll(".text_content");

tabs.forEach(other => {
    other.addEventListener("mouseover", () => {
        other.classList.add("effect");
    });
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            let text = window.getComputedStyle(tab).textDecoration;
            if (text === "none") {
                tab.style.textDecoration = "underline";
            } else {
                tab.style.textDecoration = "none";
            }
        });
    });
});