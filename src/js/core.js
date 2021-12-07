import buildOut from './buildOut';
import {SEPARATOR_ACTIVE_CLASS_NAME} from "./css-names";
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
        separatorPosition: 50
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
                if(!$.container) return;
                this.emit('buildOut');
                setSizes.call($);
                if(this.options.debug) console.log('resolve')

                $doc.on('mousedown', mouseDownHandlerBind);
                $doc.on('mouseup', mouseUpHandlerBind);
                $doc.on('resize', setSizes.bind($));
            })
            .catch((cb) => {
                if(this.options.debug) console.log('reject')
                // if($.options.debug) cb();
                this.destroy();
            })
    }

    this.destroy = function() {
        if($.container) {
            $.container.setAttribute('data-before', this.beforeElement.src);
            $.container.setAttribute('data-after', this.afterElement.src);
            $.container.innerHTML = '';
            $.container.removeAttribute('class');
            $doc.removeOn('mousedown', mouseDownHandlerBind);
            $doc.removeOn('mouseup', mouseUpHandlerBind);
            $doc.removeOn('resize', setSizes.bind($));
        }
        $.emit('destroy');
    }

    this.setSeparatorPosition = function(percent) {
        $.options.separatorPosition = percent;
        setSizes.call($);
        $.emit('setPosition');
    }

    if(this.options.init) this.init();

}

// emmitter
BeforeAfter.prototype.on = emitter.on;
BeforeAfter.prototype.removeOn = emitter.removeOn;
BeforeAfter.prototype.emit = emitter.emit;

export default BeforeAfter;