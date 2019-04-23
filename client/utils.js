export const priceConverter = price => {
  let smallerPrice = price / 100
  let priceTo2 = smallerPrice.toFixed(2)
  return priceTo2
}
