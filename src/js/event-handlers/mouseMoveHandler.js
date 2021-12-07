function mouseMoveHandler($, $doc, event) {
    let top = $.container.offsetTop;

    let posY;
    let posX;

    if(event.touches) {
        $doc.setContainerMove(true);
        posY = event.touches[0].pageY;
        posX = event.touches[0].pageX;
    }

    if(event.pageY)  {
        posY = event.pageY;
        posX = event.pageX;
    }

    posY = posY - top;

    $.separator.classList.add($.options.separator.activeClass);

    if($.options.direction === 'vertical') {
        if(posX > 0) {
            if(posX < $.container.offsetWidth) {
                $.separator.style.cssText = `left: ${posX}px;`;
                $.beforeWrapper.style.cssText = `width: ${posX}px;`;
            } else {
                $.separator.style.cssText = `left: ${$.container.offsetWidth}px;`;
                $.beforeWrapper.style.cssText = `width: ${$.container.offsetWidth}px;`;
            }
        } else {
            $.beforeWrapper.style.cssText = 'width: 0px;';
            $.separator.style.cssText = 'left: 0px;';
        }
    }
    if($.options.direction === 'horizontal') {
        if(posY > 0) {
            if(posY < $.container.offsetHeight) {
                $.beforeWrapper.style.cssText = `height: ${posY}px;`;
                $.separator.style.cssText = `top: ${posY}px;`;
            } else {
                $.beforeWrapper.style.cssText = `height: ${$.container.offsetHeight}px;`;
                $.separator.style.cssText = `top: ${$.container.offsetHeight}px;`;
            }
        } else {
            $.beforeWrapper.style.cssText = 'height: 0px;';
            $.separator.style.cssText = 'top: 0px;';
        }
    }
    if($.options.direction === 'diagonal') {

        let h = $.container.offsetHeight;
        let w = $.container.offsetWidth;

        let posYm = h * posX / w;
        let posXm = posY * w / h;

        posX = (posX+posXm)/2;
        posY = (posY+posYm)/2;

        if(posX > 0) {
            if(posX < $.container.offsetWidth) {
                $.separator.style.left = `${posX}px`;
                $.beforeWrapper.style.width = `${2*posX}px`;
            } else {
                $.separator.style.left = `${$.container.offsetWidth}px`;
                $.beforeWrapper.style.width = `${2*$.container.offsetWidth}px`;
            }
        } else {
            $.beforeWrapper.style.width = '0px';
            $.separator.style.left = '0px';
        }
        if(posY > 0) {
            if(posY < $.container.offsetHeight) {
                $.separator.style.top = `${posY}px`;
            } else {
                $.separator.style.top = `${$.container.offsetHeight}px`;
            }
        } else {
            $.separator.style.top = '0px';
        }
    }
}

export default mouseMoveHandler;