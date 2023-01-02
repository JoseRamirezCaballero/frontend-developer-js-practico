const navbarEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burguerIconMenu = document.querySelector("#burguerIconMenu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const asideProductDetailCart = document.querySelector(".product-detail-cart");
const asideProductDetail = document.querySelector(".product-detail");
const asideProductDetailClose = document.querySelector(".product-detail-close");

navbarEmail.addEventListener("click", toggleDesktopMenu);
function toggleDesktopMenu() {
  // Yo lo hice asi, version nuv
  // return desktopMenu.classList.contains('inactive') ?  desktopMenu.classList.remove('inactive') : desktopMenu.classList.add('inactive')
  // Version buena
  desktopMenu.classList.toggle("inactive");
  asideProductDetailCart.classList.add('inactive')
}

burguerIconMenu.addEventListener("click", toggleMobileMenu);
function toggleMobileMenu() {
  asideProductDetailCart.classList.add("inactive");
  mobileMenu.classList.toggle("inactive");
}

menuCarritoIcon.addEventListener("click", toggleCarritoAside);
function toggleCarritoAside() {
  mobileMenu.classList.add("inactive");
  desktopMenu.classList.add('inactive')
  asideProductDetail.classList.add('inactive')
  asideProductDetailCart.classList.toggle("inactive");
}

asideProductDetailClose.addEventListener("click", closeProductDetail);
function closeProductDetail() {
  asideProductDetail.classList.add('inactive')
}

function openProductDetail() {
  desktopMenu.classList.add("inactive");
  asideProductDetailCart.classList.add('inactive')
  asideProductDetail.classList.remove('inactive')
}

const productList = [];
productList.push({
  name: "Bike",
  price: 12700,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Bicycle helmet",
  price: 1200,
  image:
    "https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto",
});
productList.push({
  name: "Bicycle helmet",
  price: 1600,
  image: "https://m.media-amazon.com/images/I/61eExL-rIAL._AC_SL1001_.jpg",
});
productList.push({
  name: "Bicycle helmet",
  price: 1500,
  image:
    "https://assets.specialized.com/i/specialized/60822-140_HLMT_CHAMONIX-HLMT-MIPS-CE-MRN-M-L_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto",
});
productList.push({
  name: "Seat",
  price: 300,
  image: "https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg",
});
productList.push({
  name: "Tennis Montain Bike",
  price: 2200,
  image:
    "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg",
});
productList.push({
  name: "Sunglasses",
  price: 800,
  image:
    "https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602",
});
productList.push({
  name: "Sunglasses",
  price: 600,
  image:
    "https://cdn.siroko.com/s/files/1/1220/6874/products/siroko-tech-k3s-clearfog-lente-antiniebla-frontal/1200x/crop_center.jpg?v=1635209603",
});
productList.push({
  name: "Bicycle seat bag",
  price: 876,
  image: "https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg",
});

const cardsContainer = document.querySelector(".cards-container");

function renderProductV1(array) {
  array.forEach((product) => {
    let productCart = document.createElement("div");
    productCart.classList.add("product-card");

    let img = document.createElement("img");
    img.setAttribute("src", product.image);
    img.addEventListener('click', openProductDetail)

    let productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    let div = document.createElement("div");
    let productoPrecio = document.createElement("p");
    productoPrecio.innerText = `$${product.price}`;
    let productNombre = document.createElement("p");
    productNombre.innerText = product.name;

    let figure = document.createElement("figure");
    figure.innerHTML = '<img src="./icons/bt_add_to_cart.svg" alt="">';

    div.append(productoPrecio, productNombre);
    productInfo.append(div, figure);
    productCart.append(img, productInfo);
    cardsContainer.append(productCart);
  });
}
renderProductV1(productList)


// Por cuestienos de seguridad, se recomienda hacerlo con el renderProductV1
function renderProductV2(array) {
  array.forEach((product) => {
    cardsContainer.innerHTML += `
        <div class="product-card">
        <img src="${product.image}" alt="">
        <div class="product-info">
          <div>
            <p>$${product.price}</p>
            <p>${product.name}</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div>
        `;
  });
}
// renderProductV2(productList);
