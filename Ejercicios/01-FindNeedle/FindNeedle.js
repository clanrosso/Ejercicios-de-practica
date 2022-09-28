function FindNeedle(haystack, needle) {
  // Your code here:

  /* for (let i = 0; i < haystack.length; i++) {   
    for (let j = 0; j < needle.length; j++) {      
      if(needle[j] !== haystack[i + j]) break;
      if(j === needle.length - 1) return i
    }
  }
  return -1 */

  for (let i = 0; i < haystack.length; i++) {
    let sliced = haystack.slice(i, i + needle.length);
    if (needle === sliced) return i;
  }
  return -1;
}

//Complejidad temporal ALT I

// haystack.length = n ; needle.length = m --> O(n*m)

//complejidad temporal ALT II

// haystack.length = n ; needle.length = m --> O(n*m)

module.exports = FindNeedle;
