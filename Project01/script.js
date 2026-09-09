const buttons = document.querySelectorAll(".button") // Finds all HTML elements that have the class button
const body= document.querySelector("body")

buttons.forEach( function (btn){ // Takes the list of buttons and loops through every single button one by one.

    btn.addEventListener('click' ,function(e){
        if(e.target.id === 'grey'){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id === 'white'){
            body.style.backgroundColor=e.target.id;
        }
        
    })
});