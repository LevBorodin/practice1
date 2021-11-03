let cart = {
    "fh3hd" : 0,
}

document.onclick = event => {
    if (event.target.classList.contains("plus")) {
        plusFunction(event.target.dataset.id);
    }
    if (event.target.classList.contains("minus")) {
        minusFunction(event.target.dataset.id);
    }
}

const plusFunction = id => {
    if (cart[id] == undefined){
        createFunction(id);
        return true;
    }
    cart[id]++;
    renderCart();
}

const createFunction = id => {
    cart[id] = 1;
    renderCart();
}

const minusFunction = id => {
    if (cart[id]-1 < 0) {
        deleteFunction(id);
        return true;
    }
    cart[id]--;
    renderCart();
}

const deleteFunction = id => {
    delete cart[id];
    renderCart();
}

const renderCart = () => {
    console.log(cart);
    let a = document.getElementById("test").innerHTML;
    let a1 = document.getElementById("test1").innerHTML;
    let out="";
    for (let key in cart) {
        out += cart[key];
    }
    let b = parseInt(a, 10);
    let b1 = parseInt(a1, 10);
    b= 0;
    b += out;
    b = parseInt(b, 10);
    console.log(b);
    document.getElementById("test").innerHTML = b;
    b1= 0;
    b1 += out;
    b1 = parseInt(b1, 10);
    console.log(b1);
    document.getElementById("test1").innerHTML = b1;
}

renderCart();