import buildOut from './buildOut';
import {SEPARATOR_ACTIVE_CLASS_NAME} from "./css-names";
import sendError from "./helpers/sendError";
import setSizes from "./helpers/setSizes";
import mouseMoveHandler from "./event-handlers/mouseMoveHandler";
import extendDefaults from "./helpers/extendDefaults";
import $doc from './document-emitter';

function BeforeAfter() {
    this.container = null;

    this.beforeWrapper = null;
    this.afterWrapper = null;

    this.separatorElement = null;
    this.separatorChildren = null;

    this.mouseScreenX = null;

    this.eventsListeners = {};

    const defaults = {
        direction: 'vertical',
        test: true,
        freePosition: false,
        init: true,
        separator: {
            activeClass: SEPARATOR_ACTIVE_CLASS_NAME,
        },
    };

    if (arguments[0] && typeof arguments[0] === "object") {
        this.options = extendDefaults(defaults, arguments[0]);
    }

    const mouseMoveHandlerBind = mouseMoveHandler.bind(this);
    const $ = this;

    function mouseDownHandler(event) {
        console.log('down')
        const isSeparatorChildren = $.separatorChildren && $.separatorChildren.includes(event.target);
        if($.options.freePosition) {
            if(event.target === $.container || isSeparatorChildren || event.target === $.separator) {
                mouseMoveHandlerBind(event)
                $doc.on('mousemove', mouseMoveHandlerBind);
            }
        } else if(event.target === $.separator || isSeparatorChildren ) {
            $doc.on('mousemove', mouseMoveHandlerBind);
        }
    }
    function mouseUpHandler(event) {
        console.log('up')
        $doc.removeOn('mousemove', mouseMoveHandlerBind);
        $.separator.classList.remove($.options.separator.activeClass);
    }

    this.init = function() {

        buildOut.call($).then(() => {
            if(!$.container) return sendError('container not found');
            setSizes.call($);

            $doc.on('mousedown', mouseDownHandler);
            $doc.on('mouseup', mouseUpHandler);
            $doc.on('resize', setSizes.bind($));
        })
    }

    this.destroy = function() {
        if($.container) {
            $.container.innerHTML = '';
            $.container.removeAttribute('class');
            $doc.removeOn('mousedown', mouseDownHandler);
            $doc.removeOn('mouseup', mouseUpHandler);
            $doc.removeOn('resize', setSizes.bind($));
        }
        $.emit('destroy');
    }

    if(this.options.init) this.init();

}

// emmitter
BeforeAfter.prototype.on = function(name, listener) {
    if (!this.eventsListeners[name]) {
        this.eventsListeners[name] = [];
    }

    this.eventsListeners[name].push(listener);
}
BeforeAfter.prototype.removeOn = function(name, listenerToRemove) {
    if (!this.eventsListeners[name]) {
        return sendError("Can't remove a listener. Event \"" + name + "\" doesn't exits.");
    }

    function filterListeners(listener) {
        return listener !== listenerToRemove;
    }

    this.eventsListeners[name] = this.eventsListeners[name].filter(filterListeners);
}
BeforeAfter.prototype.emit = function(name, data) {
    if (!this.eventsListeners[name]) return;

    function fireCallbacks(callback){
        callback(data);
    }

    this.eventsListeners[name].forEach(fireCallbacks);
}
BeforeAfter.prototype.test = function(name, listener) {
    console.log(this.options)
}

export default BeforeAfter;