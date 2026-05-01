script.js
window.addEventListener("scroll", function(){

    let element=
    document.querySelectorAll(".card");

    Elements.forEach(function(el) {
        let position =
        el.getBoundingclientRect().top; 
        let screen = window.innerHeight;

        if(position < screen - 100) {
            el.classList.add("visible");
        
            
         }

         });

        });

    