export const storeProducts = [
  {
    id: "1",
    title: "Google Pixel - Black",
    img: "img/product-1.png",
    price: 10,
    company: "GOOGLE",
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
    inCart: false,
    count: 0,
    total: 0
  },
  {
    id: "2",
    title: "Samsung S7",
    img: "img/product-2.png",
    price: 16,
    company: "SAMSUNG",
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
    inCart: false,
    count: 0,
    total: 0
  },
  {
    id: "3",
    title: "HTC 10 - Black",
    img: "img/product-3.png",
    price: 8,
    company: "htc",
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
    inCart: false,
    count: 0,
    total: 0
  },
  {
    id: "4",
    title: "HTC 10 - White",
    img: "img/product-4.png",
    price: 18,
    company: "htc",
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
    inCart: false,
    count: 0,
    total: 0
  },
  {
    id: "5",
    title: "HTC Desire 626s",
    img: "img/product-5.png",
    price: 24,
    company: "htc",
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
    inCart: false,
    count: 0,
    total: 0
  },
  {
    id: "6",
    title: "Vintage Iphone",
    img: "img/product-6.png",
    price: 17,
    company: "apple",
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
    inCart: false,
    count: 0,
    total: 0
  },
  {
    id: "7",
    title: "Iphone 7",
    img: "img/product-7.png",
    price: 30,
    company: "apple",
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
    inCart: false,
    count: 0,
    total: 0
  },
  {
    id: "8",
    title: "Smashed Iphone",
    img: "img/product-8.png",
    price: 2,
    company: "apple",
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
    inCart: false,
    count: 0,
    total: 0
  },
  {
    id: "9",
    title: "iphone X",
    img: "img/product-9.png",
    price: 5,
    company: "apple",
    info:
      "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
    inCart: false,
    count: 0,
    total: 0
  }
];

export function getProducts() {
  return storeProducts;
}

export function getProduct(id) {
  return storeProducts.find(product => product.id === id);
}

export function saveProduct(product) {
  let productInDb = storeProducts.find(p => p.id === product.id) || {};
  productInDb.title = product.title;
  productInDb.price = parseInt(product.price);
  productInDb.info = product.info;
  productInDb.company = product.company;

  if (!productInDb.id) {
    productInDb.id = Date.now().toString();
  }

  if (!productInDb.count) {
    productInDb.count = 0;
  }

  if (!productInDb.img) {
    productInDb.img = "img/new-product.jpg";
    storeProducts.push(productInDb);
  }

  // storeProducts.push(product);
  // return storeProducts;
}

export function deleteProduct(id) {
  let productInDb = storeProducts.find(product => product.id === id);
  storeProducts.splice(storeProducts.indexOf(productInDb), 1);
  return productInDb;
}
