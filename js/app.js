//totalPrice
const totalPrice = document.getElementById('total-price');
const pomoTotalPrice = document.getElementById('total');

//memoryUpdate
function memoryUpdate(amount){
    const memoryAmount = document.getElementById('memory-amount');
    const totalMemoryAmount = memoryAmount.innerText = amount;

    const storageAmount = document.getElementById('storage-amount').innerText;
    const totalStorageAmount = parseInt(storageAmount);
    const deliveryAmount = document.getElementById('delivery-amount').innerText;
    const totalDeliveryAmount = parseInt(deliveryAmount);
    totalPrice.innerText = parseInt(1299 + totalMemoryAmount + totalStorageAmount + totalDeliveryAmount);
    pomoTotalPrice.innerText = parseInt(1299 + totalMemoryAmount + totalStorageAmount + totalDeliveryAmount);
}

//storageUpdate
function storageUpdate(amount){
    const storageAmount = document.getElementById('storage-amount');
    const totalStorageAmount = storageAmount.innerText = amount;

    const memoryAmount =  document.getElementById('memory-amount').innerText;
    const totalMemoryAmount = parseInt(memoryAmount);
    const deliveryAmount = document.getElementById('delivery-amount').innerText;
    const totalDeliveryAmount = parseInt(deliveryAmount);
    totalPrice.innerText = parseInt(1299 + totalMemoryAmount + totalStorageAmount + totalDeliveryAmount);
    pomoTotalPrice.innerText = parseInt(1299 + totalMemoryAmount + totalStorageAmount + totalDeliveryAmount);
}

//deliveryUpdate
function deliveryUpdate(amount){
    const deliveryAmount = document.getElementById('delivery-amount');
    const totalDeliveryAmount = deliveryAmount.innerText = amount;

    memoryStorageUpdate(totalDeliveryAmount);
}

function memoryStorageUpdate(totalDeliveryAmount){
    const memoryAmount =  document.getElementById('memory-amount').innerText;
    const totalMemoryAmount = parseInt(memoryAmount);
    const storageAmount = document.getElementById('storage-amount').innerText;
    const totalStorageAmount = parseInt(storageAmount);
    totalPrice.innerText = parseInt(1299 + totalMemoryAmount + totalStorageAmount + totalDeliveryAmount);
    pomoTotalPrice.innerText = parseInt(1299 + totalMemoryAmount + totalStorageAmount + totalDeliveryAmount);
}

// pomo code
function pomoCode(){
    const deliveryAmount = document.getElementById('delivery-amount').innerText;
    const totalDeliveryAmount = parseInt(deliveryAmount);
    memoryStorageUpdate(totalDeliveryAmount)

    const pomoCode = document.getElementById('pomo-code');
    const pomoCodeValue = pomoCode.value;
    if(pomoCodeValue.toLowerCase() == 'stevekaku'){
        const getPomo = totalPrice.innerText * 0.2;
        const total = totalPrice.innerText - getPomo;
        document.getElementById('total').innerText = total;
    }
    else if(pomoCode.value == ''){
        alert('Plese provide pomo code')
    }
    else{
        alert('Pomo code no match')
    }
    pomoCode.value = ''
}



