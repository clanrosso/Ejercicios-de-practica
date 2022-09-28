function SumArray (arr, n) {
  // Your code here:
  
  /* for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if(arr[i] + arr[j] === n) return true
    }
  }
  return false */
​
let start = 0;
let end = arr.length - 1;
​
while(start < end){
  let suma = arr[start] + arr[end];
​
  if(suma > n) end -= 1;
  else if(suma < n) start += 1;
  else return true
}
return false


}

module.exports = SumArray
