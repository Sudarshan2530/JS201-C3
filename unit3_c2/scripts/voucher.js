

//https://masai-vouchers-api.herokuapp.com/api/vouchers

const url = 'https://masai-vouchers-api.herokuapp.com/api/vouchers';





let voucherDiv = document.getElementById('voucher_list');


fetch(url)
.then((res)=>{
    return res.json();
})
.then((res)=>{
    console.log('working')
    appendVouchers(res[0].vouchers);
})
.catch((err)=>{
    console.log(err);
})

function appendVouchers(voucher_data){
    voucherDiv.innerHTML = null;

    voucher_data.forEach(function(ele){
        let div = document.createElement('div')
        let img = document.createElement('img')
        img.src = ele.image;

        let name = document.createElement('p');
        name.innerText = ele.name;

        let price = document.createElement('p');
        price.innerText = ele.price;

        let buyBtn = document.createElement('button')
        buyBtn.innerText = 'Buy';
        buyBtn.addEventListener('click', function(){
            purchaseVoucher(ele)
        })
        buyBtn.setAttribute('class', 'buy_voucher');
        div.append(img, name, price, buyBtn)
        voucherDiv.append(div);
    });
}

function purchaseVoucher(bought){
    localStorage.setItem('purchase', JSON.stringify(bought));
    window.location.href = 'purchase.html'
    alert("Hurray! purchase successful");
}