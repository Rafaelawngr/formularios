var firstName = localStorage.getItem('firstName');
var lastName = localStorage.getItem('lastName');
var address = localStorage.getItem('address');


document.getElementById('profileFirstName').textContent = firstName;
document.getElementById('profileLastName').textContent = lastName;
document.getElementById('profileAddress').textContent = address;

localStorage.clear();