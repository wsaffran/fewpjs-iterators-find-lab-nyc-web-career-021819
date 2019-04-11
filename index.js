const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  if (array.find(object => object.result === "W")) {
    let result = array.find(object => object.result === "W")
    return result.year
  } else {
    return array.find(object => object.result === "W")
  }
}
