let navbar_email = document.querySelector('#navbar-email');
let desktop_menu = document.querySelector('.desktop-menu');
let shopping_cart_container = document.querySelector('.shopping-cart-container');
let navbar_cart = document.querySelector('#navbar-cart');

navbar_email.addEventListener('click', ()=>{
    if (desktop_menu.style.display === "block") {
        desktop_menu.style.display = "none";
    } else {
        desktop_menu.style.display = "block";
    }
});

navbar_cart.addEventListener('click', ()=>{
    if (shopping_cart_container.style.display === "block") {
        shopping_cart_container.style.display = "none";
    } else {
        shopping_cart_container.style.display = "block";
    }
});
//Agregando productos dinamicamente.
let productList = [];
productList.push({
    name:'Bicicleta',
    price:240.000,
    Img:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name:'Celular',
    price:1200.000,
    Img:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});productList.push({
    name:'Notebook',
    price:1000.000,
    Img:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name:'Bicicleta',
    price:240.000,
    Img:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name:'Celular',
    price:1200.000,
    Img:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name:'Notebook',
    price:1000.000,
    Img:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name:'Notebook',
    price:1000.000,
    Img:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name:'Notebook',
    price:1000.000,
    Img:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name:'Notebook',
    price:1000.000,
    Img:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name:'Notebook',
    price:1000.000,
    Img:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name:'Notebook',
    price:1000.000,
    Img:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name:'Notebook',
    price:1000.000,
    Img:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
const product_details_container = document.querySelector('.product-details-container');
for(product of productList){
    const product_container = document.createElement('div');
    const main_container = document.querySelector('.main-container');
    const product_img = document.createElement('img');
    const product_icon_add = document.createElement('img');
    const product_name = document.createElement('p');
    const product_price = document.createElement('p');
    const product_info = document.createElement('div');
    const container_price_name = document.createElement('div');
    //Manejo del doom
    product_info.classList.add('product-info');
    product_container.classList.add('product-container');
    product_img.setAttribute('src',product.Img);
    product_icon_add.setAttribute('src','icons/bt_add_to_cart.svg');
    product_icon_add.classList.add('btn-add-to-cart');
    product_icon_add.style.width = '30px';
    product_icon_add.style.height = '30px';
    product_img.classList.add('.product-img');
    
    product_name.innerHTML = product.name;
    product_price.innerHTML = product.price;
    main_container.appendChild(product_container);
    container_price_name.append(product_price,product_name);
    product_info.append(container_price_name,product_icon_add);
    product_container.append(product_img,product_info);
    
    product_container.addEventListener('click',()=>{
        product_details_container.style.display = 'block';
        console.warn('Prueba');
    });
   // product_info_container_btn_close = document.querySelector('.product-details-container');
   // product_info_container_btn_close.addEventListener('click',()=>{
        //console.log('sjk');
    //});
}
//product info

//product_details_container.style.display = 'block';
//product_info_container_btn_close.classList.add('product-info-container-btn-close');
const product_details = document.querySelector('.product-details');
const product_info_img = document.createElement('img');
product_info_img.setAttribute('src','https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
product_info_img.classList.add('product-info-img');
const product_info_price = document.createElement('p');
const product_info_name = document.createElement('p');
 const product_info_description = document.createElement('p');
 const product_info_btn_add_to_cart = document.createElement('button');
 const product_info_container_btn_close = document.createElement('div');
 const product_info_btn_close = document.createElement('img');
 product_info_btn_close.setAttribute('src','./icons/icon_close.png');
 product_info_container_btn_close.appendChild(product_info_btn_close);
 product_details_container.appendChild(product_info_container_btn_close);
 product_info_price.innerHTML = product.price;
 product_info_name.innerHTML = product.name;
 product_info_btn_add_to_cart.innerHTML = 'Add to cart'; 
 product_info_description.innerHTML = 'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.';
 product_details_container.prepend(product_info_img);
 product_details.append(product_info_price,product_info_name,product_info_description,product_info_btn_add_to_cart);