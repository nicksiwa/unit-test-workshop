function transfer(from, to, amount) {
  if (amount <= 0 || amount > 20000 || isValidNumber(amount)) {
    return null
  }
  if (isSameBank(from, to)) {
    return amount = 0
  }
  if (amount <= 5000) {
    return amount = 0
  }
  if (amount > 5000 && amount <= 10000) {
    return amount = 1
  }
  if (amount > 10000 && amount <= 15000) {
    return amount = 2
  }
  return amount = 3
}

function isValidNumber(amount) {
  if (amount % 1 === 0) {
    return false
  }
  return true
}

function isSameBank(from, to) {
  if (from === to) {
    return true
  }
}

module.exports = transfer
