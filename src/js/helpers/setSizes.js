function setSizes() {
    if(this.options.width) this.container.style.width = this.options.width + 'px';
    if(this.options.height) this.container.style.height = this.options.height + 'px';

    switch (this.options.direction) {
        case 'horizontal':
            const h_pos = this.container.offsetHeight*this.options.separatorPosition/100;
            this.beforeWrapper.style.cssText = `height: ${h_pos}px;`;
            this.beforeElement.style.height = this.container.offsetHeight + 'px';
            this.separator.style.cssText = `top: ${h_pos}px;`;
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
            console.log(
                `
                w: ${w},
                h: ${h},
                dw: ${dw},
                a: ${a},
                b: ${b},
                deg: ${deg},
                deg2: ${deg2},
                sepDeg: ${sepDeg}
                `
            )
            this.beforeWrapper.style.cssText = `
                width: ${2*w*this.options.separatorPosition/100}px;
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
                top: ${this.container.offsetHeight*this.options.separatorPosition/100}px;
                left: ${this.container.offsetWidth*this.options.separatorPosition/100}px;
                transform: translate(-50%,-50%) rotate(${sepDeg}deg)
            `;
            break;
        case 'vertical':
        default:
            const v_pos = this.container.offsetWidth*this.options.separatorPosition/100;
            this.beforeWrapper.style.cssText = `width: ${v_pos}px;`;
            this.separator.style.cssText = `left: ${v_pos}px;`;
            break;
    }
}

export default setSizes;