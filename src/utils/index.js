// eslint-disable-next-line import/prefer-default-export
export const reRender = async(component, domElement) => {
    if (component) {
        document.querySelector(domElement).innerHTML = await component.print();
    }
    if (component.afterRender) await component.afterRender();
};