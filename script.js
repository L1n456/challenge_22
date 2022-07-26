const menu = document.querySelector(".menu");
const btn = document.querySelector(".h-menu");

btn.addEventListener("click", ()=> {
    menu.classList.toggle("show");
});
/*
if(window.innerWidth > 375){
    menu.style.display = "flex";
}

if(window.innerWidth < 375){
    let count = 0;
    show.addEventListener('click', function onClick() {
        count ++;
        if (count %2 == 0) {
            menu.style.display = "none";
            show.style.opacity = "1";
        } else {
            menu.style.display = "flex";
            show.style.opacity = "0.5";
        } 
    }); 
}
*/


