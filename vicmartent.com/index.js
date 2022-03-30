const bar = document.querySelector(".hamburger")
const nav = document.querySelector(".navlinks")
const mobileNav = document.querySelector(".mobile_navigation")
const mobileLinks = document.querySelector(".mobile_links")
const openForm = document.querySelector(".open_form")
const closeForm = document.querySelector(".closeform")
const forms = document.querySelector(".form")
const formname = document.querySelector(".name")
const email = document.querySelector(".email")
const textArea = document.querySelector(".textarea")
const submitForm = document.querySelector(".submit") 
const formTable = document.querySelector(".form_table")

bar.addEventListener("click", () =>{
    nav.classList.toggle("flip")
    mobileNav.classList.toggle("flip")
    mobileLinks.classList.toggle("flip")

})
openForm.addEventListener("click", ()=>{
    forms.classList.add("flip")
    mobileNav.classList.add("flip")
    
})
closeForm.addEventListener("click", () =>{
    forms.classList.remove("flip")
    mobileNav.classList.remove("flip")
})



/************************SCROLL MAGIC*/

let controller1 = new ScrollMagic.Controller()
let scene1 = new ScrollMagic.Scene({
  triggerElement: ".about",
  triggerHook: 0.85
})
.setClassToggle(".about", "show").addTo(controller1)

let controller2 = new ScrollMagic.Controller()
let scene2 = new ScrollMagic.Scene({
  triggerElement: ".value_statement",
  triggerHook: 0.85
})
.setClassToggle(".value_statement", "show").addTo(controller2)

let controller3 = new ScrollMagic.Controller()
let scene3 = new ScrollMagic.Scene({
  triggerElement: ".features",
  triggerHook: 0.85
})
.setClassToggle(".features", "show").addTo(controller3)

let controller4 = new ScrollMagic.Controller()
let scene4 = new ScrollMagic.Scene({
  triggerElement: ".contact",
  triggerHook: 0.85
})
.setClassToggle(".contact", "show").addTo(controller4)
/********
    submitForm.addEventListener("click",()=>{
        if (!email.value == "" && !formname.value == "" && textArea.value) {
            submitMessage.innerHTML = "<p>Thank you, your message is been sent</p>"
            formname.value = ""
            email.value = ""
            textArea.value = ""
        }
        else{
            submitMessage.innerHTML = "<p class='submit_messages'>Please fill all necessary field in the form</p>"
        }
    })
 **/
    var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("my-form-status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
            alert("Thanks for your submission!")
          status.innerHTML = "Thanks for your submission!";

          form.reset()
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
            } else {
                alert("Oops! There was a problem submitting your form")
              status.innerHTML = "Oops! There was a problem submitting your form"
            }
          })
        }
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
      });
    }
    form.addEventListener("submit", handleSubmit)

