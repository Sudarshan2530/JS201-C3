
let purchased = JSON.parse(localStorage.getItem('purchase'));



let div = document.createElement('div')
// div.setAttribute('id', 'purchased_vouchers')
let img = document.createElement('img')
img.src = purchased.image;

let name = document.createElement('p');
name.innerText = purchased.name;

div.append(img, name)
document.getElementById('purchased_vouchers').append(div);
