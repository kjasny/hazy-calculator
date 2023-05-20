
let filteredArray = (userArr) => {
  let inputArray = [...userArr]
  let filtArray = []

  for (i = 0; i < inputArray.length; i++) {
    if (inputArray[i] === '') {
      inputArray.splice(i, 1)
    } if (isFinite(inputArray[i])) {
      filtArray.push(inputArray[i])
    }
  }

  return filtArray
}

let addCalculate = (userArr) => {
  let addArray = filteredArray(userArr)
  let firstNumber = Number(addArray[0])
  let secondNumber = Number(addArray[1])
  let result = firstNumber + secondNumber

  return result
}

let subCalculate = (userArr) => {
  let addArray = filteredArray(userArr)
  let firstNumber = Number(addArray[0])
  let secondNumber = Number(addArray[1])
  let result = firstNumber - secondNumber

  return result
}

let multCalculate = (userArr) => {
  let addArray = filteredArray(userArr)
  let firstNumber = Number(addArray[0])
  let secondNumber = Number(addArray[1])
  let result = firstNumber * secondNumber

  return result
}

let divCalculate = (userArr) => {
  let addArray = filteredArray(userArr)
  let firstNumber = Number(addArray[0])
  let secondNumber = Number(addArray[1])
  let result = firstNumber / secondNumber

  return result
}


let calculate = (userArr) => {
  for (i = 0; i < userArr.length; i++) {
    if (userArr[i] === '+') {
      return addCalculate(userArr)
    } if (userArr[i] === '-') {
      return subCalculate(userArr)
    } if (userArr[i] === '*') {
      return multCalculate(userArr)
    } if (userArr[i] === '/') {
      return divCalculate(userArr)
    }
  }

  return NaN
}

module.exports = calculate


