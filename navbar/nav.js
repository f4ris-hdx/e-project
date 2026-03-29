/*===== MENU SHOW =====*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

/* */
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

/*MENU HIDDEN*/
if(navClose){   
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}


// ===========SEARCH=============
const search=document.getElementById('s34rch'),
searchBtn=document.getElementById('search-btn'),
searchClose=document.getElementById('search-close')

// search show 
if(searchBtn){
    searchBtn.addEventListener('click',()=>{
        search.classList.add('show-search')
    })
}

// search hidden 
if(searchClose){
    searchClose.addEventListener('click',()=>{
        search.classList.remove('show-search')
    })
}

/*=============== LOGIN ===============*/
const login = document.getElementById('login'),
      loginBtn = document.getElementById('login-btn'),
      loginClose = document.getElementById('login-close')

/* Login show */
loginBtn.addEventListener('click', () =>{
   login.classList.add('show-login')
})

/* Login hidden */
loginClose.addEventListener('click', () =>{
   login.classList.remove('show-login')
})