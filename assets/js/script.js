var navbar = document.getElementById("navbar")
var content = document.getElementById("content")

var btnToggle = document.querySelector("#btn-toggle")
var navToggle = document.querySelector("#nav-toggle")

window.onscroll = function(){
    if(window.pageYOffset > navbar.offsetTop){
        navbar.classList.add("nav-fixed");
        navbar.classList.remove("container-md");
      }else{
        navbar.classList.remove("nav-fixed");
        navbar.classList.add("container-md");
    }
}
const icon = document.querySelector("#rotate")
btnToggle.addEventListener('click', () => {
  
  const visibility = navToggle.getAttribute("data-visible")
  
  if (visibility === "false"){
    icon.style.transition = "linear .2s"
    icon.style.transform = "rotate(90deg)"
    navToggle.setAttribute("data-visible", true)
  }else if(visibility === "true"){
    navToggle.setAttribute('data-visible', false)
    icon.style.transform = "unset"
  }
  
})


function myFunction(x) {
    if (x.matches) { // If media query matches
      navToggle.style.display = "none"
    }else{
      navToggle.style.display = "block"
    }
  }
  
  var x = window.matchMedia("(min-width: 769px)")
  myFunction(x)
  x.addListener(myFunction)

