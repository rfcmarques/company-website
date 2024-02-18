function userScroll() {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            console.log('aqui')
            navbar.classList.add('navbar-sticky');
        } else {
            navbar.classList.remove('navbar-sticky');
        }
    })
}

document.addEventListener('DOMContentLoaded', userScroll);