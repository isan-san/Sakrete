import { fillRecomendedProducts } from "./content_filler.mjs";
import { CALCULATE_SLAB_POUR, CALCULATE_SLAB_REPAIR } from "./APIRequests.mjs";

var length = document.querySelector(".largo-input");
var width = document.querySelector(".ancho-input");
var depth = document.querySelector(".profundo-input");
var isMaximazer = document.querySelector(".is-maximazer");
var productElement = document.querySelector(".product").cloneNode(true);
document.querySelector(".product").remove();
var resultsElement = document.querySelector(".results");
var typeOfCalculator = document.querySelector(".type-of-calculator");

document.querySelector(".calculate").addEventListener("click", () => {
  if (typeOfCalculator.checked) {
    try {
      CALCULATE_SLAB_POUR({
        length: length.value,
        width: width.value,
        depth: depth.value,
        isMaximazer: isMaximazer.checked,
      }).then((result) => {
        fillRecomendedProducts(result, resultsElement, productElement);
      });
    } catch (error) {
      alert(error);
    }
  } else {
    try {
      CALCULATE_SLAB_REPAIR({
        length: length.value,
        width: width.value,
        depth: depth.value,
        isMaximazer: isMaximazer.checked,
      }).then((result) => {
        fillRecomendedProducts(result, resultsElement, productElement);
      });
    } catch (error) {
      alert(error);
    }
  }
});
