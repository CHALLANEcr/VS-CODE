let navbar = document.querySelector('nav');
document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
};
let searchForm = document.querySelector('header .search-form');
document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active')
}