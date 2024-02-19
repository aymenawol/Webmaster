function calculateTaxRebate() {
    const cost = parseFloat(document.getElementById('cost').value);
    const savings = parseFloat(document.getElementById('savings').value);
  
    // Assuming a flat rebate rate of 10% of the cost of green energy solutions
    const rebate = cost * 0.1;
  
    // Assuming additional rebate based on energy savings: $100 for every $1000 saved annually
    const additionalRebate = (savings / 1000) * 100;
  
    const totalRebate = rebate + additionalRebate;
  
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `Your potential tax rebate is: $${totalRebate.toFixed(2)}`;
  }
  