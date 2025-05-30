export function darkMode() {

const $body = document.querySelector("body");
const $mode = document.getElementById("mode");
const $sun = document.getElementById("sun");
const $moon = document.getElementById("moon");

if(localStorage.getItem('isDark') == "true") {
    $body.classList.add('dark');
    $sun.classList.remove('not-visable');
    $moon.classList.add('not-visable');
} else {
    $sun.classList.add('not-visable');
    $moon.classList.remove('not-visable')
}



    $mode.addEventListener('click', () => {
        $body.classList.toggle('dark');
        $sun.classList.toggle('not-visable');
        $moon.classList.toggle('not-visable');
        
        if($body.classList.contains('dark')) {
            localStorage.setItem('isDark', true);
        } else {
            localStorage.setItem('isDark', false);
        }
    });

};
