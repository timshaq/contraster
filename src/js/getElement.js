function getElement(option) {
    if (option) {
        if(option.nodeType) {
            return option;
        } else if(typeof option === 'string') {
            return document.querySelector(arguments[0]);
        }
    }
    return null;
}
export default getElement;