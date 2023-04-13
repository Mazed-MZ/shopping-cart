document.getElementById("iphone-plus").addEventListener("click", function(){
    const newIphoneQnty = updateQnty(true, "iPhone-qnty");
    updatePhonePrice(newIphoneQnty, "iphone-price");
    const currentPhoneTotal = calculateSubtotal("subtotal")
    const currentSubtotal = calculateTotal("total")
})

document.getElementById("iphone-minus").addEventListener("click", function(){
    const newIphoneQnty = updateQnty(false, "iPhone-qnty");
    updatePhonePrice(newIphoneQnty, "iphone-price");
    const currentPhoneTotal = calculateSubtotal("subtotal")
    const currentSubtotal = calculateTotal("total")
})

document.getElementById("case-plus").addEventListener("click", function(){
    const newIphoneQnty = updateQnty(true, "case-qnty");
    updateCasePrice(newIphoneQnty, "cover-price");
    const currentPhoneTotal = calculateSubtotal("subtotal")
    const currentSubtotal = calculateTotal("total")
})

document.getElementById("case-minus").addEventListener("click", function(){
    const newIphoneQnty = updateQnty(false, "case-qnty");
    updateCasePrice(newIphoneQnty, "cover-price");
    const currentPhoneTotal = calculateSubtotal("subtotal")
    const currentSubtotal = calculateTotal("total")
})