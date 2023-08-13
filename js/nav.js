window.addEventListener("scroll", function(){
    var navbar = this.document.querySelector("nav")
    navbar.classList.toggle("navsticky", window.scrollY > 0)
})
function validate(){
  var email=document.getElementById("mail").ariaValueMax;
  var reg = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;
  var result= reg.test(email);
  if(result==false){
      alert("sorry invalid email-id");
      return false;
  }
  else{
      return true;
  }

}