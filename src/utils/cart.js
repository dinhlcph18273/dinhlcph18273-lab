import toastr from "toastr";
import { getLocalStrorange, setLocalStrorage } from ".";
import "toastr/build/toastr.min.css";

let cart = [];
if (localStorage.getItem("cart")) {
    cart = getLocalStrorange("cart");
}

// eslint-disable-next-line import/prefer-default-export
export const addToCart = (newItem, next) => {
    const existItem = cart.find((item) => item.id === newItem.id);
    if (!existItem) {
        cart.push(newItem);
    } else {
        // eslint-disable-next-line no-plusplus
        existItem.quantity += newItem.quantity;
    }
    setLocalStrorage("cart", cart);
    next();
};

export const increaseQuantityFromCart = (id, next) => {
    // eslint-disable-next-line no-plusplus
    cart.find((item) => item.id === id).quantity++;
    localStorage.setItem("cart", JSON.stringify(cart));
    next();
};
export const decreaseQuantityFromCart = (id, next) => {
    const currentProduct = cart.find((item) => item.id === id);
    // eslint-disable-next-line no-plusplus
    currentProduct.quantity--;
    if (currentProduct.quantity < 1) {
        const confirm = window.confirm("Chú có chắc chắn muốn xóa không?");
        if (confirm) {
            cart = cart.filter((item) => item.id !== id);
        }
        currentProduct.quantity += 1;
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    next();
};
export const removeItemFromCart = (id, next) => {
    const confirm = window.confirm("Chú có chắc muốn xóa không?");
    if (confirm) {
        cart = cart.filter((item) => item.id !== id);
        toastr.success("Xóa thành công");
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    next();
};
export const getTotalPrice = () => {
    if (localStorage.getItem("cart")) {
        cart = getLocalStrorange("cart");
    }
    const user = JSON.parse(localStorage.getItem("user"));
    let toTal = 0;
    cart = cart.filter((item) => item.user === user.id);
    cart.forEach((element) => {
        toTal += Number(element.price) * element.quantity;
    });
    return toTal;
};