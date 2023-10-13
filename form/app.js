function showModal(){
    document.querySelector('.overlay').classList.add('showoverlay');
    document.querySelector('.loginform').classList.add('showloginform');
}

var btnlogin = document.querySelector('.btn-login');//button
btnlogin.addEventListener("click", showModal);//button ; click

function closeModal(){
    document.querySelector('.overlay').classList.remove('showoverlay');
    document.querySelector('.loginform').classList.remove('showloginform');
    
}
var c = document.querySelector('span');//button
c.addEventListener("click", closeModal);//button ; click