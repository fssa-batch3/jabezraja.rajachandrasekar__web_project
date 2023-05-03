// function for logout
function logout() {
  alert("Are you sure?");
  window.location.href = "./pages/login/Login.html";
}

// Increment/decrement counter

document.addEventListener("DOMContentLoaded", function () {
  const minus = document.querySelector(".quantity__minus");
  const plus = document.querySelector(".quantity__plus");
  const input = document.querySelector(".sqb");

  minus.addEventListener("click", function (e) {
    e.preventDefault();
    let value = parseInt(input.value);
    if (value > 1) {
      value--;
    }
    input.value = value;
  });

  plus.addEventListener("click", function (e) {
    e.preventDefault();
    let value = parseInt(input.value);
    value++;
    input.value = value;
  });
});

// JSON FOR DEALS OF THE DAY
const deals_of_the_day = [
  {
    title: "Best_of_Electronics",
    image: {
      source: "assets/images/products/r1.jpg",
      alt: "Best of Electronics",
    },
    "price-offers": "₹1,777",
    sub: "Apple, Samsung  & more",
  },

  {
    title: "Barware_Bakeware",
    image: {
      source: "assets/images/products/r2.jpg",
      alt: "Barware & Bakeware",
    },
    "price-offers": "Upto 67% off",
    sub: "Grab & Gone",
  },

  {
    title: "Cars_Bikes",
    image: {
      source: "assets/images/products/r3.jpg",
      alt: "Cars & Bikes",
    },
    "price-offers": "Top Selling!",
    sub: "Starts from ₹299",
  },

  {
    title: "Best_of_Hair_Dryers",
    image: {
      source: "assets/images/products/r4.jpg",
      alt: "Best of Hair Dryers",
    },
    "price-offers": "Top Brands",
    sub: "Starts from ₹499",
  },

  {
    title: "Personal_care_essential",
    image: {
      source: "assets/images/products/r6.jpg",
      alt: "Personal care essential",
    },
    "price-offers": "Min 10% off + extra 15% off",
    sub: "Wisper, colgate & nivea",
  },
];

// declare and initialize the variable outside the loop
let card_1;

for (let i = 0; i <= 4; i++) {
  // remove the re-declaration and re-initialization
  card_1 = document.createElement("div");
  card_1.setAttribute("class", "common-col");

  //   a = document.createElement("a");
  //   a.setAttribute("href","./pages/products and detial pages/best of electronincs.html");
  //   card_1.append(a);

  const img_of_electronics = document.createElement("img");
  img_of_electronics.setAttribute("class", "product-img");
  img_of_electronics.setAttribute("src", deals_of_the_day[i].image.source);
  img_of_electronics.setAttribute("alt", deals_of_the_day[i].image.alt);
  card_1.append(img_of_electronics);

  // eslint-disable-next-line no-inner-declarations
  function redirect() {
    window.location.href = `./pages/products and detial pages/best of electronincs.html?id=${deals_of_the_day[i].title}`;
  }

  img_of_electronics.addEventListener("click", redirect);

  const h3_for_product = document.createElement("h3");
  h3_for_product.setAttribute("class", "product-title");
  h3_for_product.innerText = deals_of_the_day[i].title;
  card_1.append(h3_for_product);

  const h4_for_product = document.createElement("h4");
  h4_for_product.setAttribute("class", "price-title"); // add the missing prefix
  h4_for_product.innerText = deals_of_the_day[i]["price-offers"];
  card_1.append(h4_for_product);

  const h6_for_product = document.createElement("h6");
  h6_for_product.setAttribute("class", "price");
  h6_for_product.innerText = deals_of_the_day[i].sub;
  card_1.append(h6_for_product);

  // append the card to the container outside the loop
  document.querySelector("div.common-row-col-deals").append(card_1);
}

// const category = document.querySelectorAll('.product-img')

// category.forEach(function (add){
//    add.addEventListener("click",(e)=> {
//       const id = each.id;
//       window.location.href = `./pages/products and detial pages/best of electronincs.html=${id}`;
//    })
// });

// JSON FOR Furniture Bestseller
const furniture_bestseller = [
  {
    title: "Wardrobes",
    image: {
      source: "assets/images/products/z1.png",
      alt: "Wardrobes",
    },
    "price-offers": "₹4,777",
    sub: "2,3,4 doors",
    path: "./pages/products and detial pages/wardrobes.html",
  },

  {
    title: "Sofa",
    image: {
      source: "assets/images/products/z2.png",
      alt: "Sofa",
    },
    "price-offers": "₹7,777",
    sub: "Fabric & Leatherette",
    path: "",
  },

  {
    title: "Office Study Table",
    image: {
      source: "assets/images/products/z5.png",
      alt: "Office Study Table",
    },
    "price-offers": "₹1,777",
    sub: "Work at Home like Boss",
    path: "",
  },

  {
    title: "Best Selling Bed",
    image: {
      source: "assets/images/products/z5.png",
      alt: "Best Selling Bed",
    },
    "price-offers": "Upto 30% off",
    sub: "King, Queen & More",
    path: "",
  },

  {
    title: "Reclinear",
    image: {
      source: "assets/images/products/z7.png",
      alt: "Reclinear",
    },
    "price-offers": "₹11,777",
    sub: "Cozy Corners",
    path: "",
  },
];

// declare and initialize the variable outside the loop
let card_2;

for (let i = 0; i <= 4; i++) {
  // remove the re-declaration and re-initialization
  card_2 = document.createElement("div");
  card_2.setAttribute("class", "common-col");

  const a = document.createElement("a");
  a.setAttribute("href", furniture_bestseller[i].path);
  card_2.append(a);

  const img_of_electronics = document.createElement("img");
  img_of_electronics.setAttribute("class", "product-img");
  img_of_electronics.setAttribute("src", furniture_bestseller[i].image.source);
  img_of_electronics.setAttribute("alt", furniture_bestseller[i].image.alt);
  a.append(img_of_electronics);

  const h3_for_product = document.createElement("h3");
  h3_for_product.setAttribute("class", "product-title");
  h3_for_product.innerText = furniture_bestseller[i].title;
  card_2.append(h3_for_product);

  const h4_for_product = document.createElement("h4");
  h4_for_product.setAttribute("class", "price-title"); // add the missing prefix
  h4_for_product.innerText = furniture_bestseller[i]["price-offers"];
  card_2.append(h4_for_product);

  const h6_for_product = document.createElement("h6");
  h6_for_product.setAttribute("class", "price");
  h6_for_product.innerText = furniture_bestseller[i].sub;
  card_2.append(h6_for_product);

  // append the card to the container outside the loop
  document.querySelector("div.common-row-col-deals1").append(card_2);
}
