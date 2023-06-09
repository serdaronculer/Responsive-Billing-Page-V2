let menuToggle = document.querySelector(".toggle");
let aside = document.querySelector("aside");
let links = document.querySelectorAll("a");


for (let i = 0; i < 3; i++) {
    let spanElement = document.createElement('span');
    menuToggle.appendChild(spanElement);
}


links.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        if (item.parentElement.classList.contains('link-item')) {
            document.querySelector('.link-item a.active')?.classList.remove('active');
            e.currentTarget.classList.add('active');
        }
    });
});

menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    aside.classList.toggle("active");
})