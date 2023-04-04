const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const name = document.querySelector('.name');
const icon = document.querySelector('.icon');
const links = document.querySelectorAll('a');

const letters = "QWERTYUIOPASDFGHJKLZXCVBMN";


toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = 'black';
        body.style.color = 'white';
        name.style.color = 'white';
        links.forEach(link => link.style.color = 'white');
        body.style.transition = '1s';
        
    }else{
        body.style.background = 'white';
        body.style.color = 'black';
        name.style.color = 'black';
        links.forEach(link => link.style.color = 'black');
        body.style.transition = '1s';
    }
});


