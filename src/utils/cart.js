import { getLocalStrorange, setLocalStrorage } from ".";

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
        existItem.quantity++;
    }
    setLocalStrorage("cart", cart);
    next();
};

export const increaseQuantityFromCart = () => {

};
export const decreaseQuantityFromCart = () => {

};
export const removeItemFromCart = () => {

};
export const getTotalPrice = () => {

};