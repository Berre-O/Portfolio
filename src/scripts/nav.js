export function showNav() {
    const $nav = document.getElementById('nav');
    const $hamburger = document.getElementById('hamburger');
    const $closeNav = document.getElementById('closeNav');
    const $hamburgerSvg = document.getElementById('hamburgerSvg');

    $hamburger.addEventListener('click', () => {
        $nav.classList.toggle('mobile-hidden');
        $hamburgerSvg.classList.toggle('not-visable');
        $closeNav.classList.toggle('not-visable')
    })
}