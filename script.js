let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = ()=> {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let sections =document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = ()=> {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top >= offset && top< offset + height){
            navlinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        };
    });
    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrolly >100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');


};
function validate(){
    var username = document.getElementById("name");
    var email = document.getElementById("email");
    var phone = document.getElementById("phone");
    var subject = document.getElementById("subject");
    if(username.value.trim()==""|| email.value.trim()==""||
    phone.value.trim()==""|| subject.value.trim()==""){
        alert("no blank values allowed");
        return false;
    }
    else{
        true;
    }
    

}
ScrollReveal({
     reset: true,
     distance:'80px',
     duration:2000,
     delay:200
    
    });
    ScrollReveal().reveal('.home-content, .heading', { origin: top });
    ScrollReveal().reveal('.home-img, .services-container, .portfoio-box, .contact form', { origin: bottom});
    ScrollReveal().reveal('.home-content h1,.about-img', { origin: left });
    ScrollReveal().reveal('.home-content p,.about-content', { origin: right });

    $("#submit-form").submit((e)=>{
        console.log("hello")
        e.preventDefault()
        $.ajax({
            url:"https://script.google.com/macros/s/AKfycbxzYgg2dH63LMXwzf3V5KUI0Pzq-owuY3MYgrlBENBuUWCYQNmZDvNgBV8SGDyUIk3a/exec",
            data:$("#submit-form").serialize(),
            method:"post",
            success:function (response){
                alert("Form submitted successfully")
                window.location.reload()
                //window.location.href="https://google.com"
            },
            error:function (err){
                alert("Something Error")

            }
        })
    })
   
  