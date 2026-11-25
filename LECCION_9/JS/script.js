let navbar = document.querySelector('nav');
document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
};
let search = document('.search-form');
document('.search-form').onclick = () => {
    search.classList.toggle('active');
}