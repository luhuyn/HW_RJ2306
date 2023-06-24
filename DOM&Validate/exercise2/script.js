function is_usZipCode(str) {
    regexp = /^[0-9]{5}(?:-[0-9]{4})?$/;
    if (regexp.test(str)) {
        return true;
    } 
    return false;
}
var zipcode = "03201 - 1707";
console.log(is_usZipCode(zipcode));
zipcode = "8345";
console.log(is_usZipCode(zipcode));