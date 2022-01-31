let cartData = []
function renderCart(cartData) {
    const cartContainer = document.querySelector(".cart") 
    cartContainer.innerHTML =  ""
    for (let cartItem of cartData) {
        const div = document.createElement("div")
        div.classList.add("cart-item")
        div.innerHTML = `
        <div class= "cart-header">
            <h3>${cartItem.title}</h3>
             <b>${cartItem.productPrice} so'm</b>
        </div>
        <select onchange="changeProductQuantity(event, ${cartItem.id})">
            <option ${cartItem.quantity == 1 && "selected"}value="1">1</option>
            <option ${cartItem.quantity == 2 && "selected"}value="2">2</option>
            <option ${cartItem.quantity == 3 && "selected"}value="3">3</option>
            <option ${cartItem.quantity == 4 && "selected"}value="4">4</option>
        </select>
        <p>${ cartItem.totalPrice} so'm</p>
        <button onclick="removeCartItem(${cartItem.id})" data-cart-id="${cartItem.id}">O'cirish</button>
        `
        cartContainer.appendChild(div)
    }
}
function changeProductQuantity(event,  id) {
    const filtredCartItem = cartData.filter(cartItem => cartItem.id == id)[0]
    filtredCartItem.quantity = Number(event.target.value)
    filtredCartItem.totalPrice = filtredCartItem.productPrice * filtredCartItem.quantity

    renderCart(cartData)
}
function removeCartItem(cartId) {
    cartData = cartData.filter(cartItem => cartItem.id != cartId)
    renderCart(cartData)
}
// cartData = (cart)
renderCart(cartData)