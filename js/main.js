// function for logout
function logout(){
    alert("Are you sure?")
    location.href="./pages/login/Login.html"
}
// JSON FOR DEALS OF THE DAY
const deals_of_the_day = [
    {
       "title":"Best of Electronics",
       "image":{
            "source": "assets/images/products/r1.jpg",
            "alt": "Best of Electronics",
         },
       "price-offers":"₹1,777",
       "sub":"Apple, Samsung  & more",
       "path":"./pages/products and detial pages/best of electronincs.html",
    },
        
    {
       "title":"Barware & Bakeware",
       "image":{
            "source": "assets/images/products/r2.jpg",
            "alt": "Barware & Bakeware",
         },
       "price-offers":"Upto 67% off",
       "sub":"Grab & Gone",
       "path":"",
    },

    {
       "title":"Cars & Bikes",
       "image":{
            "source": "assets/images/products/r3.jpg",
            "alt": "Cars & Bikes",
         },
       "price-offers":"Top Selling!",
       "sub":"Starts from ₹299",
       "path":"",
    },

    {
       "title":"Best of Hair Dryers",
       "image":{
            "source": "assets/images/products/r4.jpg",
            "alt": "Best of Hair Dryers",
         },
       "price-offers":"Top Brands",
       "sub":"Starts from ₹499",
       "path":"",
    },

    {
       "title":"Personal care essential",
       "image":{
            "source": "assets/images/products/r6.jpg",
            "alt": "Personal care essential",
         },
       "price-offers":"Min 10% off + extra 15% off",
       "sub":"Wisper, colgate & nivea",
       "path":"",
    }
]

    for(let i = 0; i<=4; i++){

card_1 = document.createElement("div");
card_1.setAttribute("class", "common-col");
document.querySelector("div.common-row-col-deals").append(card_1)

a = document.createElement("a");
a.setAttribute("href", deals_of_the_day[i]["path"] );
card_1.append(a);

img_of_electronics = document.createElement("img");
img_of_electronics.setAttribute("class", "product-img");
img_of_electronics.setAttribute("src", deals_of_the_day[i]["image"]["source"]);
img_of_electronics.setAttribute("alt", deals_of_the_day[i]["image"]["alt"]);
a.append(img_of_electronics);

h3_for_product = document.createElement("h3");
h3_for_product.setAttribute("class", "product-title");
h3_for_product.innerText=(deals_of_the_day[i]["title"]);
card_1.append(h3_for_product);

h4_for_product = document.createElement("h4");
h4_for_product.setAttribute("class", "-title");
h4_for_product.innerText=(deals_of_the_day[i]["price-offers"]);
card_1.append(h4_for_product);

h6_for_product = document.createElement("h6");
h6_for_product.setAttribute("class", "price");
h6_for_product.innerText=(deals_of_the_day[i]["sub"]);
card_1.append(h6_for_product);

document.querySelector("div.common-row-col-deals").append(card_1)
}
// JSON FOR Furniture Bestseller
const furniture_bestseller =[
    {
       "title":"Wardrobes",
       "image":{
            "source": "assets/images/products/z1.png",
            "alt": "Wardrobes",
         },
       "price-offers":"₹4,777",
       "sub":"2,3,4 doors",
       "path":"./pages/products and detial pages/wardrobes.html",
    },
        
    {
       "title":"Sofa",
       "image":{
            "source": "assets/images/products/z2.png",
            "alt": "Sofa",
         },
       "price-offers":"₹7,777",
       "sub":"Fabric & Leatherette",
       "path":"",
    },

    {
       "title":"Office Study Table",
       "image":{
            "source": "assets/images/products/z5.png",
            "alt": "Office Study Table",
         },
       "price-offers":"₹1,777",
       "sub":"Work at Home like Boss",
       "path":"",
    },

    {
       "title":"Best Selling Bed",
       "image":{
            "source": "assets/images/products/z5.png",
            "alt": "Best Selling Bed",
         },
       "price-offers":"Upto 30% off",
       "sub":"King, Queen & More",
       "path":"",
    },

    {
       "title":"Reclinear",
       "image":{
            "source": "assets/images/products/z7.png",
            "alt": "Reclinear",
         },
       "price-offers":"₹11,777",
       "sub":"Cozy Corners",
       "path":"",
    }
]

for(let i = 0; i<=4; i++){

card_1 = document.createElement("div");
card_1.setAttribute("class", "common-col");
document.querySelector("div.common-row-col-deals1").append(card_1)

a = document.createElement("a");
a.setAttribute("href", furniture_bestseller[i]["path"] );
card_1.append(a);

img_of_electronics = document.createElement("img");
img_of_electronics.setAttribute("class", "product-img");
img_of_electronics.setAttribute("src", furniture_bestseller[i]["image"]["source"]);
img_of_electronics.setAttribute("alt", furniture_bestseller[i]["image"]["alt"]);
a.append(img_of_electronics);

h3_for_product = document.createElement("h3");
h3_for_product.setAttribute("class", "product-title");
h3_for_product.innerText=(furniture_bestseller[i]["title"]);
card_1.append(h3_for_product);

h4_for_product = document.createElement("h4");
h4_for_product.setAttribute("class", "-title");
h4_for_product.innerText=(furniture_bestseller[i]["price-offers"]);
card_1.append(h4_for_product);

h6_for_product = document.createElement("h6");
h6_for_product.setAttribute("class", "price");
h6_for_product.innerText=(furniture_bestseller[i]["sub"]);
card_1.append(h6_for_product);

document.querySelector("div.common-row-col-deals1").append(card_1)
console.log(card_1);
}