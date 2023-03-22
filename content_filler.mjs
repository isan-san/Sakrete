export function fillRecomendedProducts(
  calculatorResults,
  resultsElement,
  productElement
) {
  resultsElement.querySelector(".recomended-product").innerHTML = "";
  resultsElement
    .querySelector(".recomended-product")
    .appendChild(
      fillProduct(calculatorResults.recomended, productElement.cloneNode(true))
    );
}
const fillProduct = (product, productElement) => {
  productElement.querySelector(".product-name").innerHTML = product.sizes.name;
  product.sizes.sizes.forEach((size) => {
    productElement.querySelector(
      ".sizes"
    ).innerHTML += `<li>${size.weigth}. ${size.value}</li>`;
  });
  console.log(product);
  productElement.querySelector(".sakrete-image").src=""
  return productElement;
};
