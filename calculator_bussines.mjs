/**
 * @param {number} length
 * @param {number} width
 * @param {number} depth
 * @param {boolean} isMaximazer
 * @returns an object containing the recomended products and their dimentions
 */
export function calculate(length, width, depth, isMaximazer) {
  const volume = Number(length * width * (depth / 12));

  let plusConcreteMix = {
    name: "5000 plus concrete mix",
    sizes: [
      { weigth: "50lb", value: Math.ceil(volume / 0.38) },
      { weigth: "60lb", value: Math.ceil(volume / 0.45) },
      { weigth: "80lb", value: Math.ceil(volume / 0.6) },
    ],
  };
  let maximizerConcreteMix = {
    name: "Maximizer concrete mix",
    sizes: [{ weigth: "80lb", value: Math.ceil(volume) }],
  };
  let highStrengthConcreteMix = {
    name: "High strength concrete mix",
    sizes: [
      { weigth: "40lb", value: Math.ceil(volume / 0.3) },
      { weigth: "60lb", value: Math.ceil(volume / 0.45) },
      { weigth: "80lb", value: Math.ceil(volume / 0.6) },
      { weigth: "90lb", value: Math.ceil(volume / 0.66) },
    ],
  };
  let crackResistantConcreteMix = {
    name: "Crack resistant concrete mix",
    sizes: [
      { weigth: "50lb", value: Math.ceil(volume / 0.38) },
      { weigth: "80lb", value: Math.ceil(volume / 0.6) },
    ],
  };
  let proX180ConcreteMix = {
    name: "Pro X180 concrete mix",
    sizes: [{ weigth: "80lb", value: Math.ceil(volume / 0.59) }],
  };
  let proMixAcceleratedConcreteMix = {
    name: "Pro mix accelerated concrete mix",
    sizes: [{ weigth: "50lb", value: Math.ceil(volume / 0.3) }],
  };
  let fastSettingConcreteMix = {
    name: "Fast setting concrete mix",
    sizes: [{ weigth: "50lb", value: Math.ceil(volume / 0.3) }],
  };

  let returnProducts;

  if (isMaximazer == false && depth > 2) {
    returnProducts = {
      recomendedProduct: highStrengthConcreteMix,
      otherProducts: [
        crackResistantConcreteMix,
        proX180ConcreteMix,
        proMixAcceleratedConcreteMix,
        fastSettingConcreteMix,
        plusConcreteMix,
      ],
    };
  } else if (isMaximazer == false && depth < 2) {
    returnProducts = {
      recomendedProduct: plusConcreteMix,
      otherProducts: [proX180ConcreteMix],
    };
  } else if (isMaximazer == true && depth < 2) {
    returnProducts = {
      recomendedProduct: maximizerConcreteMix,
      otherProducts: [proX180ConcreteMix],
    };
  } else if (isMaximazer == true && depth > 2) {
    returnProducts = {
      recomendedProduct: maximizerConcreteMix,
      otherProducts: [
        crackResistantConcreteMix,
        maximizerConcreteMix,
        proX180ConcreteMix,
        proMixAcceleratedConcreteMix,
        fastSettingConcreteMix,
        plusConcreteMix,
      ],
    };
  } else {
    throw new Error("Bad request in slab calculator");
  }
  return returnProducts;
}
export function verifyNotNullNumber (number){
  if(number){
    if(number)
  }else{
    return new error("number can't be null")
  }
}