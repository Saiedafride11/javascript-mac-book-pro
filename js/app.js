
//totalPrice
const totalPrice = document.querySelector('.total-price');
const totalPriceText = totalPrice.innerText;
const PreviousTotalPrice = parseInt(totalPriceText);


    // const totalPrice = document.querySelectorAll('.total-price');
    // for(const price of totalPrice){
    //     const totalPriceText = price.innerText;
    //     PreviousTotalPrice = parseInt(totalPriceText);
    // }


//memoryButton
const memoryOneButton = document.getElementById('memory-one-button');
memoryOneButton.addEventListener('click', function(){
    const memoryCost = document.getElementById('memory-cost');
    const totalMemoryCost = memoryCost.innerText = 0;

    memoryInfo(totalMemoryCost);

})

const memoryTwoButton = document.getElementById('memory-two-button');
memoryTwoButton.addEventListener('click', function(){
    const memoryCost = document.getElementById('memory-cost');
    const totalMemoryCost = memoryCost.innerText = 180;
     
    memoryInfo(totalMemoryCost);
})

function memoryInfo(totalMemoryCost){
    const storageCost = document.getElementById('storage-cost').innerText;
    const totalStorageCost = parseInt(storageCost);
    const deliveryCharge = document.getElementById('delivery-charge').innerText;
    const totalDeliveryCharge = parseInt(deliveryCharge);
    totalPrice.innerText = parseInt(PreviousTotalPrice + totalMemoryCost + totalStorageCost + totalDeliveryCharge);
}

//storageButton

const storageOneButton = document.getElementById('storage-one-button');
storageOneButton.addEventListener('click', function(){
    const storageCost = document.getElementById('storage-cost');
    const totalStorageCost = storageCost.innerText = 0;

    storageInfo(totalStorageCost);
})

const storageTwoButton = document.getElementById('storage-two-button');
storageTwoButton.addEventListener('click', function(){
    const storageCost = document.getElementById('storage-cost');
    const totalStorageCost = storageCost.innerText = 100;

    storageInfo(totalStorageCost);
})

const storageThreeButton = document.getElementById('storage-three-button');
storageThreeButton.addEventListener('click', function(){
    const storageCost = document.getElementById('storage-cost');
    const totalStorageCost = storageCost.innerText = 180;

    storageInfo(totalStorageCost);
})

function storageInfo(totalStorageCost){
    const memoryCost =  document.getElementById('memory-cost').innerText;
    const totalMemoryCost = parseInt(memoryCost);
    const deliveryCharge = document.getElementById('delivery-charge').innerText;
    const totalDeliveryCharge = parseInt(deliveryCharge);
    totalPrice.innerText = parseInt(PreviousTotalPrice + totalMemoryCost + totalStorageCost + totalDeliveryCharge);
}

//deliveryButton
const deliveryOneButton = document.getElementById('delivery-one-button');
deliveryOneButton.addEventListener('click', function(){
    const deliveryCharge = document.getElementById('delivery-charge');
    const totalDeliveryCharge = deliveryCharge.innerText = 0;

    deliveryInfo(totalDeliveryCharge);
})

const deliveryTwoButton = document.getElementById('delivery-two-button');
deliveryTwoButton.addEventListener('click', function(){
    const deliveryCharge = document.getElementById('delivery-charge');
    const totalDeliveryCharge = deliveryCharge.innerText = 20;

    deliveryInfo(totalDeliveryCharge);
})

function deliveryInfo(totalDeliveryCharge){
    const memoryCost =  document.getElementById('memory-cost').innerText;
    const totalMemoryCost = parseInt(memoryCost);
    const storageCost = document.getElementById('storage-cost').innerText;
    const totalStorageCost = parseInt(storageCost);
    totalPrice.innerText = parseInt(PreviousTotalPrice + totalMemoryCost + totalStorageCost + totalDeliveryCharge);
}

// pomo code
function pomoCode(){
    const deliveryCharge = document.getElementById('delivery-charge').innerText;
    const totalDeliveryCharge = parseInt(deliveryCharge);
    deliveryInfo(totalDeliveryCharge);

    const pomoCode = document.getElementById('pomo-code');
    const pomoCodeValue = pomoCode.value;
    if(pomoCodeValue.toLowerCase() == 'stevekaku '){
        const getPomo = totalPrice.innerText * 0.25;
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



