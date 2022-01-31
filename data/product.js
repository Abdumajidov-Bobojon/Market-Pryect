const productsData = [
    {
        id: 1,
        title: "Non",
        price: 3000 
    },
    {
        id: 2,
        title: "Cola",
        price: 10000 
    },
    {
        id: 3,
        title: "Olma",
        price: 15000 
    },
    {
        id: 4,
        title: "Uzum",
        price: 7000 
    },

]

function renderProducts(products ) {
    const productsContainer =document.querySelector(".products-container")

    for (let product of products) {
        const div = document.createElement("div")
        div.classList.add("product")

        div.innerHTML = `
            <h3>${product.title}</h3>
            <b>${product.price} so'm</b>
            <button onclick="addProductToCart(${product.id }) " id="add-to-cart" data-product-id=${product.id}  >Savatcaga qo'shish</button>
        
        `
        productsContainer.appendChild(div)
    }
}

// function setListener() {
//     const buttons = document.querySelectorAll("#add-to-cart ")
         
//     for (let button of buttons) { 
//         const {productId} =  button.dataset
//         button.addEventListener ("click",function () {
//             addProductToCart(productId)  
//         })
//     }
// }

function addProductToCart(id) {
    const selectedProduct = productsData.filter(product => product.id == id)
    const selectedProductPrice = selectedProduct[0].price
    const selectedProductTitle = selectedProduct[0].title
    const selectedProductId = selectedProduct[0].id
    const hasSameProduct = cartData.filter(cartItem => cartItem.productId == id).length > 0

    if(hasSameProduct) return alert("Bu maxsulot alaqacon savatta")
    cartData.push({
        id: cartData.length + 1,
        productId: selectedProductId,
        title: selectedProductTitle,
        productPrice: selectedProductPrice,
        quantity: 1,
        totalPrice: selectedProductPrice
    })
    renderCart(cartData)
}
renderProducts(productsData)
setListener()