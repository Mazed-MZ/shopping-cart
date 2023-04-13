function updateQnty(isIncrease, value){
    const iphoneQuantity = document.getElementById(value);
    const IphoneQntyString = iphoneQuantity.value;
    const previousIphoneQnty = parseInt(IphoneQntyString);
    
    let newIphoneQnty;
    if(isIncrease === true){
        newIphoneQnty = previousIphoneQnty + 1;
    }
    else{
        newIphoneQnty = previousIphoneQnty - 1;
    }
    iphoneQuantity.value = newIphoneQnty;
    return newIphoneQnty;
}

function updatePhonePrice(newIphoneQnty, value){
    const iphoneTotalPrice = newIphoneQnty * 1219;
    const iphoneTotalElement = document.getElementById(value);
    iphoneTotalElement.innerText = iphoneTotalPrice;
    return iphoneTotalPrice;
}

function updateCasePrice(newIphoneQnty, value){
    const CaseTotalPrice = newIphoneQnty * 59;
    const CaseTotalElement = document.getElementById(value);
    CaseTotalElement.innerText = CaseTotalPrice;
    return CaseTotalPrice;
}

function getElementById(value){
    const phoneTotalElement = document.getElementById(value)
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}

function calculateSubtotal(elementID){
    const currentPhoneTotal = getElementById("iphone-price");
    const currentCoverTotal = getElementById("cover-price");
    const currentSubtotal = currentPhoneTotal + currentCoverTotal;
    const subtotalElement = document.getElementById(elementID);
    subtotalElement.innerText = currentSubtotal;
    return currentSubtotal;
}

function calculateTotal (value){
    const newTotal = getElementById("subtotal");
    const newTax = getElementById("tax");
    const sumTotal = newTotal + newTax;
    const totalElement = document.getElementById(value);
    totalElement.innerText = sumTotal;
}