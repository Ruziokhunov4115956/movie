let createElement = function (tagName, className, text) {
    let element = document.createElement(tagName);
    element.setAttribute('class', className);
    if (text) {
        element.innerHTML = text;
    }
    return element;
};

