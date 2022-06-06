document.querySelector('form').addEventListener('submit', signUp)

let user = JSON.parse(localStorage.getItem('user'))||[];

function signUp(){
    event.preventDefault();
    console.log("worked");

    let signUpObj = {

        name : document.getElementById('name').value,
        email: document.getElementById('email').value,
        add : document.getElementById('address').value,
        amount : document.getElementById('amount').value,
    }

    user.push(signUpObj);
    console.log(user);
    localStorage.setItem('user', JSON.stringify(user))
    window.location.href = 'voucher.html'
}