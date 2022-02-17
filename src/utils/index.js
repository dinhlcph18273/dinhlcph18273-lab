// eslint-disable-next-line import/prefer-default-export
export const reRender = async(component, domElement, arr) => {
    if (component) {
        document.querySelector(domElement).innerHTML = await component.print(arr);
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

export const filproduct = (data, id) => {
    let category = [];
    category = data.filter((item) => item.category === id);
    return category;
};
const changeAlias = (alias) => {
    let str = alias;
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, " ");
    str = str.replace(/ + /g, " ");
    str = str.trim();
    return str;
};
export const search = (data, text) => {
    let sea = [];
    // console.log(changeAlias("haha").includes(text.toLowerCase()));
    sea = data.filter((item) => changeAlias(item.title).includes(text.toLowerCase()));
    return sea;
};