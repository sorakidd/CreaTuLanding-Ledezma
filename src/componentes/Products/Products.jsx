const products = [
  {
    id: "1",
    name: "Iphone 11",
    price: 400,
    category: "celulares",
    img: "https://http2.mlstatic.com/D_NQ_NP_656548-MLA46114829749_052021-O.webp", 
    stock: 25,
    description: "Iphone 12 pro MAX 128gb",
  },
  {
    id: "2",
    name: "Iphone 12",
    price: 550,
    category: "celulares",
    img: "https://http2.mlstatic.com/D_NQ_NP_670418-MLA74651612251_022024-O.webp", 
    stock: 15,
  },
  {
    id: "3",
    name: "Iphone 13",
    price: 650,
    category: "celulares",
    img: "https://http2.mlstatic.com/D_NQ_NP_821416-MLA47781962896_102021-O.webp", 
    stock: 15,
  },
  {
    id: "4",
    name: "Samsung OLED 50p",
    price: 900,
    category: "televisores",
    img: "https://tiendadiggit.com.ar/web/image/product.template/63513/image_512/%5BQN77S90CAGCZB%5D%20Smart%20TV%20Samsung%2077%22%20Oled%204K%20%20%20%20%20%20%20%20?unique=fbf9146", 
    stock: 10,
  },
  {
    id: "5",
    name: "Hisense UDH 4K 43p",
    price: 600,
    category: "televisores",
    img: "https://hisense.com.co/wp-content/uploads/2023/09/hisense-televisores_0008_6942147490839_1-1000x800.png", 
    stock: 10,
  },
  {
    id: "6",
    name: "PS5",
    price: 600,
    category: "consolas",
    img: "https://hiperaudio.com.ar/wp-content/uploads/2022/08/play-5.png", 
    stock: 5,
  },
];
  
  export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 100);
    });
  };

  export const getProductsById = (productId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find((prod) => prod.id === productId));
      }, 100);
    });
  };

  export const getElementsByCategory = (category) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.filter((prod) => prod.category === category));
      }, 100);
    });
  };

  