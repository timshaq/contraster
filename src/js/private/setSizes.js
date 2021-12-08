function setSizes() {
    switch (this.options.direction) {
        case 'horizontal':
            const h_pos = this.container.offsetHeight*this.options.progress/100;
            this.beforeWrapper.style.cssText = `height: ${h_pos}px;`;
            this.beforeElement.style.height = this.container.offsetHeight + 'px';
            this.separator.style.cssText = `top: ${h_pos}px;`;
            break;
        case 'diagonal':
            const w = this.container.offsetWidth;
            const h = this.container.offsetHeight;
            const dw = Math.sqrt(w*w+h*h);
            const a = 2*Math.atan(w/h)*180/Math.PI;
            const b = Math.atan(h/w)*180/Math.PI;
            const deg = -(90 - Math.atan(h/w)*180/Math.PI);
            const deg2 = deg * (-1);
            const sepDeg = a+b;
            this.beforeWrapper.style.cssText = `
                width: ${2*w*this.options.progress/100}px;
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
            this.separator.style.cssText = `
                width: ${dw}px;
                top: ${this.container.offsetHeight*this.options.progress/100}px;
                left: ${this.container.offsetWidth*this.options.progress/100}px;
                transform: translate(-50%,-50%) rotate(${sepDeg}deg)
            `;
            break;
        case 'vertical':
        default:
            const v_pos = this.container.offsetWidth*this.options.progress/100;
            this.beforeWrapper.style.cssText = `width: ${v_pos}px;`;
            this.separator.style.cssText = `left: ${v_pos}px;`;
            break;
    }
    this.emit('setSizes');
}

export default setSizes;