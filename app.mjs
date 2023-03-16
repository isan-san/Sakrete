import { calculate } from "./calculator_slabs.mjs";
import { fillRecomendedProducts } from "./content_filler.mjs";

var length = document.querySelector(".largo-input");
var width = document.querySelector(".ancho-input");
var depth = document.querySelector(".profundo-input");
var isMaximazer = document.querySelector(".is-maximazer");
var productElement = document.querySelector(".product").cloneNode(true);
document.querySelector(".product").remove();
var resultsElement = document.querySelector(".results");

document.querySelector(".calculate").addEventListener("click", () => {
  try {
    let calculatorResult = calculate(
      Number(length.value),
      Number(width.value),
      Number(depth.value),
      isMaximazer.checked
    );
    fillRecomendedProducts(calculatorResult, resultsElement, productElement);
  } catch (error) {
    alert(error);
  }
});
