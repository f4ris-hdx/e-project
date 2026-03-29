const queryString =window.location.search
const urlParams =new URLSearchParams(queryString);
const productID =urlParams.get('id');

const mirrors = [
{ id: 1, name: "Premium Decor Mirror 1", price: 16500, currency: "PKR", materialType: "Antique", mirrorType: "Dining Room Mirror", image: "https://picsum.photos/seed/mirror1/500/500", description: "An elegant antique-style mirror perfect for enhancing dining room aesthetics with a classic touch." },

{ id: 2, name: "Smart Reflection Mirror 2", price: 21000, currency: "PKR", materialType: "Bluetooth", mirrorType: "Bathroom Mirror", image: "https://picsum.photos/seed/mirror2/500/500", description: "A modern smart mirror with built-in Bluetooth, ideal for a connected and stylish bathroom experience." },

{ id: 3, name: "Vintage Wall Mirror 3", price: 13400, currency: "PKR", materialType: "Wooden Framed", mirrorType: "Hallway Mirror", image: "https://picsum.photos/seed/mirror3/500/500", description: "A beautifully crafted wooden framed mirror that adds a vintage charm to hallways." },

{ id: 4, name: "Minimalist Edge Mirror 4", price: 9100, currency: "PKR", materialType: "Acrylic Bordered", mirrorType: "Office Mirror", image: "https://picsum.photos/seed/mirror4/500/500", description: "A sleek and minimalist mirror designed to complement modern office interiors." },

{ id: 5, name: "Crystal Shine Mirror 5", price: 17600, currency: "PKR", materialType: "Decorative", mirrorType: "Living Room Mirror", image: "https://picsum.photos/seed/mirror5/500/500", description: "A decorative mirror with crystal-like detailing, perfect for elevating living room décor." },

{ id: 6, name: "Royal Wall Mirror 6", price: 10200, currency: "PKR", materialType: "Metal Bordered", mirrorType: "Bedroom Mirror", image: "https://picsum.photos/seed/mirror6/500/500", description: "A stylish metal-bordered mirror offering a royal touch to bedroom settings." },

{ id: 7, name: "Modern Glow Mirror 7", price: 19800, currency: "PKR", materialType: "LED", mirrorType: "Bathroom Mirror", image: "https://picsum.photos/seed/mirror7/500/500", description: "An LED-lit mirror providing optimal lighting and a modern feel for bathrooms." },

{ id: 8, name: "Classic Vanity Mirror 8", price: 8800, currency: "PKR", materialType: "Frameless", mirrorType: "Salon Mirror", image: "https://picsum.photos/seed/mirror8/500/500", description: "A frameless vanity mirror designed for professional salon use with a clean, classic look." },

{ id: 9, name: "Luxury Frame Mirror 9", price: 22100, currency: "PKR", materialType: "Antique", mirrorType: "Living Room Mirror", image: "https://picsum.photos/seed/mirror9/500/500", description: "A luxurious antique frame mirror that becomes the centerpiece of any living room." },

{ id: 10, name: "Elegant Round Mirror 10", price: 9400, currency: "PKR", materialType: "Acrylic Bordered", mirrorType: "Entryway Mirror", image: "https://picsum.photos/seed/mirror10/500/500", description: "A stylish round mirror ideal for entryways, offering a warm and welcoming look." },

{ id: 11, name: "Premium Decor Mirror 11", price: 15200, currency: "PKR", materialType: "Decorative", mirrorType: "Dining Room Mirror", image: "https://picsum.photos/seed/mirror11/500/500", description: "A premium decorative mirror crafted to enhance dining spaces with elegance." },

{ id: 12, name: "Smart Reflection Mirror 12", price: 26500, currency: "PKR", materialType: "Bluetooth", mirrorType: "Bathroom Mirror", image: "https://picsum.photos/seed/mirror12/500/500", description: "An advanced smart mirror featuring Bluetooth connectivity and modern design for bathrooms." },

{ id: 13, name: "Vintage Wall Mirror 13", price: 11000, currency: "PKR", materialType: "Wooden Framed", mirrorType: "Hallway Mirror", image: "https://picsum.photos/seed/mirror13/500/500", description: "A charming vintage mirror with a wooden frame, perfect for hallways and entry spaces." },

{ id: 14, name: "Minimalist Edge Mirror 14", price: 9900, currency: "PKR", materialType: "Metal Bordered", mirrorType: "Office Mirror", image: "https://picsum.photos/seed/mirror14/500/500", description: "A minimalist metal-bordered mirror that fits perfectly into modern office designs." },

{ id: 15, name: "Crystal Shine Mirror 15", price: 17400, currency: "PKR", materialType: "Decorative", mirrorType: "Living Room Mirror", image: "https://picsum.photos/seed/mirror15/500/500", description: "A stunning decorative mirror with crystal shine accents for living room luxury." },

{ id: 16, name: "Royal Wall Mirror 16", price: 8700, currency: "PKR", materialType: "Wooden Framed", mirrorType: "Bedroom Mirror", image: "https://picsum.photos/seed/mirror16/500/500", description: "A wooden framed mirror bringing warmth and classic style to bedroom décor." },

{ id: 17, name: "Modern Glow Mirror 17", price: 20500, currency: "PKR", materialType: "LED", mirrorType: "Bathroom Mirror", image: "https://picsum.photos/seed/mirror17/500/500", description: "A premium LED mirror offering bright illumination and sleek bathroom styling." },

{ id: 18, name: "Classic Vanity Mirror 18", price: 9600, currency: "PKR", materialType: "Frameless", mirrorType: "Salon Mirror", image: "https://picsum.photos/seed/mirror18/500/500", description: "A frameless vanity mirror ideal for salons with a modern and clean finish." },

{ id: 19, name: "Luxury Frame Mirror 19", price: 18200, currency: "PKR", materialType: "Antique", mirrorType: "Living Room Mirror", image: "https://picsum.photos/seed/mirror19/500/500", description: "An antique luxury mirror that enhances the elegance of living room interiors." },

{ id: 20, name: "Elegant Round Mirror 20", price: 10500, currency: "PKR", materialType: "Acrylic Bordered", mirrorType: "Entryway Mirror", image: "https://picsum.photos/seed/mirror20/500/500", description: "A modern round mirror designed to create a welcoming vibe in entryways." },

{ id: 21, name: "Premium Decor Mirror 21", price: 15800, currency: "PKR", materialType: "Decorative", mirrorType: "Dining Room Mirror", image: "https://picsum.photos/seed/mirror21/500/500", description: "A decorative premium mirror crafted to elevate dining room ambiance." },

{ id: 22, name: "Smart Reflection Mirror 22", price: 27000, currency: "PKR", materialType: "Bluetooth", mirrorType: "Bathroom Mirror", image: "https://picsum.photos/seed/mirror22/500/500", description: "A high-end smart mirror with Bluetooth features for a modern bathroom setup." },

{ id: 23, name: "Vintage Wall Mirror 23", price: 11800, currency: "PKR", materialType: "Wooden Framed", mirrorType: "Hallway Mirror", image: "https://picsum.photos/seed/mirror23/500/500", description: "A vintage-inspired mirror with wooden framing, perfect for stylish hallways." },

{ id: 24, name: "Minimalist Edge Mirror 24", price: 9200, currency: "PKR", materialType: "Metal Bordered", mirrorType: "Office Mirror", image: "https://picsum.photos/seed/mirror24/500/500", description: "A sleek office mirror with a durable metal border and minimalist appeal." },

{ id: 25, name: "Crystal Shine Mirror 25", price: 19900, currency: "PKR", materialType: "Decorative", mirrorType: "Living Room Mirror", image: "https://picsum.photos/seed/mirror25/500/500", description: "A premium decorative mirror with crystal shine, ideal for luxurious interiors." },

{ id: 26, name: "Royal Wall Mirror 26", price: 11200, currency: "PKR", materialType: "Wooden Framed", mirrorType: "Bedroom Mirror", image: "https://picsum.photos/seed/mirror26/500/500", description: "A refined wooden framed mirror designed for cozy and elegant bedrooms." },

{ id: 27, name: "Modern Glow Mirror 27", price: 21500, currency: "PKR", materialType: "LED", mirrorType: "Bathroom Mirror", image: "https://picsum.photos/seed/mirror27/500/500", description: "A stylish LED mirror offering bright lighting and a modern bathroom experience." },

{ id: 28, name: "Classic Vanity Mirror 28", price: 9700, currency: "PKR", materialType: "Frameless", mirrorType: "Salon Mirror", image: "https://picsum.photos/seed/mirror28/500/500", description: "A frameless salon mirror designed for clarity and modern styling." },

{ id: 29, name: "Luxury Frame Mirror 29", price: 18800, currency: "PKR", materialType: "Antique", mirrorType: "Living Room Mirror", image: "https://picsum.photos/seed/mirror29/500/500", description: "An elegant antique frame mirror perfect for upscale living room décor." },

{ id: 30, name: "Elegant Round Mirror 30", price: 10800, currency: "PKR", materialType: "Acrylic Bordered", mirrorType: "Entryway Mirror", image: "https://picsum.photos/seed/mirror30/500/500", description: "A contemporary round mirror designed to enhance entryway aesthetics." }
];


const singleproduct=mirrors.find(function(item){

    return item.id==productID;
});

let container=document.getElementById('detail')
container.innerHTML=` <div class="col-md-3">
                <div id="productCarousel" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="${singleproduct.image}" class="d-block w-100 img-fluid" alt="Product Image 1">
                        </div>
                    </div>

                </div>
            </div>
            <div class="col-md-9">
                <h1>${singleproduct.name}</h1>
                <div class="mb-3">
                    <span class="badge bg-success">In Stock</span>
                </div>
                <p class="h3 text-primary mb-4">Rs.${singleproduct.price}</p>
                <p>${singleproduct.description}</p>
                <p><b>Material Type: </b>${singleproduct.materialType}</p>
                <p><b>Mirror Type: </b>${singleproduct.mirrorType}</p>
                <button class="btn btn-primary btn-lg">Add to Cart</button>

            </div>`