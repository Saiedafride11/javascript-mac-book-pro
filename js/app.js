/* ---------------- memoryUpdate ---------------------*/
function memoryUpdate(amount){
    const totalMemoryAmount = updateCatchCost('memory', amount);
    const totalStorageAmount = catchCost('storage');
    deliveryCodeUpdate(totalMemoryAmount, totalStorageAmount);
}

/*----------------- storageUpdate ---------------------*/
function storageUpdate(amount){
    const totalStorageAmount =  updateCatchCost('storage', amount);
    const totalMemoryAmount = catchCost('memory');
    deliveryCodeUpdate(totalStorageAmount, totalMemoryAmount);
}

/*---------------- deliveryUpdate ---------------------*/
function deliveryUpdate(amount){
    const totalDeliveryAmount = updateCatchCost('delivery', amount);
    memoryStorageUpdate(totalDeliveryAmount);
}

/*---------------- pomo code ---------------------------*/
function pomoCode(){
    const totalDeliveryAmount = catchCost('delivery');
    memoryStorageUpdate(totalDeliveryAmount);

    const pomoCode = document.getElementById('pomo-code');
    const pomoCodeValue = pomoCode.value;
    if(pomoCodeValue.toLowerCase() == 'stevekaku'){
        const getPomo = totalPrice.innerText * 0.2;
        const total = totalPrice.innerText - getPomo;
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

/*---------------- Single Id Update ---------------------------*/
function updateCatchCost(id, amount){
    const cost = document.getElementById(id + '-amount');
    const totalCost = cost.innerText = amount;
    return totalCost;
}

/*---------------- Single Id Update ---------------------------*/
function catchCost(id){
    const cost = document.getElementById(id + '-amount').innerText;
    const totalCost = parseInt(cost);
    return totalCost;
}

/* ---------------- totalPrice ---------------------*/
const totalPrice = document.getElementById('total-price');
const pomoTotalPrice = document.getElementById('total');

/*---------------- deliveryCodeUpdate ---------------------------*/
function deliveryCodeUpdate(totalStorageAmount, totalMemoryAmount){
    const totalDeliveryAmount = catchCost('delivery');
    totalPrice.innerText = parseInt(1299 + totalMemoryAmount + totalStorageAmount + totalDeliveryAmount);
    pomoTotalPrice.innerText = parseInt(1299 + totalMemoryAmount + totalStorageAmount + totalDeliveryAmount);
}

/*---------------- memoryStorageUpdate ---------------------------*/
function memoryStorageUpdate(totalDeliveryAmount){
    const totalMemoryAmount = catchCost('memory');
    const totalStorageAmount = catchCost('storage');
    totalPrice.innerText = parseInt(1299 + totalMemoryAmount + totalStorageAmount + totalDeliveryAmount);
    pomoTotalPrice.innerText = parseInt(1299 + totalMemoryAmount + totalStorageAmount + totalDeliveryAmount);
}
