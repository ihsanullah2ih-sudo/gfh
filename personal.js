let menu =document.querySelector("#menu");
let navbar =document.querySelector(".navbar");

menu.onclick = () => {
    // menu.classList.toggle('fa-bars');
    navbar.classList.toggle("active")
}
window.onscroll = () => {
        // menu.classList.remove('fa-bars');
    navbar.classList.remove("active")
}
   const typed = new Typed('.multiple', {
      strings: ['Frontend Developer'],
      typeSpeed: 80,
      typeSpeed:80,
      backSpeed:80,
      backDelay:1200,
      loop:true
    });