import { fillRecomendedProducts } from "./content_filler.mjs";
import { CALCULATE_SLAB } from "./APIRequests.mjs";

var length = document.querySelector(".largo-input");
var width = document.querySelector(".ancho-input");
var depth = document.querySelector(".profundo-input");
var isMaximazer = document.querySelector(".is-maximazer");
var productElement = document.querySelector(".product").cloneNode(true);
document.querySelector(".product").remove();
var resultsElement = document.querySelector(".results");

document.querySelector(".calculate").addEventListener("click", () => {
  try {
    CALCULATE_SLAB({
      length: length.value,
      width: width.value,
      depth: depth.value,
      isMaximazer: isMaximazer.checked,
    }).then(result=>{
      fillRecomendedProducts(result, resultsElement, productElement);
    })
  } catch (error) {
    alert(error);
  }
});

