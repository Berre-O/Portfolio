
export function headerScroll() {
  let lastKnownScrollPosition = 0;
  let ticking = false;
  
  const $header = document.querySelector(".header")

function doSomething(scrollPos) {
    if (scrollPos > 0) {
        $header.classList.add("header--scrolled")
    } else {
        $header.classList.remove("header--scrolled")
    }
}

document.addEventListener("scroll", (event) => {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(() => {
      doSomething(lastKnownScrollPosition);
      ticking = false;
    });

    ticking = true;
  }
});
}