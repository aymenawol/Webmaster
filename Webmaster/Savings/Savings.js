function calculateTaxRebate() {
  const cost = parseFloat(document.getElementById('cost').value);

  // Calculating the tax credit as 30% of the cost of green energy solutions
  const taxCredit = cost * 0.3;



  const resultElement = document.getElementById('result');
  resultElement.innerHTML = `Your potential tax credit is: $${taxCredit.toFixed(2)}`;
}

