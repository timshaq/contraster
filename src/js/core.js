import buildOut from './buildOut';
import {SEPARATOR_ACTIVE_CLASS_NAME} from "./css-names";
import sendError from "./helpers/sendError";
import setSizes from "./helpers/setSizes";

import mouseMoveHandler from "./event-handlers/mouseMoveHandler";
import mouseDownHandler from "./event-handlers/mouseDownHandler";
import mouseUpHandler from "./event-handlers/mouseUpHandler";

import extendDefaults from "./helpers/extendDefaults";
import $doc from './document-emitter';
import * as emitter from "./public/event-emitter";

function BeforeAfter() {
    this.container = null;

    this.beforeWrapper = null;
    this.afterWrapper = null;

    this.separator = null;
    this.separatorChildren = null;

    this.mouseScreenX = null;

    this.eventsListeners = {};

    const defaults = {
        direction: 'vertical',
        freePosition: false,
        init: true,
        separator: {
            activeClass: SEPARATOR_ACTIVE_CLASS_NAME,
        },
        cursorGrab: false,
        className: false,
    };

    if (arguments[0] && typeof arguments[0] === "object") {
        this.options = extendDefaults(defaults, arguments[0]);
    }

    const mouseMoveHandlerBind = mouseMoveHandler.bind(this);
    const $ = this;
    const mouseDownHandlerBind = (event) => mouseDownHandler($, mouseMoveHandlerBind, event)
    const mouseUpHandlerBind = (event) => mouseUpHandler($, mouseMoveHandlerBind, event)

    this.init = function() {

        buildOut.call($)
            .then(() => {
                if(!$.container) return sendError('container not found');
                this.emit('buildOut');
                setSizes.call($);

                $doc.on('mousedown', mouseDownHandlerBind);
                $doc.on('mouseup', mouseUpHandlerBind);
                $doc.on('resize', setSizes.bind($));
            })
            .catch((src) => {
                this.destroy();
                return sendError(src + ' image unable to download');
            })
    }

    this.destroy = function() {
        if($.container) {
            $.container.innerHTML = '';
            $.container.removeAttribute('class');
            $doc.removeOn('mousedown', mouseDownHandlerBind);
            $doc.removeOn('mouseup', mouseUpHandlerBind);
            $doc.removeOn('resize', setSizes.bind($));
        }
        $.emit('destroy');
    }

    if(this.options.init) this.init();

}

// emmitter
BeforeAfter.prototype.on = emitter.on;
BeforeAfter.prototype.removeOn = emitter.removeOn;
BeforeAfter.prototype.emit = emitter.emit;

export default BeforeAfter;