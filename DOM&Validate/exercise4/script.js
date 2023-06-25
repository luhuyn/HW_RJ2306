document.addEventListener('DOMContentLoaded', function() {
    var accountNameInput = document.getElementById("account_name");
  
    accountNameInput.addEventListener('input', function() {
      var accountName = accountNameInput.value;
      if (isValidAccountName(accountName)) {
        console.log("Valid account name.");
      } else {
        console.log("Invalid account name");
      }
    });
  
    function isValidAccountName(accountName) {
      var accountRegex = /^[_a-z0-9]{6,}$/;
      return accountRegex.test(accountName);
    }
  });
  