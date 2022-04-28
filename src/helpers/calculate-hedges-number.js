export const calculateHedgesNumber = ({
  length,
  plantsInProduct,
  plantsPerMeter
}) => {
  const numberOfSpots = length * plantsPerMeter
  const productsRequired = numberOfSpots / plantsInProduct

  if (productsRequired < 1) {
    return 1
  }
  return Math.round(productsRequired)
}
