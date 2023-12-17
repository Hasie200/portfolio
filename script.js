

// ABOUT ME TAB
let tabname = document.getElementsByClassName('tab-names');
let content = document.getElementsByClassName('tab-contents');

function opentab(a){


for(tabnames of tabname){
  tabnames.classList.remove('active-link');
}

for(contents of content){

  contents.classList.remove('active-tab');

}

event.currentTarget.classList.add('active-link');

document.getElementById(a).classList.add('active-tab');

}


// CONTACT FORM 

  const scriptURL = 'https://script.google.com/macros/s/AKfycbwkPGDgso5T5xKaY8AxD1wZZnqj7H_8x8xcJcpmdwkYFVfeXaUSxW-KD7UJpnC0xg4yyg/exec';
  const form = document.forms['submit-to-google-sheet'];
  const msg = document.querySelector('.msg');
  form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form)}).then(response => {msg.innerHTML = "Message sent successfully";
     setTimeout(function(){msg.innerHTML=""},5000) ; form.reset()}).catch(error => console.error('Error!', error.message));
  })

  // NAV MENU SMALL SCREEN

  const menu = document.querySelector('.menu');
  
  function openmenu(){
    menu.style.right = "0";
  }


  function closemenu(){
    menu.style.right = "-200px";
  }


// Animation Triggered on Scroll

// INTRODUCTION
const observernew = new IntersectionObserver(entries =>{

  entries.forEach( entry =>{
    
    const about = entry.target;

    console.log(about);
    

    if(entry.isIntersecting){
     about.classList.add('animate-description');
    }
    else{
      about.classList.remove('animate-description');
    }

  });


});


observernew.observe(document.querySelector('.description'));

// ABOUT ME

const observer = new IntersectionObserver(entries =>{

  entries.forEach( entry =>{
    
    const about = entry.target;
    

    if(entry.isIntersecting){
     about.classList.add('about-animate');
    }
    else{
      about.classList.remove('about-animate');
    }

  });


});


observer.observe(document.querySelector('.about-col-2'));
observer.observe(document.querySelector('.services-list'));
observer.observe(document.querySelector('.review-list'));
observer.observe(document.querySelector('.work-list'));


