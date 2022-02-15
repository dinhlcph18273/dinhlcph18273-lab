// eslint-disable-next-line import/prefer-default-export
export const reRender = async(component, domElement) => {
    if (component) {
        document.querySelector(domElement).innerHTML = await component.print();
    }
    if (component.afterRender) await component.afterRender();
};

export const setLocalStrorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};
// eslint-disable-next-line consistent-return
export const getLocalStrorange = (key) => {
    if (localStorage.getItem(key)) {
        return JSON.parse(localStorage.getItem(key));
    }
};