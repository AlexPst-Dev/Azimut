// Redirection to home page
function goToAccueil() {
    window.location.href='../../index.html';
}

// Functions for Hamburger Menus on mobile
function showHamburgerMenus(){
    document.getElementsByClassName('hambMenusList')[0].style.display = 'block'
}
function hideHamburgerMenus(){
    document.getElementsByClassName('hambMenusList')[0].style.display = 'none'
}