// variable
const img = document.querySelectorAll(".skill_show_img");
const hello_string = document.querySelector(".about_real");
const teach_string = document.querySelector(".skill_title_real");
const education_string = document.querySelector(".edu_title_real");
const certi = document.querySelector(".cert_head_real");
const proj = document.querySelector(".achive_title_real");
const  observer = new IntersectionObserver(entries =>{
      entries.forEach(entry=>{
            entry.target.classList.toggle("appear" , entry.isIntersecting)
            if(entry.isIntersecting) observer.unobserve(entry.target);
      })
},{
      threshold: 1,
})

const  cardObserver = new IntersectionObserver(entries =>{
      entries.forEach(entry=>{
            entry.target.classList.toggle("show" , entry.isIntersecting)
      })
},{
      threshold: 1,
})

cardObserver.observe(document.querySelector("#project_card1"));
cardObserver.observe(document.querySelector("#project_card2"));
cardObserver.observe(document.querySelector("#project_card3"));
cardObserver.observe(document.querySelector("#project_card4"));
cardObserver.observe(document.querySelector("#project_card5"));
observer.observe(hello_string);
observer.observe(teach_string);
observer.observe(education_string);
observer.observe(certi);
observer.observe(proj);

img.forEach((i)=>{
      observer.observe(i);
})