// NAVBAR 
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
// MAIN 

let currentLocation = window.location.href;
let menuItems = document.querySelectorAll('.nav-link');
menuItems.forEach(item => 
    { if (item.href === currentLocation) 
    { item.classList.add('active'); } 
});
function toggleSearch() {
    document.getElementById('searchBox').classList.toggle('active')};

    // products 
const mirrors = [
{
id: 1,
name: "Premium Decor Mirror 1",
price: 16500,
currency: "PKR",
materialType: "Antique",
mirrorType: "Dining Room Mirror",
size: "24x30",
size2: "28x34",
image: "https://picsum.photos/seed/mirror1a/500/500",
image2: "https://picsum.photos/seed/mirror1b/500/500",
image3: "https://picsum.photos/seed/mirror1c/500/500",
description: "An elegant antique‑style mirror designed to enhance dining room interiors with a refined and timeless aesthetic."
},
{
id: 2,
name: "Smart Reflection Mirror 2",
price: 21000,
currency: "PKR",
materialType: "Bluetooth",
mirrorType: "Bathroom Mirror",
size: "22x32",
size2: "26x36",
image: "https://picsum.photos/seed/mirror2a/500/500",
image2: "https://picsum.photos/seed/mirror2b/500/500",
image3: "https://picsum.photos/seed/mirror2c/500/500",
description: "A modern smart mirror with Bluetooth connectivity, perfect for stylish and tech‑savvy bathrooms."
},
{
id: 3,
name: "Vintage Wall Mirror 3",
price: 13400,
currency: "PKR",
materialType: "Wooden Framed",
mirrorType: "Hallway Mirror",
size: "20x28",
size2: "24x32",
image: "https://picsum.photos/seed/mirror3a/500/500",
image2: "https://picsum.photos/seed/mirror3b/500/500",
image3: "https://picsum.photos/seed/mirror3c/500/500",
description: "A beautifully crafted wooden framed mirror that adds vintage charm to hallways."
},
{
id: 4,
name: "Minimalist Edge Mirror 4",
price: 9100,
currency: "PKR",
materialType: "Acrylic Bordered",
mirrorType: "Office Mirror",
size: "21x29",
size2: "25x33",
image: "https://picsum.photos/seed/mirror4a/500/500",
image2: "https://picsum.photos/seed/mirror4b/500/500",
image3: "https://picsum.photos/seed/mirror4c/500/500",
description: "A sleek minimalist mirror designed to complement modern office interiors with style and functionality."
},
{
id: 5,
name: "Crystal Shine Mirror 5",
price: 17600,
currency: "PKR",
materialType: "Decorative",
mirrorType: "Living Room Mirror",
size: "24x30",
size2: "28x36",
image: "https://picsum.photos/seed/mirror5a/500/500",
image2: "https://picsum.photos/seed/mirror5b/500/500",
image3: "https://picsum.photos/seed/mirror5c/500/500",
description: "A decorative mirror with crystal‑like detailing, perfect for elevating the elegance of living room décor."
},
{
id: 6,
name: "Royal Wall Mirror 6",
price: 10200,
currency: "PKR",
materialType: "Metal Bordered",
mirrorType: "Bedroom Mirror",
size: "22x28",
size2: "26x34",
image: "https://picsum.photos/seed/mirror6a/500/500",
image2: "https://picsum.photos/seed/mirror6b/500/500",
image3: "https://picsum.photos/seed/mirror6c/500/500",
description: "A stylish metal‑bordered mirror that brings a refined touch to bedroom settings."
},
{
id: 7,
name: "Modern Glow Mirror 7",
price: 19800,
currency: "PKR",
materialType: "LED",
mirrorType: "Bathroom Mirror",
size: "23x31",
size2: "27x35",
image: "https://picsum.photos/seed/mirror7a/500/500",
image2: "https://picsum.photos/seed/mirror7b/500/500",
image3: "https://picsum.photos/seed/mirror7c/500/500",
description: "An LED‑lit mirror providing optimal illumination and a contemporary feel for bathrooms."
},
{
id: 8,
name: "Classic Vanity Mirror 8",
price: 8800,
currency: "PKR",
materialType: "Frameless",
mirrorType: "Salon Mirror",
size: "20x26",
size2: "24x30",
image: "https://picsum.photos/seed/mirror8a/500/500",
image2: "https://picsum.photos/seed/mirror8b/500/500",
image3: "https://picsum.photos/seed/mirror8c/500/500",
description: "A frameless vanity mirror for salon settings with a clean, classic look."
},
{
id: 9,
name: "Luxury Frame Mirror 9",
price: 22100,
currency: "PKR",
materialType: "Antique",
mirrorType: "Living Room Mirror",
size: "25x33",
size2: "30x38",
image: "https://picsum.photos/seed/mirror9a/500/500",
image2: "https://picsum.photos/seed/mirror9b/500/500",
image3: "https://picsum.photos/seed/mirror9c/500/500",
description: "A luxurious antique frame mirror that becomes a statement centerpiece."
},
{
id: 10,
name: "Elegant Round Mirror 10",
price: 9400,
currency: "PKR",
materialType: "Acrylic Bordered",
mirrorType: "Entryway Mirror",
size: "22x22",
size2: "26x26",
image: "https://picsum.photos/seed/mirror10a/500/500",
image2: "https://picsum.photos/seed/mirror10b/500/500",
image3: "https://picsum.photos/seed/mirror10c/500/500",
description: "A stylish round mirror ideal for entryways, offering a welcoming look."
},
{
id: 11,
name: "Premium Decor Mirror 11",
price: 15200,
currency: "PKR",
materialType: "Decorative",
mirrorType: "Dining Room Mirror",
size: "24x28",
size2: "28x32",
image: "https://picsum.photos/seed/mirror11a/500/500",
image2: "https://picsum.photos/seed/mirror11b/500/500",
image3: "https://picsum.photos/seed/mirror11c/500/500",
description: "A refined decorative mirror crafted to enhance dining spaces with elegance."
},
{
id: 12,
name: "Smart Reflection Mirror 12",
price: 26500,
currency: "PKR",
materialType: "Bluetooth",
mirrorType: "Bathroom Mirror",
size: "23x33",
size2: "27x37",
image: "https://picsum.photos/seed/mirror12a/500/500",
image2: "https://picsum.photos/seed/mirror12b/500/500",
image3: "https://picsum.photos/seed/mirror12c/500/500",
description: "An advanced smart mirror with Bluetooth features for modern bathrooms."
},
{
id: 13,
name: "Vintage Wall Mirror 13",
price: 11000,
currency: "PKR",
materialType: "Wooden Framed",
mirrorType: "Hallway Mirror",
size: "20x28",
size2: "24x32",
image: "https://picsum.photos/seed/mirror13a/500/500",
image2: "https://picsum.photos/seed/mirror13b/500/500",
image3: "https://picsum.photos/seed/mirror13c/500/500",
description: "A charming vintage mirror that adds character and warmth to entry halls."
},
{
id: 14,
name: "Minimalist Edge Mirror 14",
price: 9900,
currency: "PKR",
materialType: "Metal Bordered",
mirrorType: "Office Mirror",
size: "21x29",
size2: "25x33",
image: "https://picsum.photos/seed/mirror14a/500/500",
image2: "https://picsum.photos/seed/mirror14b/500/500",
image3: "https://picsum.photos/seed/mirror14c/500/500",
description: "A minimalist metal‑bordered mirror that blends into modern office environments cleanly."
},
{
id: 15,
name: "Crystal Shine Mirror 15",
price: 17400,
currency: "PKR",
materialType: "Decorative",
mirrorType: "Living Room Mirror",
size: "24x30",
size2: "28x36",
image: "https://picsum.photos/seed/mirror15a/500/500",
image2: "https://picsum.photos/seed/mirror15b/500/500",
image3: "https://picsum.photos/seed/mirror15c/500/500",
description: "A decorative mirror with crystal shine accents to elevate interior luxury."
},
{
id: 16,
name: "Royal Wall Mirror 16",
price: 8700,
currency: "PKR",
materialType: "Wooden Framed",
mirrorType: "Bedroom Mirror",
size: "22x28",
size2: "26x34",
image: "https://picsum.photos/seed/mirror16a/500/500",
image2: "https://picsum.photos/seed/mirror16b/500/500",
image3: "https://picsum.photos/seed/mirror16c/500/500",
description: "A wooden framed mirror bringing warmth and classic style to bedroom décor."
},
{
id: 17,
name: "Modern Glow Mirror 17",
price: 20500,
currency: "PKR",
materialType: "LED",
mirrorType: "Bathroom Mirror",
size: "23x31",
size2: "27x35",
image: "https://picsum.photos/seed/mirror17a/500/500",
image2: "https://picsum.photos/seed/mirror17b/500/500",
image3: "https://picsum.photos/seed/mirror17c/500/500",
description: "A premium LED mirror offering bright illumination and sleek bathroom styling."
},
{
id: 18,
name: "Classic Vanity Mirror 18",
price: 9600,
currency: "PKR",
materialType: "Frameless",
mirrorType: "Salon Mirror",
size: "20x26",
size2: "24x30",
image: "https://picsum.photos/seed/mirror18a/500/500",
image2: "https://picsum.photos/seed/mirror18b/500/500",
image3: "https://picsum.photos/seed/mirror18c/500/500",
description: "A frameless vanity mirror ideal for salons with a modern and clean finish."
},
{
id: 19,
name: "Luxury Frame Mirror 19",
price: 18200,
currency: "PKR",
materialType: "Antique",
mirrorType: "Living Room Mirror",
size: "25x33",
size2: "30x38",
image: "https://picsum.photos/seed/mirror19a/500/500",
image2: "https://picsum.photos/seed/mirror19b/500/500",
image3: "https://picsum.photos/seed/mirror19c/500/500",
description: "An antique luxury mirror that enhances the elegance of living room interiors."
},
{
id: 20,
name: "Elegant Round Mirror 20",
price: 10500,
currency: "PKR",
materialType: "Acrylic Bordered",
mirrorType: "Entryway Mirror",
size: "22x22",
size2: "26x26",
image: "https://picsum.photos/seed/mirror20a/500/500",
image2: "https://picsum.photos/seed/mirror20b/500/500",
image3: "https://picsum.photos/seed/mirror20c/500/500",
description: "A modern round mirror designed to create a welcoming vibe in entryways."
},
{
id: 21,
name: "Premium Decor Mirror 21",
price: 15800,
currency: "PKR",
materialType: "Decorative",
mirrorType: "Dining Room Mirror",
size: "24x28",
size2: "28x32",
image: "https://picsum.photos/seed/mirror21a/500/500",
image2: "https://picsum.photos/seed/mirror21b/500/500",
image3: "https://picsum.photos/seed/mirror21c/500/500",
description: "A decorative premium mirror crafted to elevate dining room ambiance."
},
{
id: 22,
name: "Smart Reflection Mirror 22",
price: 27000,
currency: "PKR",
materialType: "Bluetooth",
mirrorType: "Bathroom Mirror",
size: "23x33",
size2: "27x37",
image: "https://picsum.photos/seed/mirror22a/500/500",
image2: "https://picsum.photos/seed/mirror22b/500/500",
image3: "https://picsum.photos/seed/mirror22c/500/500",
description: "A high-end smart mirror with Bluetooth features for a modern bathroom setup."
},
{
id: 23,
name: "Vintage Wall Mirror 23",
price: 11800,
currency: "PKR",
materialType: "Wooden Framed",
mirrorType: "Hallway Mirror",
size: "20x28",
size2: "24x32",
image: "https://picsum.photos/seed/mirror23a/500/500",
image2: "https://picsum.photos/seed/mirror23b/500/500",
image3: "https://picsum.photos/seed/mirror23c/500/500",
description: "A vintage-inspired mirror with wooden framing, perfect for stylish hallways."
},
{
id: 24,
name: "Minimalist Edge Mirror 24",
price: 9200,
currency: "PKR",
materialType: "Metal Bordered",
mirrorType: "Office Mirror",
size: "21x29",
size2: "25x33",
image: "https://picsum.photos/seed/mirror24a/500/500",
image2: "https://picsum.photos/seed/mirror24b/500/500",
image3: "https://picsum.photos/seed/mirror24c/500/500",
description: "A sleek office mirror with a durable metal border and minimalist appeal."
},
{
id: 25,
name: "Crystal Shine Mirror 25",
price: 19900,
currency: "PKR",
materialType: "Decorative",
mirrorType: "Living Room Mirror",
size: "24x30",
size2: "28x36",
image: "https://picsum.photos/seed/mirror25a/500/500",
image2: "https://picsum.photos/seed/mirror25b/500/500",
image3: "https://picsum.photos/seed/mirror25c/500/500",
description: "A premium decorative mirror with crystal shine, ideal for luxurious interiors."
},
{
id: 26,
name: "Royal Wall Mirror 26",
price: 11200,
currency: "PKR",
materialType: "Wooden Framed",
mirrorType: "Bedroom Mirror",
size: "22x28",
size2: "26x34",
image: "https://picsum.photos/seed/mirror26a/500/500",
image2: "https://picsum.photos/seed/mirror26b/500/500",
image3: "https://picsum.photos/seed/mirror26c/500/500",
description: "A refined wooden framed mirror designed for cozy and elegant bedrooms."
},
{
id: 27,
name: "Modern Glow Mirror 27",
price: 21500,
currency: "PKR",
materialType: "LED",
mirrorType: "Bathroom Mirror",
size: "23x31",
size2: "27x35",
image: "https://picsum.photos/seed/mirror27a/500/500",
image2: "https://picsum.photos/seed/mirror27b/500/500",
image3: "https://picsum.photos/seed/mirror27c/500/500",
description: "A stylish LED mirror offering bright lighting and a modern bathroom experience."
},
{
id: 28,
name: "Classic Vanity Mirror 28",
price: 9700,
currency: "PKR",
materialType: "Frameless",
mirrorType: "Salon Mirror",
size: "20x26",
size2: "24x30",
image: "https://picsum.photos/seed/mirror28a/500/500",
image2: "https://picsum.photos/seed/mirror28b/500/500",
image3: "https://picsum.photos/seed/mirror28c/500/500",
description: "A frameless salon mirror designed for clarity and modern styling."
},
{
id: 29,
name: "Luxury Frame Mirror 29",
price: 18800,
currency: "PKR",
materialType: "Antique",
mirrorType: "Living Room Mirror",
size: "25x33",
size2: "30x38",
image: "https://picsum.photos/seed/mirror29a/500/500",
image2: "https://picsum.photos/seed/mirror29b/500/500",
image3: "https://picsum.photos/seed/mirror29c/500/500",
description: "An elegant antique frame mirror perfect for upscale living room décor."
},
{
id: 30,
name: "Elegant Round Mirror 30",
price: 10800,
currency: "PKR",
materialType: "Acrylic Bordered",
mirrorType: "Entryway Mirror",
size: "22x22",
size2: "26x26",
image: "https://picsum.photos/seed/mirror30a/500/500",
image2: "https://picsum.photos/seed/mirror30b/500/500",
image3: "https://picsum.photos/seed/mirror30c/500/500",
description: "A contemporary round mirror designed to enhance entryway aesthetics."
}]
let main=document.getElementById('containerp')
for(let i=0;i<mirrors.length;i++){
    main.innerHTML+=`<div class="col-6 col-sm-6 g-5 col-lg-4">
  <a href="./single.html?id=${mirrors[i].id}" class="card-link">
                <div class="card text-left">
                    <img class="card-img-top" src="${mirrors[i].image}" alt="">
                    <div class="card-body">
                        <h4 class="card-title fs-4">${mirrors[i].name}</h4>
                        <p class="card-text text-dark fs-5">Rs. <b>${mirrors[i].price}</b></p>
                        <p class="card-text text-muted fs-6 text-truncate " id='description'>${mirrors[i].description}</p>
                        
                        
                    </div>
                </div>
                </a>
            </div>`
}
// SELECTOR FILTER 
    let typeselect=document.getElementById('mirror-type');
    let materialselect=document.getElementById('material-type');
    let container=document.getElementById('containerp')

    
    
// =================SEARCH====================
