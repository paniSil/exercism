import Foundation

func cartesianToPolar(_ cart: (x: Double, y: Double)) -> (r: Double, phi: Double) {
  let r = (pow(cart.x, 2) + pow(cart.y, 2)).squareRoot()
  let phi = atan2(cart.y, cart.x)
  return (r, phi)
}

func combineRecords(
  production: (toy: String, id: Int, productLead: String),
  gifts: (Int, [String])
) -> (id: Int, toy: String, productLead: String, recipients: [String]) {
  return(id: gifts.0, toy: production.toy, productLead: production.productLead, recipients: gifts.1)
}
