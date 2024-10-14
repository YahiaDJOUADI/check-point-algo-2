const numbers = [11,20,33,1,4,98,200,19928,3,6,10,0]
const insertion = (arr) =>{
    for (let i = 1; i < arr.length; i++) {
      let number = arr[i]
      let j
      for ( j = i - 1; j >= 0 && arr[j] > number; j--) {
        arr[j + 1] = arr[j]
      }
      arr[j + 1] = number
    }
    return arr
  }
  console.log(insertion(numbers))
  