window.addEventListener('scroll', ()=>{
    document.querySelector('nav').classList.toggle('windowScroll', window.scrollY > 0)
})

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', ()=>{
        faq.classList.toggle('open');

        const icon = faq.querySelector('.faqIcon i');
        if(icon.className === 'fa-solid fa-plus') {
            icon.className = "fa-solid fa-minus"
        } else {
            icon.className = "fa-solid fa-plus";
        }
    })
})

const menu = document.querySelector(".navMenu");
const menuBtn = document.querySelector("#openMenu");
const closeBtn = document.querySelector("#closeMenu");

menuBtn.addEventListener('click', ()=>{
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

const closeNav = ()=>{
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click',closeNav)