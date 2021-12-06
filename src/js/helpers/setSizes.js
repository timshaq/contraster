function setSizes() {
    if(this.options.width) this.container.style.width = this.options.width + 'px';
    if(this.options.height) this.container.style.height = this.options.height + 'px';

    switch (this.options.direction) {
        case 'horizontal':
            this.beforeWrapper.style.cssText = `height: ${this.container.offsetHeight/2}px;`;
            this.beforeElement.style.height = this.container.offsetHeight + 'px';
            this.separator.style.cssText = `top: ${this.container.offsetHeight/(100/this.options.separatorPosition)}px;`;
            break;
        case 'diagonal':
            // const deg = -45;
            const w = this.container.offsetWidth;
            const h = this.container.offsetHeight;
            const dw = Math.sqrt(w*w+h*h);
            const a = 2*Math.atan(w/h)*180/Math.PI;
            const b = Math.atan(h/w)*180/Math.PI;
            const deg = -(90 - Math.atan(h/w)*180/Math.PI);
            const deg2 = deg * (-1);
            const sepDeg = a+b
            const center = {
                x: w/2, y: h/2
            }
            this.beforeWrapper.style.cssText = `
                width: ${w}px;
                height: ${h}px;
                overflow: hidden;
                position: absolute;
                top: 0;
                left: 0;
                transform-origin: 100% 0;
                transform: skewX(${deg}deg);
            `;
            this.beforeElement.style.cssText = `
                width: ${w}px;
                transform-origin: inherit;
                transform: skewX(${deg2}deg);
            `;
            // this.beforeWrapper.style.cssText = `
            //     height: ${this.container.offsetHeight}px;
            //     width: ${this.container.offsetWidth}px;
            //     -webkit-clip-path: polygon(0 0, 0 ${this.container.offsetHeight}px, ${this.container.offsetWidth/4}px ${this.container.offsetHeight}px, ${3*this.container.offsetWidth/4}px 0);
            //     clip-path: polygon(0 0, 0 ${this.container.offsetHeight}px, ${this.container.offsetWidth/4}px ${this.container.offsetHeight}px, ${3*this.container.offsetWidth/4}px 0);
            // `;
            // this.beforeElement.style.height = this.container.offsetHeight + 'px';
            this.separator.style.cssText = `
                width: ${dw}px;
                top: ${this.container.offsetHeight/2}px;
                left: ${this.container.offsetWidth/2}px;
                transform: translate(-50%,-50%) rotate(${sepDeg}deg)
            `;
            break;
        case 'vertical':
        default:
            this.beforeWrapper.style.cssText = `width: ${this.container.offsetWidth/2}px;`;
            this.separator.style.cssText = `left: ${this.container.offsetWidth/(100/this.options.separatorPosition)}px;`;
            break;
    }

    // this.beforeElement.style.width = this.container.offsetWidth + 'px';
}

export default setSizes;