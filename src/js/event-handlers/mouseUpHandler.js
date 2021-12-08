function mouseUpHandler($, $doc, mouseMoveHandler) {
    $doc.off('mousemove', mouseMoveHandler);
    $.separator.classList.remove($.options.separator.activeClass);
}

export default mouseUpHandler;