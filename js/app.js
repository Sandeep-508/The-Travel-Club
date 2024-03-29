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
                cross_check();
                body.style.overflow = "auto";
            }
        });
    });
});

let tabs = document.querySelectorAll(".text_content");
let nav = document.querySelector(".text_content");
nav.classList.add("td_underline");
tabs.forEach(other => {
    other.addEventListener("click", () => {
        tabs.forEach(otherelement => {
            if (otherelement !== other) {
                otherelement.classList.remove("td_underline");
            }
        });
        other.classList.add("td_underline");
    });
});

let accord_item = document.querySelectorAll(".accord_item");
let text_first = document.querySelector(".text_disp");
let svg_first = document.querySelector(".svg_icon");
text_first.style.display = "block";
svg_first.style.transform = "rotate(180deg)"

accord_item.forEach(other => {
    let btn = other.querySelector(".click_btn");
    let svg = other.querySelector(".svg_icon");
    let text_disp = other.querySelector(".text_disp");
    btn.addEventListener("click", () => {
        accord_item.forEach(element => {
            if (element !== other) {
                let text = element.querySelector(".text_disp");
                let svg_icon = element.querySelector(".svg_icon");
                text.style.display = "none";
                svg_icon.style.transform = "rotate(0deg)";
            }
        });
        let disp_prop = window.getComputedStyle(text_disp).display;
        if (disp_prop === "none") {
            text_disp.style.display = "block";
            svg.style.transform = "rotate(180deg)";
        } else {
            text_disp.style.display = "none";
            svg.style.transform = "rotate(0deg)";
        }
    });
});

let scroll_to_top = document.querySelector(".scroll_to_top");
let scrollPt = 200;

window.addEventListener("scroll", () => {
    if (window.scrollY > scrollPt) {
        scroll_to_top.style.display = "block";
    } else {
        scroll_to_top.style.display = "none";
    }
});
scroll_to_top.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

gsap.from(".image_change", {
    rotate: 360,
    repeat: -1,
    duration: 10,
});
gsap.from(".scroll_to_top", {
    rotate: 360,
    repeat: -1,
    duration: 1,
    y: 20,
    yoyo: true,
});
