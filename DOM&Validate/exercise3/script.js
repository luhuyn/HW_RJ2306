document.addEventListener('DOMContentLoaded', function() {
    var emailInput = document.getElementById("email");

    emailInput.addEventListener('input', function() {
        var email = emailInput.value;
        if (isValidEmail(email)) {
            console.log("Valid email address.");
        } else {
            console.log("Invalid email address.");
        }
    });

    function isValidEmail(email) {
        var emailRegex = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/;
        return emailRegex.test(email);
    }
});
  