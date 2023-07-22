function logItems(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j); // O(n square)
    }
  }

  for (let k = 0; k < n; k++) {
    console.log(k); // O(n)
  }
}

logItems(10);

// This Code runs in O(n square + n) which means O(n square) is Dominant than O(n) .
// In Conclusion the code runs in O(n square) because it is Dominant.
