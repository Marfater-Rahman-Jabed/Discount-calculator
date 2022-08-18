function getInformation(elementId) {
    const getAmountElement = document.getElementById(elementId);
    const getAmountString = getAmountElement.value;
    // getAmountElement.value = '';
    const Amount = parseFloat(getAmountString);
    return Amount;
}

function GetCouponCode(elementId) {
    const getCouponElement = document.getElementById(elementId);
    const getCouponString = getCouponElement.value;
    // getCouponElement.value = '';
    return getCouponString;
}

function updateBill(elementId) {
    const getUpdateElement = document.getElementById(elementId);
    const getUpdate = getUpdateElement.innerText;
    const getUpdateValue = parseFloat(getUpdate);
    return getUpdateValue;
}

function setvalue(elementId, elementvalue) {
    const newBill = document.getElementById(elementId);
    newBill.innerText = elementvalue;
}


document.getElementById('btn-discount').addEventListener('click', function () {
    const AmountOfBill = getInformation('input-bill');
    const AmountOfDiscount = getInformation('input-discount');
    const Coupon = GetCouponCode('input-coupon');
    // console.log(AmountOfBill, AmountOfDiscount, Coupon);
    // console.log('buttonclicked')

    const totalBillPrevious = updateBill('total-bill');
    const totalDiscount = updateBill('get-discount');
    if (isNaN(AmountOfBill) || isNaN(AmountOfDiscount)) {
        alert('Please enter valid amount');
    }

    else if (Coupon == 'JABED VAI ER FRIEND' && isNaN(AmountOfBill) != true && isNaN(AmountOfDiscount) != true) {
        const calculation = AmountOfBill - (AmountOfBill * (AmountOfDiscount / 100));
        alert('Congratulations!! You get discount from our resturent..Thank You')
        setvalue('total-bill', calculation);
        setvalue('get-discount', (AmountOfBill * (AmountOfDiscount / 100)))
    }
    else if (Coupon != 'JABED VAI ER FRIEND' && isNaN(AmountOfBill) != true && isNaN(AmountOfDiscount) != true) {
        const calculation = AmountOfBill;
        alert('Sorry!!! Your Promo code Does not valid.You have to paid full amount. Thank you')
        setvalue('total-bill', calculation);
        setvalue('get-discount', 0)
    }




})