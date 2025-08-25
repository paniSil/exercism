func getCard(at index: Int, from stack: [Int]) -> Int {
  return stack[index]
}

func setCard(at index: Int, in stack: [Int], to newCard: Int) -> [Int] {
  var newStack = stack
  if index >= 0 && index < stack.count {
    newStack[index] = newCard
    return newStack
  } else {
    return stack
  }
}

func insert(_ newCard: Int, atTopOf stack: [Int]) -> [Int] {
  var newStack = stack
  newStack.append(newCard)
  return newStack
}

func removeCard(at index: Int, from stack: [Int]) -> [Int] {
  var newStack = stack
  if index >= 0 && index < stack.count {
    newStack.remove(at: index)
    return newStack
  } else {
    return stack
  }
}

func removeTopCard(_ stack: [Int]) -> [Int] {
  var newStack = stack
  if stack.count > 0 {
    newStack.removeLast()
    return newStack
  } else {
    return stack
  }
}

func insert(_ newCard: Int, atBottomOf stack: [Int]) -> [Int] {
  var newStack = stack
  newStack.insert(newCard, at: newStack.startIndex)
  return newStack
}

func removeBottomCard(_ stack: [Int]) -> [Int] {
  var newStack = stack
  if newStack.count > 0 {
    newStack.removeFirst(1)
    return newStack
  } else {
    return stack
  }
}

func checkSizeOfStack(_ stack: [Int], _ size: Int) -> Bool {
  let stackSize = stack.count
  return stackSize == size
}

func evenCardCount(_ stack: [Int]) -> Int {
  var evenCards = 0
  for card in stack {
    if card % 2 == 0 {
      evenCards += 1
    }
  }
  return evenCards
}
