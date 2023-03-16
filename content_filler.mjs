export function fillRecomendedProducts(
  calculatorResults,
  resultsElement,
  productElement
) {
  resultsElement.querySelector(".recomended-product").innerHTML = "";
  resultsElement
    .querySelector(".recomended-product")
    .appendChild(
      fillProduct(
        calculatorResults.recomendedProduct,
        productElement.cloneNode(true)
      )
    );
  resultsElement.querySelector(".other-products").innerHTML = "";
  calculatorResults.otherProducts.forEach((product) => {
    resultsElement
      .querySelector(".other-products")
      .appendChild(fillProduct(product, productElement.cloneNode(true)));
  });
}
const fillProduct = (product, productElement) => {
  productElement.querySelector(".product-name").innerHTML = product.name;
  product.sizes.forEach((size) => {
    productElement.querySelector(
      ".sizes"
    ).innerHTML += `<li>${size.weigth}. ${size.value}</li>`;
  });
  return productElement;
};