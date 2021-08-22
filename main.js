//get update price 
function updatePriceList(catagoryID, cost) {
    const catagoryCost = document.getElementById(catagoryID);
    catagoryCost.innerText = cost;
    updateTotalPrice();
    total();
}

// update total price
function updateTotalPrice() {
    const bestPrice = document.getElementById("best-price");
    const bestPriceValue = parseInt(bestPrice.innerText);

    const extraMemoryCost = document.getElementById("extra-memory-cost");
    const extraMemoryCostValue = parseInt(extraMemoryCost.innerText);

    const extraStorageCost = document.getElementById("extra-storage-cost");
    const extraStorageCostValue = parseInt(extraStorageCost.innerText);

    const deliveryCharge = document.getElementById("delivery charge");
    const deliveryChargeValue = parseInt(deliveryCharge.innerText);

    const totalPrice = document.getElementById("total-price");

    totalPrice.innerText = bestPriceValue + extraMemoryCostValue + extraStorageCostValue + deliveryChargeValue;
}

function total() {
    const total = document.getElementById("total");
    const totalPrice = document.getElementById("total-price");
    total.innerText = parseInt(totalPrice.innerText);
}
// get discount with couponcode
const couponCode = [];
function pomoCodeApply() {
    const codeInput = document.getElementById("pomo");
    const pomoCode = codeInput.value;
    const totalPriceInDisplay = document.getElementById("total");
    const priceValue = parseInt(totalPriceInDisplay.innerText);

    if (couponCode.indexOf('stevekaku') !== -1) {
        alert('Code already used');
    }
    else if (pomoCode == 'stevekaku') {
        const discountPrice = priceValue - (priceValue * 0.2);
        console.log(discountPrice);
        totalPriceInDisplay.innerText = discountPrice;
    }
    else {
        alert('Invalid code');
    }
    couponCode.push(pomoCode);
    console.log(couponCode);
    codeInput.value = '';
}

// all button clicker

document.getElementById("memory-0").addEventListener('click', function () {
    updatePriceList("extra-memory-cost", 0);
})
document.getElementById("memory-1").addEventListener('click', function () {
    updatePriceList("extra-memory-cost", 180);
})
document.getElementById("storage-0").addEventListener('click', function () {
    updatePriceList("extra-storage-cost", 0);
})
document.getElementById("storage-1").addEventListener('click', function () {
    updatePriceList("extra-storage-cost", 100);
})
document.getElementById("storage-2").addEventListener('click', function () {
    updatePriceList("extra-storage-cost", 180);
})
document.getElementById("delivery-0").addEventListener('click', function () {
    updatePriceList("delivery charge", 0);
})
document.getElementById("delivery-1").addEventListener('click', function () {
    updatePriceList("delivery charge", 20);
})
document.getElementById("pomo-btn").addEventListener('click', function () {
    pomoCodeApply();
})