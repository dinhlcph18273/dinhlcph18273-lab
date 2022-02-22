import instance from "./instance";

export const getAllOrder = () => {
    const url = "/order";
    return instance.get(url);
};
export const get = (id) => {
    const url = `/order/${id}`;
    return instance.get(url, id);
};
// eslint-disable-next-line import/prefer-default-export
export const addorder = (order) => {
    const url = "/order";
    return instance.post(url, order);
};
export const removeOrder = (id) => {
    const url = `/order/${id}`;
    return instance.delete(url);
};

export const updatett = (id, data) => {
    const url = `/order/${id}`;
    return instance.patch(url, data);
};