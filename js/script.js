// MENU HAMB

const btnMobile = document.getElementById('btn-mbl');

function toggleMenu(event){
    if(event.type ==='touchstart') event.preventDefault();
    const btnMobile = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if(active) { 
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    }else{
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
}

//MENU ROL

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);


window.addEventListener("scroll", function(){
    let header = document.querySelector('.menu-bg')
    header.classList.toggle('rolagem', window.scrollY > 0)
})


// MODAL

function abrirM(){
    const modal = document.getElementById('janela-modal');
    modal.classList.add('abrir');

    modal.addEventListener('click', (e) => {
        if(e.target.id == 'fechar' || e.target.id =='janela-modal'){
            modal.classList.remove('abrir');
        }
    });

}

// NAV ACTIVE
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('header nav a[href*='+ id + ']').classList.add('active');
                })
        }
    })
}