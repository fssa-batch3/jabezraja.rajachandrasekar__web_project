// function for logout
function logout() {
        alert("Are you sure?");
        window.location.href = "./pages/login/Login.html";
}

// JSON FOR THE CATAGORY IF THE ARRAY IS EMPTY
const pr_detail = [
        //1
        {
                Quantiy: "23",
                attractive_offer_discount: "10% off",
                brand_name: "Boult",
                catagory: "Deals of the Day",
                description: "Combat Mode for gaming: Switch on the Combat mode and enjoy seamless gameplay with 45m/s latency. 35 Hrs total playtime with gaming mode on, and 7 hrs playtime on a single charge. You may run out of things to play, but you’ll not run out of battery. Lightning Boult Fast charging: 10 mins charge delivers 120 mins of playtime. A quick fix for anything impromptu.",
                features: "Sweatproof, Fast Charging, Microphone Included, Fast Charging,In-Line Touch Control, Water Resistant, Low Latency Mode, Voice Assistant, Microphone included, Extra Bass, 32 Hours Playtime",
                image: {
                        main_img: "https://m.media-amazon.com/images/I/71cBZJsl+EL._SL1500_.jpg",
                        sub_img1: "https://m.media-amazon.com/images/I/81nKL4v5EiL._SL1500_.jpg",
                        sub_img2: "https://m.media-amazon.com/images/I/71TdaIPWSBL._SL1500_.jpg",
                        sub_img3: "https://m.media-amazon.com/images/I/81XnLhAEnDL._SL1500_.jpg",
                },
                price: "1544",
                product_catagory: "Best_of_Electronics",
                product_name: "Boult Audio Maverick Truly Wireless",
                puid: "3d4d8afc-e9c3-4d74-a601-6aaa36e10937",
                size: "-",
        },
        //2
        {
                Quantiy: "23",
                attractive_offer_discount: "10% off",
                brand_name: "Bar Box",
                catagory: "Deals of the Day",
                description: "18/8 STAINLESS STEEL COCKTAIL SHAKER - Cocktail drink shaker are made by 18/8 food grade stainless steel with a mirror finish,This all-stainless drink shaker set will not break like glass shakers, no rubber seal to crack.The Shaker features a nice leak-proof seal, it will not wobbly, shakers will not rusty, if you clean dry the cocktails shaker after every use.You can dish-wash your bar tools and keep their shine with ease.",
                features: "Material-Stainless Steel, Brand-Bar Box, Colour-Steel 14 pcs",
                image: {
                        main_img: "https://m.media-amazon.com/images/I/71nPNTjo75L._SL1500_.jpg",
                        sub_img1: "https://m.media-amazon.com/images/I/71TfjEKEnfL._SL1500_.jpg",
                        sub_img2: "https://m.media-amazon.com/images/I/71pmkMg5cML._SL1500_.jpg",
                        sub_img3: "https://m.media-amazon.com/images/I/71lQSs8zNfL._SL1500_.jpg",
                },
                price: "1954",
                product_catagory: "Barware_Bakeware",
                product_name: "Bar Box 14-Piece Cocktail Shaker Set",
                puid: "3d4d8afc-e9c3-4d74-a601-6zaa36e10937",
                size: "-",
        },
        //3
        {
                Quantiy: "23",
                attractive_offer_discount: "5% off",
                brand_name: "Centy",
                catagory: "Deals of the Day",
                description: "Country of Origin: India, Color: Assorted Color; Number of Pieces: 1; Skills: Eye Hand Coordination, Material: Plastic; Included Items: 1 Pull Back Car, Dimension: LxWxH: 150*60*60 mm; Recommended Age: 3 Years and Above, Pull back toy; Attractive colors, Included Components: 1 Pull Back Car, Age Range Description: 3 Years and Above, Item Dimension: 2.36 inches x 2.36 inches x 5.9 inches",
                features: "Colour: Silver, Style Name: Echo Sports, Size: Small",
                image: {
                        main_img: "https://m.media-amazon.com/images/I/51SnQeZkPmL._SL1000_.jpg",
                        sub_img1: "https://m.media-amazon.com/images/I/51aLFBsue7L._SL1000_.jpg",
                        sub_img2: "https://m.media-amazon.com/images/I/51w0bMBUrxL._SL1000_.jpg",
                        sub_img3: "https://m.media-amazon.com/images/I/51Yfb7hfvwL._SL1000_.jpg",
                },
                price: "457",
                product_catagory: "Cars_Bikes",
                product_name: "Centy Toys Plastic Pull Back Car",
                puid: "3d4d8afc-e9c3-4d74-a601-6aza36e10937",
                size: "-",
        },
        //4
        {
                Quantiy: "3",
                attractive_offer_discount: "5% off",
                brand_name: "PHILIPS",
                catagory: "Deals of the Day",
                description: "Advanced concentrator technology with quick-heat head, Thermo protect temperature setting. Hanging loop : yes, Not cordless, 1.5-meter power cord, Compact design for easy handling; easy storage hook for convenient storage, 1000 watts and 2 years Philips India warranty from the date of purchase, There are two settings for drying speed (low, high); the motor speed is regulated to cater to these settings perfectly. There will not be any issue on fan speeds at low, high settings.",
                features: "Colour:Purple, Material:Plastic, Wattage:1000 Watts, Power Source:Corded Electric.",
                image: {
                        main_img: "https://m.media-amazon.com/images/I/51FGbb3EbgL._SL1227_.jpg",
                        sub_img1: "https://m.media-amazon.com/images/I/51uykbLD+WL._SL1227_.jpg",
                        sub_img2: "https://m.media-amazon.com/images/I/61+mzp99RvL._SL1227_.jpg",
                        sub_img3: "https://m.media-amazon.com/images/I/51tFeHnj8TL._SL1227_.jpg",
                },
                price: "697",
                product_catagory: "Best_of_Hair_Dryers",
                product_name: "PHILIPS 1000 watts Hair Dryer (HP8100/46, Purple)",
                puid: "3d4d8afc-e9c3-4d74-a601-6zia14e10937",
                size: "-",
        },
        //5
        {
                Quantiy: "4",
                attractive_offer_discount: "23% off",
                brand_name: "Nature4Nature",
                catagory: "Deals of the Day",
                description: "Product Dimensions: 7.6 x 7.6 x 7.6 cm; Date First Available: 31 August 2022, Manufacturer: Hans Herbal Overseas (India) New Delhi, ASIN: B0BD9685LS, Item part number: Quick Enhance: Soap Free Face cleanser, Country of Origin: India, Item Weight: 290 g",
                features: "Cruelty Free, Vegan, Paraben Free, Scent: Sandalwood.",
                image: {
                        main_img: "https://m.media-amazon.com/images/I/81SRDwFqPEL._SL1500_.jpg",
                        sub_img1: "https://m.media-amazon.com/images/I/81pGQ9-lcTL._SL1500_.jpg",
                        sub_img2: "https://m.media-amazon.com/images/I/61JXGlPnVBL._SL1280_.jpg",
                        sub_img3: "https://m.media-amazon.com/images/I/61pU3+KYP4L._SL1280_.jpg",
                },
                price: "967",
                product_catagory: "Personal_care_essential",
                product_name: "Nature4Nature Men, Women Quick Enhance Soap",
                puid: "3d4d8afc-e9c3-4d74-a637-6zia14e10937",
                size: "-",
        },
        //6
        {
                Quantiy: "47",
                attractive_offer_discount: "39% off",
                brand_name: "Trevi Mustang",
                catagory: "Furniture Bestseller",
                description: "Primary Material: Engineered Wood, Width x Height: 145.2 cm x 180 cm (4 ft 9 in x 5 ft 10 in), Number Of Doors: 4, Number Of Shelves: 11, Weight: 98",
                features: "Primary Material: Engineered Wood, Width x Height: 145.2 cm x 180 cm (4 ft 9 in x 5 ft 10 in).",
                image: {
                        main_img: "https://rukminim1.flixcart.com/image/832/832/xif0q/wardrobe-closet/w/q/y/-original-imagztahzfesqtsh.jpeg?q=70",
                        sub_img1: "https://rukminim1.flixcart.com/image/832/832/xif0q/wardrobe-closet/8/e/v/no-particle-board-ozone-4-door-wardrobe-maple-brown-trevi-maple-original-imaggzwgqf72hgrw.jpeg?q=70",
                        sub_img2: "https://rukminim1.flixcart.com/image/832/832/xif0q/wardrobe-closet/e/g/p/no-particle-board-ozone-4-door-wardrobe-maple-brown-trevi-maple-original-imaggzwgqnayhmf3.jpeg?q=70",
                        sub_img3: "https://rukminim1.flixcart.com/image/832/832/xif0q/wardrobe-closet/e/o/z/no-particle-board-ozone-4-door-wardrobe-maple-brown-trevi-maple-original-imaggzwgg3h2cggz.jpeg?q=70",
                },
                price: "18,990",
                product_catagory: "Wardrobes",
                product_name: "Trevi Mustang Engineered Wood 4 Door Wardrobe",
                puid: "3d4d8afc-e9c3-4d74-a637-6kia14e10937",
                size: "-",
        },
        //7
];
const products_details = JSON.parse(localStorage.getItem("products_details"));
if (!products_details) {
        localStorage.setItem("products_details", JSON.stringify(pr_detail));
}

// JSON FOR DEALS OF THE DAY
const deals_of_the_day = [
        {
                title: "Best_of_Electronics",
                image: {
                        source: "assets/images/products/r1.jpg",
                        alt: "Best_of_Electronics",
                },
                "price-offers": "₹1,777",
                sub: "Apple, Samsung  & more",
        },

        {
                title: "Barware_Bakeware",
                image: {
                        source: "assets/images/products/r2.jpg",
                        alt: "Barware_Bakeware",
                },
                "price-offers": "Upto 67% off",
                sub: "Grab & Gone",
        },

        {
                title: "Cars_Bikes",
                image: {
                        source: "assets/images/products/r3.jpg",
                        alt: "Cars_Bikes",
                },
                "price-offers": "Top Selling!",
                sub: "Starts from ₹299",
        },

        {
                title: "Best_of_Hair_Dryers",
                image: {
                        source: "assets/images/products/r4.jpg",
                        alt: "Best_of_Hair_Dryers",
                },
                "price-offers": "Top Brands",
                sub: "Starts from ₹499",
        },

        {
                title: "Personal_care_essential",
                image: {
                        source: "assets/images/products/r6.jpg",
                        alt: "Personal_care_essential",
                },
                "price-offers": "Min 10% off + extra 15% off",
                sub: "Wisper, colgate & nivea",
        },
];

// declare and initialize the variable outside the loop

for (let i = 0; i <= 4; i++) {
        // remove the re-declaration and re-initialization
        let card_1 = document.createElement("div");
        card_1.setAttribute("class", "common-col");

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
        },

        {
                title: "Sofa",
                image: {
                        source: "assets/images/products/z2.png",
                        alt: "Sofa",
                },
                "price-offers": "₹7,777",
                sub: "Fabric & Leatherette",
        },

        {
                title: "Office_Study_Table",
                image: {
                        source: "assets/images/products/z5.png",
                        alt: "Office_Study_Table",
                },
                "price-offers": "₹1,777",
                sub: "Work at Home like Boss",
        },

        {
                title: "Best_Selling_Bed",
                image: {
                        source: "assets/images/products/z5.png",
                        alt: "Best_Selling_Bed",
                },
                "price-offers": "Upto 30% off",
                sub: "King, Queen & More",
        },

        {
                title: "Reclinear",
                image: {
                        source: "assets/images/products/z7.png",
                        alt: "Reclinear",
                },
                "price-offers": "₹11,777",
                sub: "Cozy Corners",
        },
];

// declare and initialize the variable outside the loop
let card_2;

for (let i = 0; i <= 4; i++) {
        // remove the re-declaration and re-initialization
        card_2 = document.createElement("div");
        card_2.setAttribute("class", "common-col");

        const img_of_electronics = document.createElement("img");
        img_of_electronics.setAttribute("class", "product-img");
        img_of_electronics.setAttribute("src", furniture_bestseller[i].image.source);
        img_of_electronics.setAttribute("alt", furniture_bestseller[i].image.alt);
        card_2.append(img_of_electronics);

        // eslint-disable-next-line no-inner-declarations
        function redirect() {
                window.location.href = `./pages/products and detial pages/best of electronincs.html?id=${furniture_bestseller[i].title}`;
        }

        img_of_electronics.addEventListener("click", redirect);

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

// JSON FOR Best of Electronics
const Best_of_Electronics = [
        {
                title: "Best of Electronics",
                image: {
                        source: "assets/images/products/row1.jpg",
                        alt: "Best of Electronics",
                },
                "price-offers": "₹7,949",
                sub: "Apple, Samsung & more",
        },

        {
                title: "Top_Mirrorless_camers",
                image: {
                        source: "assets/images/products/row2.jpg",
                        alt: "Top_Mirrorless_camers",
                },
                "price-offers": "₹7,977",
                sub: "Canon, Sony & More",
        },

        {
                title: "Power_Bank",
                image: {
                        source: "assets/images/products/row5.jpg",
                        alt: "Power_Bank",
                },
                "price-offers": "₹777",
                sub: "Apple, Mi, realme & More",
        },

        {
                title: "Printer",
                image: {
                        source: "assets/images/products/row7.jpg",
                        alt: "Printer",
                },
                "price-offers": "Upto 30% off",
                sub: "Canon",
        },

        {
                title: "Projectors",
                image: {
                        source: "assets/images/products/row6.jpg",
                        alt: "Projectors",
                },
                "price-offers": "₹6,777",
                sub: "Zebronics, Canon & More",
        },
];

// declare and initialize the variable outside the loop
let card_3;

for (let i = 0; i <= 4; i++) {
        // remove the re-declaration and re-initialization
        card_3 = document.createElement("div");
        card_3.setAttribute("class", "common-col");

        const img_of_electronics = document.createElement("img");
        img_of_electronics.setAttribute("class", "product-img");
        img_of_electronics.setAttribute("src", Best_of_Electronics[i].image.source);
        img_of_electronics.setAttribute("alt", Best_of_Electronics[i].image.alt);
        card_3.append(img_of_electronics);

        // eslint-disable-next-line no-inner-declarations
        function redirect() {
                window.location.href = `./pages/products and detial pages/best of electronincs.html?id=${Best_of_Electronics[i].title}`;
        }

        img_of_electronics.addEventListener("click", redirect);

        const h3_for_product = document.createElement("h3");
        h3_for_product.setAttribute("class", "product-title");
        h3_for_product.innerText = Best_of_Electronics[i].title;
        card_3.append(h3_for_product);

        const h4_for_product = document.createElement("h4");
        h4_for_product.setAttribute("class", "price-title"); // add the missing prefix
        h4_for_product.innerText = Best_of_Electronics[i]["price-offers"];
        card_3.append(h4_for_product);

        const h6_for_product = document.createElement("h6");
        h6_for_product.setAttribute("class", "price");
        h6_for_product.innerText = Best_of_Electronics[i].sub;
        card_3.append(h6_for_product);

        // append the card to the container outside the loop
        document.querySelector("div.common-row-col-deals2").append(card_3);
}

// JSON for Beauty, Food & Toys
const Beauty_Food_Toys = [
        {
                title: "Sting_Instruments",
                image: {
                        source: "assets/images/products/R6.png",
                        alt: "Sting_Instruments",
                },
                "price-offers": "₹949",
                sub: "Guitars, Ukuless & More",
        },

        {
                title: "Food_Spreads",
                image: {
                        source: "assets/images/products/R2.png",
                        alt: "Food_Spreads",
                },
                "price-offers": "₹777",
                sub: "Myfiness, Alpino & more",
        },

        {
                title: "Doboo_Toys",
                image: {
                        source: "assets/images/products/R4.png",
                        alt: "Doboo_Toys",
                },
                "price-offers": "₹177",
                sub: "DB, KM & More",
        },

        {
                title: "Helmet",
                image: {
                        source: "assets/images/products/R5.png",
                        alt: "Helmet",
                },
                "price-offers": "₹677",
                sub: "Steelbird, Vega & More",
        },

        {
                title: "Bath_&_Shower",
                image: {
                        source: "assets/images/products/R1.png",
                        alt: "Bath_&_Shower",
                },
                "price-offers": "₹77",
                sub: "Pears, Fiama & More",
        },
];

// declare and initialize the variable outside the loop
let card_4;

for (let i = 0; i <= 4; i++) {
        // remove the re-declaration and re-initialization
        card_4 = document.createElement("div");
        card_4.setAttribute("class", "common-col");

        const img_of_electronics = document.createElement("img");
        img_of_electronics.setAttribute("class", "product-img");
        img_of_electronics.setAttribute("src", Beauty_Food_Toys[i].image.source);
        img_of_electronics.setAttribute("alt", Beauty_Food_Toys[i].image.alt);
        card_4.append(img_of_electronics);

        // eslint-disable-next-line no-inner-declarations
        function redirect() {
                window.location.href = `./pages/products and detial pages/best of electronincs.html?id=${Beauty_Food_Toys[i].title}`;
        }

        img_of_electronics.addEventListener("click", redirect);

        const h3_for_product = document.createElement("h3");
        h3_for_product.setAttribute("class", "product-title");
        h3_for_product.innerText = Beauty_Food_Toys[i].title;
        card_4.append(h3_for_product);

        const h4_for_product = document.createElement("h4");
        h4_for_product.setAttribute("class", "price-title"); // add the missing prefix
        h4_for_product.innerText = Beauty_Food_Toys[i]["price-offers"];
        card_4.append(h4_for_product);

        const h6_for_product = document.createElement("h6");
        h6_for_product.setAttribute("class", "price");
        h6_for_product.innerText = Beauty_Food_Toys[i].sub;
        card_4.append(h6_for_product);

        // append the card to the container outside the loop
        document.querySelector("div.common-row-col-deals3").append(card_4);
}

// JSON for Sports, Healthcare & More
const Sports_Healthcare = [
        {
                title: "Cycle",
                image: {
                        source: "assets/images/products/s1.png",
                        alt: "Cycle",
                },
                "price-offers": "₹5949",
                sub: "TATA, Hero & more",
        },

        {
                title: "Dumbbell",
                image: {
                        source: "assets/images/products/s2.png",
                        alt: "Dumbbell",
                },
                "price-offers": "₹477",
                sub: "PROWL, HRX & KRK",
        },

        {
                title: "Breakfast_Cereal",
                image: {
                        source: "assets/images/products/s3.png",
                        alt: "Breakfast_Cereal",
                },
                "price-offers": "₹277",
                sub: "Oats, Muesli & More",
        },

        {
                title: "Skin_Care",
                image: {
                        source: "assets/images/products/s4.png",
                        alt: "Skin_Care",
                },
                "price-offers": "₹767",
                sub: "Himalaya, Mamaeart & More",
        },

        {
                title: "Honey",
                image: {
                        source: "assets/images/products/s6.png",
                        alt: "Honey",
                },
                "price-offers": "₹177",
                sub: "Saffola, Dabur & More",
        },
];

// declare and initialize the variable outside the loop
let card_5;

for (let i = 0; i <= 4; i++) {
        // remove the re-declaration and re-initialization
        card_5 = document.createElement("div");
        card_5.setAttribute("class", "common-col");

        const img_of_electronics = document.createElement("img");
        img_of_electronics.setAttribute("class", "product-img");
        img_of_electronics.setAttribute("src", Sports_Healthcare[i].image.source);
        img_of_electronics.setAttribute("alt", Sports_Healthcare[i].image.alt);
        card_5.append(img_of_electronics);

        // eslint-disable-next-line no-inner-declarations
        function redirect() {
                window.location.href = `./pages/products and detial pages/best of electronincs.html?id=${Sports_Healthcare[i].title}`;
        }

        img_of_electronics.addEventListener("click", redirect);

        const h3_for_product = document.createElement("h3");
        h3_for_product.setAttribute("class", "product-title");
        h3_for_product.innerText = Sports_Healthcare[i].title;
        card_5.append(h3_for_product);

        const h4_for_product = document.createElement("h4");
        h4_for_product.setAttribute("class", "price-title"); // add the missing prefix
        h4_for_product.innerText = Sports_Healthcare[i]["price-offers"];
        card_5.append(h4_for_product);

        const h6_for_product = document.createElement("h6");
        h6_for_product.setAttribute("class", "price");
        h6_for_product.innerText = Sports_Healthcare[i].sub;
        card_5.append(h6_for_product);

        // append the card to the container outside the loop
        document.querySelector("div.common-row-col-deals4").append(card_5);
}

// JSON for  Kitchen Essentials
const Home_Kitchen_Essentials = [
        {
                title: "Bulb",
                image: {
                        source: "assets/images/products/k2.png",
                        alt: "Bulb",
                },
                "price-offers": "₹149",
                sub: "LED & LCD",
        },

        {
                title: "Artificial_Plants",
                image: {
                        source: "assets/images/products/k3.png",
                        alt: "Artificial_Plants",
                },
                "price-offers": "₹477",
                sub: "JR, SR & KR",
        },

        {
                title: "Kitchen_Linean_Sets",
                image: {
                        source: "assets/images/products/k4.png",
                        alt: "Kitchen_Linean_Sets",
                },
                "price-offers": "₹57",
                sub: "CAPYLYTE, Wanzhow",
        },

        {
                title: "Cloth_Clips",
                image: {
                        source: "assets/images/products/k5.png",
                        alt: "Cloth_Clips",
                },
                "price-offers": "₹77",
                sub: "Best Selling Range",
        },

        {
                title: "Gardening_Tools",
                image: {
                        source: "assets/images/products/k7.png",
                        alt: "Gardening_Tools",
                },
                "price-offers": "₹99",
                sub: "BSR",
        },
];

// declare and initialize the variable outside the loop
let card_6;

for (let i = 0; i <= 4; i++) {
        // remove the re-declaration and re-initialization
        card_6 = document.createElement("div");
        card_6.setAttribute("class", "common-col");

        const img_of_electronics = document.createElement("img");
        img_of_electronics.setAttribute("class", "product-img");
        img_of_electronics.setAttribute("src", Home_Kitchen_Essentials[i].image.source);
        img_of_electronics.setAttribute("alt", Home_Kitchen_Essentials[i].image.alt);
        card_6.append(img_of_electronics);

        // eslint-disable-next-line no-inner-declarations
        function redirect() {
                window.location.href = `./pages/products and detial pages/best of electronincs.html?id=${Home_Kitchen_Essentials[i].title}`;
        }

        img_of_electronics.addEventListener("click", redirect);

        const h3_for_product = document.createElement("h3");
        h3_for_product.setAttribute("class", "product-title");
        h3_for_product.innerText = Home_Kitchen_Essentials[i].title;
        card_6.append(h3_for_product);

        const h4_for_product = document.createElement("h4");
        h4_for_product.setAttribute("class", "price-title"); // add the missing prefix
        h4_for_product.innerText = Home_Kitchen_Essentials[i]["price-offers"];
        card_6.append(h4_for_product);

        const h6_for_product = document.createElement("h6");
        h6_for_product.setAttribute("class", "price");
        h6_for_product.innerText = Home_Kitchen_Essentials[i].sub;
        card_6.append(h6_for_product);

        // append the card to the container outside the loop
        document.querySelector("div.common-row-col-deals5").append(card_6);
}

// JSON for Mens_Fashion
const Mens_Fashion = [
        {
                title: "Watches",
                image: {
                        source: "assets/images/products/m2.png",
                        alt: "Watches",
                },
                "price-offers": "₹149",
                sub: "LED & LCD",
        },

        {
                title: "Jackets_Hoodies",
                image: {
                        source: "assets/images/products/m1.png",
                        alt: "Jackets & Hoodies",
                },
                "price-offers": "₹477",
                sub: "JR, SR & KR",
        },

        {
                title: "Shoes",
                image: {
                        source: "assets/images/products/m3.png",
                        alt: "Shoes",
                },
                "price-offers": "₹57",
                sub: "CAPYLYTE, Wanzhow",
        },

        {
                title: "Accessories",
                image: {
                        source: "assets/images/products/m6.png",
                        alt: "Accessories",
                },
                "price-offers": "₹77",
                sub: "Best Selling Range",
        },

        {
                title: "Grooming",
                image: {
                        source: "assets/images/products/m7.png",
                        alt: "Grooming",
                },
                "price-offers": "₹99",
                sub: "BSR",
        },
];

// declare and initialize the variable outside the loop
let card_7;

for (let i = 0; i <= 4; i++) {
        // remove the re-declaration and re-initialization
        card_7 = document.createElement("div");
        card_7.setAttribute("class", "common-col");

        const img_of_electronics = document.createElement("img");
        img_of_electronics.setAttribute("class", "product-img");
        img_of_electronics.setAttribute("src", Mens_Fashion[i].image.source);
        img_of_electronics.setAttribute("alt", Mens_Fashion[i].image.alt);
        card_7.append(img_of_electronics);

        // eslint-disable-next-line no-inner-declarations
        function redirect() {
                window.location.href = `./pages/products and detial pages/best of electronincs.html?id=${Mens_Fashion[i].title}`;
        }

        img_of_electronics.addEventListener("click", redirect);

        const h3_for_product = document.createElement("h3");
        h3_for_product.setAttribute("class", "product-title");
        h3_for_product.innerText = Mens_Fashion[i].title;
        card_7.append(h3_for_product);

        const h4_for_product = document.createElement("h4");
        h4_for_product.setAttribute("class", "price-title"); // add the missing prefix
        h4_for_product.innerText = Mens_Fashion[i]["price-offers"];
        card_7.append(h4_for_product);

        const h6_for_product = document.createElement("h6");
        h6_for_product.setAttribute("class", "price");
        h6_for_product.innerText = Mens_Fashion[i].sub;
        card_7.append(h6_for_product);

        // append the card to the container outside the loop
        document.querySelector("div.common-row-col-deals6").append(card_7);
}

// JSON for Mens_Fashion
const Womens_Fashion = [
        {
                title: "Jewellary",
                image: {
                        source: "assets/images/products/w2.png",
                        alt: "Jewellary",
                },
                "price-offers": "₹449",
                sub: "Shop Now!",
        },

        {
                title: "Grooming",
                image: {
                        source: "assets/images/products/w7.png",
                        alt: "Grooming",
                },
                "price-offers": "₹477",
                sub: "SkinCare, Makeupkit & More",
        },

        {
                title: "Dresses",
                image: {
                        source: "assets/images/products/w3.png",
                        alt: "Dresses",
                },
                "price-offers": "45% to 55% off",
                sub: "Sarees & more",
        },

        {
                title: "Shoes",
                image: {
                        source: "assets/images/products/w5.png",
                        alt: "Shoes",
                },
                "price-offers": "₹377",
                sub: "Asian, Puma & More",
        },

        {
                title: "Accessories",
                image: {
                        source: "assets/images/products/w6.png",
                        alt: "Accessories",
                },

                "price-offers": "₹199",
                sub: "Handbags, Wallets & Totes",
        },
];

// declare and initialize the variable outside the loop
let card_8;

for (let i = 0; i <= 4; i++) {
        // remove the re-declaration and re-initialization
        card_8 = document.createElement("div");
        card_8.setAttribute("class", "common-col");

        const img_of_electronics = document.createElement("img");
        img_of_electronics.setAttribute("class", "product-img");
        img_of_electronics.setAttribute("src", Womens_Fashion[i].image.source);
        img_of_electronics.setAttribute("alt", Womens_Fashion[i].image.alt);
        card_8.append(img_of_electronics);

        // eslint-disable-next-line no-inner-declarations
        function redirect() {
                window.location.href = `./pages/products and detial pages/best of electronincs.html?id=${Womens_Fashion[i].title}`;
        }

        img_of_electronics.addEventListener("click", redirect);

        const h3_for_product = document.createElement("h3");
        h3_for_product.setAttribute("class", "product-title");
        h3_for_product.innerText = Womens_Fashion[i].title;
        card_8.append(h3_for_product);

        const h4_for_product = document.createElement("h4");
        h4_for_product.setAttribute("class", "price-title"); // add the missing prefix
        h4_for_product.innerText = Womens_Fashion[i]["price-offers"];
        card_8.append(h4_for_product);

        const h6_for_product = document.createElement("h6");
        h6_for_product.setAttribute("class", "price");
        h6_for_product.innerText = Womens_Fashion[i].sub;
        card_8.append(h6_for_product);

        // append the card to the container outside the loop
        document.querySelector("div.common-row-col-deals7").append(card_8);
}
