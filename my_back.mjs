import {
  AUTH,
  PRODUCTS_COLECTION,
  CALCULATOR_COLECTION,
  VERSION,
} from "./paths.mjs";

class Product {
  constructor(name, mainCategoty, subCategory) {
    this.name = name;
    this.mainCategoty = mainCategoty;
    this.subCategory = subCategory;
  }
}
export function getProducts() {
  fetch(`https://api.webflow.com/collections/${PRODUCTS_COLECTION}/items`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: AUTH,
      "accept-version": VERSION,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      let allProducts = data.items.map((product) => {
        new Product(product.name, product.main_category, product.sub_category);
      });
      return allProducts;
    })
    .catch((error) => console.error(error));
}
