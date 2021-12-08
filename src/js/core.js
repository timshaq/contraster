import buildOut from './private/buildOut';
import {SEPARATOR_ACTIVE_CLASS_NAME} from "./css-names";
import setSizes from "./private/setSizes";

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

    this.eventsListeners = {};

    const defaults = {
        direction: 'vertical',
        freePosition: false,
        init: true,
        separator: {
            activeClass: SEPARATOR_ACTIVE_CLASS_NAME,
        },
        // cursorGrab: false,
        className: null,
        progress: 50
    };

    if (arguments[0] && typeof arguments[0] === "object") {
        this.options = extendDefaults(defaults, arguments[0]);
    }

    const $ = this;
    const mouseMoveHandlerBind = (event) => mouseMoveHandler($, $doc, event);
    const mouseDownHandlerBind = (event) => mouseDownHandler($, $doc, mouseMoveHandlerBind, event)
    const mouseUpHandlerBind = () => mouseUpHandler($, $doc, mouseMoveHandlerBind)

    this.init = function() {
        buildOut.call($)
            .then(() => {
                if(!$.container) return;
                this.emit('init');
                setSizes.call($);
                if(this.options.debug) console.log('resolve')

                $doc.on('mousedown', mouseDownHandlerBind);
                $doc.on('mouseup', mouseUpHandlerBind);
                $doc.on('resize', setSizes.bind($));
            })
            .catch(() => {
                if(this.options.debug) console.log('reject')
                this.destroy();
            })
    }

    this.destroy = function() {
        if($.container) {
            $.container.setAttribute('data-before', this.beforeElement.src);
            $.container.setAttribute('data-after', this.afterElement.src);
            $.container.innerHTML = '';
            $.container.removeAttribute('class');
            $doc.off('mousedown', mouseDownHandlerBind);
            $doc.off('mouseup', mouseUpHandlerBind);
            $doc.off('resize', setSizes.bind($));
        }
        $.emit('destroy');
    }

    this.setProgress = function(percent) {
        $.options.progress = percent;
        setSizes.call($);
        $.emit('setProgress');
    }

    if(this.options.init) this.init();

}

// emmitter
BeforeAfter.prototype.on = emitter.on;
BeforeAfter.prototype.off = emitter.off;
BeforeAfter.prototype.emit = emitter.emit;

export default BeforeAfter;