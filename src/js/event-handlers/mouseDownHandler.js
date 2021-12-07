function mouseDownHandler($, $doc, mouseMoveHandler, event) {
    if(event.button === 0 || event.touches) {
        const isSeparatorChildren = $.separatorChildren && $.separatorChildren.includes(event.target);
        if($.options.freePosition) {
            if(event.target === $.container || isSeparatorChildren || event.target === $.separator) {
                mouseMoveHandler(event)
                $doc.on('mousemove', mouseMoveHandler);
            }
        } else if(event.target === $.separator || isSeparatorChildren ) {
            $doc.on('mousemove', mouseMoveHandler);
        }
    }
}
export default mouseDownHandler;