console.log("working");
let project_card = document.querySelectorAll('.project_card');

project_card.forEach( (pr) =>{
    pr.addEventListener('click',()=>{
        console.log("click");
        pr.setAttribute("style", "background-color: white !important; z-index: 100000000;");
    })
})