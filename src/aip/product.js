import instance from "./instance";

export const getproductAll = () => {
    const url = "/products";
    return instance.get(url);
};
export const getproduct = (id) => {
    const url = `/products/${id}`;
    return instance.get(url, id);
};
export const addproduct = (product) => {
    const url = "/products";
    return instance.post(url, product);
};
export const removeproduct = (id) => {
    const url = `/products/${id}`;
    return instance.delete(url, id);
};
export const updateproduct = (product) => {
    const url = `/products/${product.id}`;
    return instance.put(url, product);
};