let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
}




const product = [
    {
        id: 0,
        image: '/images/toothpaste.jpg',
        title: 'Toothpaste',
        price: 20,
    },
    {
        id: 1,
        image: '/images/toothbrush.png',
        title: 'Toothbrush',
        price: 25,
    },
    {
        id: 2,
        image: '/images/mouthwash.jpg',
        title: 'Mouthwash',
        price: 40,
    },
    {
        id: 3,
        image: '/images/electrictoothbrush.jpg',
        title: 'Electric Toothbrush',
        price: 68,
    }
  ];

  const categories = [...new Set(product.map((item) => item))];

  let i = 0;
  document.getElementById('root').innerHTML = categories.map((item) => {
    var { image, title, price } = item;
    return (
      `<div class='box'>
        <div class='img-box'>
          <img class='images' src=${image}></img>
        </div>
        <div class='bottom'>
          <p>${title}</p>
          <h2>$ ${price}.00</h2>
          <button onclick='addtocart(${i++})'>Add to cart</button>
        </div>
      </div>`
    );
  }).join('');

  var cart = [];

  function addtocart(a) {
    cart.push({ ...categories[a] });
    displaycart();
  }

  function delElement(a) {
    cart.splice(a, 1);
    displaycart();
  }

  function displaycart(a) {
    let j = 0,
      total = 0;
    document.getElementById('count').innerHTML = cart.length;
    if (cart.length == 0 && !document.getElementById('searchBox').value) {
      document.getElementById('cartItem').innerHTML = 'Your cart is empty';
      document.getElementById('total').innerHTML = '$ ' + 0 + '.00';
    } else {
      document.getElementById('cartItem').innerHTML = cart
        .map((items) => {
          var { image, title, price } = items;
          total = total + price;
          document.getElementById('total').innerHTML = '$ ' + total + '.00';
          return (
            `<div class='cart-item'>
              <div class='row-img'>
                <img class='rowimg' src=${image}>
              </div>
              <p style='font-size:12px;'>${title}</p>
              <h2 style='font-size:15px;'>$ ${price}.00</h2>` +
            "<i class='fa-solid fa-trash' onclick='delElement(" +
            j++ +
            ")'></i></div>"
          );
        })
        .join('');
    }
  }

  document.getElementById('searchBox').addEventListener('keyup', searchProducts);

  function searchProducts() {
    let keyword = document.getElementById('searchBox').value.toLowerCase();
    let filteredProducts = categories.filter((product) =>
      product.title.toLowerCase().includes(keyword)
    );
    document.getElementById('root').innerHTML = filteredProducts.map((product) => {
var { image, title, price } = product;
return (
`<div class='box'> <div class='img-box'> <img class='images' src=${image}></img> </div> <div class='bottom'> <p>${title}</p> <h2>$ ${price}.00</h2> <button onclick='addtocart(${product.id})'>Add to cart</button> </div> </div>`
);
})
.join('');
}


