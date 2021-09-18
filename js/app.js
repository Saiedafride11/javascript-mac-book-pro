/*---------------- catchCost ---------------------------*/
function catchCost(id){
    const cost = document.getElementById(id + '-amount');
    const totalCost = parseInt(cost.innerText);
    return totalCost;
}

/* ---------------- calculateTotal ---------------------*/
function calculateTotal(){
    const memoryAmount = catchCost('memory');
    const storageAmount = catchCost('storage');
    const deliveryAmount = catchCost('delivery');
    document.getElementById('total-price').innerText = (1299 + memoryAmount + storageAmount + deliveryAmount)
    document.getElementById('total').innerText = (1299 + memoryAmount + storageAmount + deliveryAmount)
}

/* ---------------- memoryUpdate ---------------------*/
function memoryUpdate(amount){
    document.getElementById('memory-amount').innerText = amount;
    calculateTotal();
}

/* ---------------- storageUpdate ---------------------*/
function storageUpdate(amount){
    document.getElementById('storage-amount').innerText = amount;
    calculateTotal();
}

/* ---------------- deliveryUpdate ---------------------*/
function deliveryUpdate(amount){
    document.getElementById('delivery-amount').innerText = amount;
    calculateTotal();
}

/*---------------- pomo code ---------------------------*/
function pomoCode(){
    const totalPrice = document.getElementById('total').innerText;
    
    const pomoCode = document.getElementById('pomo-code');
    const pomoCodeValue = pomoCode.value;
    if(pomoCodeValue.toLowerCase() == 'stevekaku'){
        const getPomo = totalPrice * 0.2;
        const total = totalPrice - getPomo;
        document.getElementById('total').innerText = total;
        pomoCode.style.display = 'none';
        document.querySelector('.btn-danger').innerText = 'Pomo Applied';
    }
    else if(pomoCode.value == ''){
        alert('Plese provide pomo code');
    }
    else{
        alert('Pomo code no match');
    }
    pomoCode.value = '';
}



