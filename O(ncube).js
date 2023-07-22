function logItems(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        console.log(i, j, k);
      }
    }
  }
}

logItems(10);

// This above code runs at O(ncude) which is the same this as O(nsquare) in time complexity
// In Conclusion a code with O(n) is much more better than a code of O(nsquare or ncude)
