

const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    navbar.classList.toggle("active");
};


document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
    });
});


const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.onscroll = () => {

    let top = window.scrollY;

    sections.forEach(sec => {

        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {

            navLinks.forEach(link => {
                link.classList.remove("active");
            });

            const activeLink = document.querySelector('.navbar a[href="#' + id + '"]');
            if (activeLink) {
                activeLink.classList.add("active");
            }

        }

    });

};


const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});