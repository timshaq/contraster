import disableScroll from "../helpers/disableScroll";
import $doc from '../document-emitter';

function mouseMoveHandler(event) {
    if(event.touches) {
        disableScroll();
        this.container.style.pointerEvents = 'auto';

        // $doc.setTopScroll();
        $doc.setContainerMove(true);
    }
    let top = this.container.offsetTop;
    let bottom = top + this.container.offsetHeight;

    let posY;
    let posX;
    if(event.pageY)  {
        posY = event.pageY;
        posX = event.pageX;
    }
    if(event.touches) {
        posY = event.touches[0].pageY;
        posX = event.touches[0].pageX;
    }
    posY = posY - top;


    if(this.options.direction === 'vertical') {

        this.separator.classList.add(this.options.separator.activeClass);
        if(posX > 0) {
            if(posX < this.container.offsetWidth) {
                this.separator.style.cssText = `left: ${posX}px;`;
                this.beforeWrapper.style.cssText = `width: ${posX}px;`;
            } else {
                this.separator.style.cssText = `left: ${this.container.offsetWidth}px;`;
                this.beforeWrapper.style.cssText = `width: ${this.container.offsetWidth}px;`;
            }
        } else {
            this.beforeWrapper.style.cssText = 'width: 0px;';
            this.separator.style.cssText = 'left: 0px;';
        }
    }
    if(this.options.direction === 'horizontal') {
        console.log(posY)

        this.separator.classList.add(this.options.separator.activeClass);
        if(posY > 0) {
            console.log('posY > 0')
            if(posY < this.container.offsetHeight) {
                console.log('posY < this.container.offsetHeight')
                this.beforeWrapper.style.cssText = `height: ${posY}px;`;
                this.separator.style.cssText = `top: ${posY}px;`;
            } else {
                this.beforeWrapper.style.cssText = `height: ${this.container.offsetHeight}px;`;
                this.separator.style.cssText = `top: ${this.container.offsetHeight}px;`;
            }
        } else {
            console.log('posY < 0')
            this.beforeWrapper.style.cssText = 'height: 0px;';
            this.separator.style.cssText = 'top: 0px;';
        }
    }
    if(this.options.direction === 'diagonal') {

        let h = this.container.offsetHeight;
        let w = this.container.offsetWidth;

        let posYm = h * posX / w;
        let posXm = posY * w / h;
        // console.log(posY)

        posX = (posX+posXm)/2;
        posY = (posY+posYm)/2;

        this.separator.classList.add(this.options.separator.activeClass);
        if(posX > 0) {
            if(posX < this.container.offsetWidth) {
                this.separator.style.left = `${posX}px`;
                this.beforeWrapper.style.width = `${2*posX}px`;
            } else {
                this.separator.style.left = `${this.container.offsetWidth}px`;
                this.beforeWrapper.style.width = `${2*this.container.offsetWidth}px`;
            }
        } else {
            this.beforeWrapper.style.width = '0px';
            this.separator.style.left = '0px';
        }
        if(posY > 0) {
            if(posY < this.container.offsetHeight) {
                // this.beforeWrapper.style.height = `${posY}px`;
                this.separator.style.top = `${posY}px`;
            } else {
                // this.beforeWrapper.style.height = `${this.container.offsetHeight}px`;
                this.separator.style.top = `${this.container.offsetHeight}px`;
            }
        } else {
            // this.beforeWrapper.style.height = '0px;';
            this.separator.style.top = '0px';
        }
    }
    if(this.options.direction === 'square') {
        let top = this.container.offsetTop;
        let bottom = top + this.container.offsetHeight;

        let posY;
        let posX;
        if(event.pageY)  {
            posY = event.pageY;
            posX = event.pageX;
        }
        if(event.touches) {
            posY = event.touches[0].pageY;
            posX = event.touches[0].pageX;
        }
        posY = posY - top;

        this.separator.classList.add(this.options.separator.activeClass);
        if(posX > 0) {
            if(posX < this.container.offsetWidth) {
                this.separator.style.left = `${posX}px`;
                this.beforeWrapper.style.width = `${posX}px`;
            } else {
                this.separator.style.left = `${this.container.offsetWidth}px`;
                this.beforeWrapper.style.width = `${this.container.offsetWidth}px`;
            }
        } else {
            this.beforeWrapper.style.width = '0px';
            this.separator.style.left = '0px';
        }
        if(posY > 0) {
            if(posY < this.container.offsetHeight) {
                this.beforeWrapper.style.height = `${posY}px`;
                this.separator.style.top = `${posY}px`;
            } else {
                this.beforeWrapper.style.height = `${this.container.offsetHeight}px`;
                this.separator.style.top = `${this.container.offsetHeight}px`;
            }
        } else {
            this.beforeWrapper.style.height = '0px;';
            this.separator.style.top = '0px';
        }
    }
}

export default mouseMoveHandler;