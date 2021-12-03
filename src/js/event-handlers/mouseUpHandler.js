import $doc from "../document-emitter";

function mouseUpHandler($, mouseMoveHandler, event) {
    console.log('up')
    $doc.removeOn('mousemove', mouseMoveHandler);
    $.separator.classList.remove($.options.separator.activeClass);
}

export default mouseUpHandler;