func sliceSize(diameter: Double?, slices: Int?) -> Double? {
  guard let d = diameter, let s = slices else {return nil}
  if d < 0 || s < 1 {
    return nil
  } else {
    let size = ((.pi*d*d)/4.0)/Double(s)
    return size
  }
}

func biggestSlice(
  diameterA: String, slicesA: String,
  diameterB: String, slicesB: String
) -> String {
  let sliceA = sliceSize(diameter: Double(diameterA), slices: Int(slicesA)) ?? -1
  let sliceB = sliceSize(diameter: Double(diameterB), slices: Int(slicesB)) ?? -1

  if sliceA > sliceB {
    return "Slice A is bigger" 
  }
  else if sliceB > sliceA {
    return "Slice B is bigger" 
  } else {
    return "Neither slice is bigger"
  }
}
