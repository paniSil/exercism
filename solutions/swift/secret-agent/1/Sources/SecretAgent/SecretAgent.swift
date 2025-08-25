func protectSecret(_ secret: String, withPassword password: String) -> (String) -> String {
    func secretFunction (possiblePassword: String) -> String {
          if possiblePassword == password {
              return secret
          }
        else {
            return "Sorry. No hidden secrets here."
        }
    }
    return secretFunction
  }

func generateCombination(forRoom room: Int, usingFunction f: (Int) -> Int) -> (Int, Int, Int) {
    let first: Int = f(room)
    let second: Int = f(first)
    let third: Int = f(second)
  return (first, second, third)
}
