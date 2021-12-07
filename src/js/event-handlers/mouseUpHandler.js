function mouseUpHandler($, $doc, mouseMoveHandler) {
    $doc.removeOn('mousemove', mouseMoveHandler);
    $.separator.classList.remove($.options.separator.activeClass);
}

export default mouseUpHandler;