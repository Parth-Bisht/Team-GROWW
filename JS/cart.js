// cart data show_________________________________________________________________________________________________

function gotostocks() {
    window.location.href = 'stocks.html';
}
let local = JSON.parse(localStorage.getItem("cartData")) || [];
display(local)

function display(local) {

    local.forEach((el) => {
        let cart = document.getElementById("addtocart")
        let div = document.createElement('div')
        div.setAttribute('id', "appendDiv")

        // div.style.border="1px solid red"

        let div1 = document.createElement('div')
        div1.style.display = "flex"

        let title = document.createElement("h4")
        title.setAttribute("id", "title")
        title.innerText = el.product_name;

        let image = document.createElement("img")
        image.src = el.product_image;
        image.setAttribute("id", "appendImage")
        image.style.height = "70px"


        let amount = document.createElement('p')
        amount.setAttribute("id", "amount")
        amount.innerText = "Amount : ₹ " + el.amount;
        amount.style.fontWeight = "600"


        div1.append(image, title)
        div.append(div1, amount)
        cart.append(div)


    })

    console.log(local)

    let sum = 0
    for (var j = 0; j < local.length; j++) {
        sum += Number(local[j].amount)
    }
    console.log(sum)
    let totalamount = document.getElementById("total_amount1-1")
    totalamount.innerText = "₹  " + sum
    totalamount.style.fontSize = "20px"
    totalamount.style.color = "black"
    totalamount.style.fontWeight = "bold"

}

let totalitems = document.getElementById("totalitem")
totalitems.innerText = "(" + local.length + ")"



