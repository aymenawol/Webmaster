function calculateTaxRebate() {
  const cost = parseFloat(document.getElementById('cost').value);
  let year = parseFloat(document.getElementById('years').value);

  // Calculating the tax credit as 30% of the cost of green energy solutions
  const taxCredit = cost * 0.3;
  // Storing the number in a seperate variable
  let finalTaxCredit = taxCredit.toFixed(2);
  let totalTaxCredit = 0;


  const resultElement = document.getElementById('result');
  //If statement to check if tax credit exceeds 10k
  if (finalTaxCredit > 10000.00 && year > 10){
    finalTaxCredit = 10000.00;
    year = 10;
    totalTaxCredit = finalTaxCredit*year;
    totalTaxCredit = totalTaxCredit.toFixed(2);
    resultElement.innerHTML = `Your potential tax credit annually is: $${finalTaxCredit}. You've reached the maximum annual amount!
    Your total credit amassed over ${year} years is <em>$${totalTaxCredit}!</em> (You cannot earn credit for more than 10 years.)`;
  }
  else if (finalTaxCredit > 10000.00){
    finalTaxCredit = 10000.00;
    totalTaxCredit = finalTaxCredit*year;
    totalTaxCredit = totalTaxCredit.toFixed(2);
    resultElement.innerHTML = `Your potential tax credit annually is: $${finalTaxCredit}. You've reached the maximum annual amount!
    Your total credit amassed over ${year} year(s) is <em>$${totalTaxCredit}!</em>`;
  }
  else if (year > 10){
    year = 10;
    totalTaxCredit = finalTaxCredit*year;
    totalTaxCredit = totalTaxCredit.toFixed(2);
    resultElement.innerHTML = `Your potential tax credit annually is: $${finalTaxCredit}.
    Your total credit amassed over ${year} years is <em>$${totalTaxCredit}!</em> (You cannot earn credit for more than 10 years.)`;
  }
  else {
    totalTaxCredit = finalTaxCredit*year;
    totalTaxCredit = totalTaxCredit.toFixed(2);
    resultElement.innerHTML = `Your potential tax credit anually is: $${finalTaxCredit}.
    Your total credit amassed over ${year} year(s) is <em>$${totalTaxCredit}!</em>`;
  }
}

