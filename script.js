function calculateInterest() {
  var principal = parseFloat(document.getElementById('principal').value);
  var time = parseFloat(document.getElementById('time').value);
  var rate = parseFloat(document.getElementById('rate').value);

  var interest = (principal * time * rate) / 100;
  var totalAmount = principal + interest;

  document.getElementById('interest').textContent = interest.toFixed(2);
  document.getElementById('total').textContent = totalAmount.toFixed(2);
}
