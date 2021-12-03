import getElement from "./getElement";
import {
    AFTER_ELEMENT_CLASS_NAME, AFTER_WRAPPER_CLASS_NAME,
    BEFORE_WRAPPER_CLASS_NAME,
    CONTAINER_CLASS_NAME, CONTAINER_DIAGONAL_CLASS_NAME, CONTAINER_HORIZONTAL_CLASS_NAME, CONTAINER_SQUARE_CLASS_NAME,
    SEPARATOR_ELEMENT_CLASS_NAME
} from "./css-names";

function getContainerClassName() {
    switch(this.options.direction) {
        case 'horizontal':
            return CONTAINER_HORIZONTAL_CLASS_NAME;
            break;
        case 'diagonal':
            return CONTAINER_DIAGONAL_CLASS_NAME;
            break;
        case 'square':
            return CONTAINER_SQUARE_CLASS_NAME;
            break;
        case 'vertical':
        default:
            return CONTAINER_CLASS_NAME;
    }
}

function build(resolve, reject) {
    this.container = getElement(this.options.container) || false;
    if(this.container) {

        this.container.className = getContainerClassName.call(this);
        if(this.options.className) this.container.className += ` ${this.options.className}`;

        this.beforeWrapper = document.createElement('DIV');
        this.beforeWrapper.className = BEFORE_WRAPPER_CLASS_NAME;

        this.beforeElement = document.createElement('IMG');
        this.beforeElement.src = this.container.getAttribute('data-before');
        this.beforeWrapper.append(this.beforeElement);

        this.afterWrapper = document.createElement('DIV');
        this.afterWrapper.className = AFTER_WRAPPER_CLASS_NAME;

        this.afterElement = document.createElement('IMG');
        this.afterElement.src = this.container.getAttribute('data-after');
        this.afterWrapper.append(this.afterElement);

        this.separator = document.createElement('DIV');
        this.separator.className = SEPARATOR_ELEMENT_CLASS_NAME;
        if(this.options.separator && this.options.separator.class) this.separator.className += ` ${this.options.separator.class}`;
        if(this.options.separator && this.options.separator.innerHTML) this.separator.innerHTML += ` ${this.options.separator.innerHTML}`;
        this.container.append(this.beforeWrapper, this.afterWrapper, this.separator);

        if(this.options.separator.innerHTML) this.separatorChildren = Array.prototype.slice.call(this.separator.children);


        const imgs = [this.beforeElement,this.afterElement];
        imgs.forEach(img => {
            // run several times - why?
            function onResolve(response) {
                if(response) {
                    img.removeEventListener('load',onLoadBind);
                    resolve();
                } else {
                    img.removeEventListener('error',onErrorBind);
                    reject(img.src);
                }
            }
            function onLoad() {
                if(checkComplete(imgs)) onResolve.call(this, true);
            }
            function onError() {
                onResolve.call(this, false);
            }
            var onLoadBind = onLoad.bind(this);
            img.addEventListener('load', onLoadBind)

            var onErrorBind = onError.bind(this);
            img.addEventListener('error', onErrorBind)
        })
    }
}

function checkComplete(imgs) {
    return imgs.length === imgs.reduce((prev,cur) => (cur.complete) ? prev + 1 : prev,0);
}
function buildOut() {
    return new Promise(build.bind(this));
}

export default buildOut;