function DocumentEmitter() {
    var $ = this;

    $.lastTop = null;
    $.isContainerMove = false;
    $.setTopScroll = function() {
        window.scrollTo(0,$.lastTop);
    }
    $.setContainerMove = function(val) {
        $.isContainerMove = val;
    }

    // emmitter
    $.eventsListeners = {};

    $.on = function(name, listener) {
        if (!$.eventsListeners[name]) {
            $.eventsListeners[name] = [];
        }

        $.eventsListeners[name].push(listener);
    }
    $.removeOn = function(name, listenerToRemove) {
        if (!$.eventsListeners[name]) return;

        function filterListeners(listener) {
            return listener !== listenerToRemove;
        }

        $.eventsListeners[name] = $.eventsListeners[name].filter(filterListeners);
    }
    $.emit = function(name, data) {
        if (!$.eventsListeners[name]) return;

        function fireCallbacks(callback){
            callback(data);
        }

        $.eventsListeners[name].forEach(fireCallbacks);
    }
    // emmitter

    function resize() {
        $.emit('resize');
    }
    function mouseup(event) {
        $.lastTop = null;
        $.isContainerMove = false;
        $.emit('mouseup', event);
    }
    function mousedown(event) {
        $.emit('mousedown', event);
    }
    function mousemove(event) {
        onscroll();
        $.emit('mousemove', event);
    }
    document.addEventListener('mousedown', mousedown);
    document.addEventListener('mouseup', mouseup);
    document.addEventListener('mousemove', mousemove);

    document.addEventListener('touchstart', mousedown);
    document.addEventListener('touchend', mouseup);
    document.addEventListener('touchcancel', mouseup);
    document.addEventListener('touchmove', mousemove);

    function onscroll(event) {
        if($.isContainerMove) {
            window.scrollTo(0,$.lastTop);
        } else {
            $.lastTop = window.scrollY;
        }
        // $.emit('onscroll', event);
    }

    window.addEventListener('scroll', onscroll);

    window.addEventListener('resize', resize);
}

// export default DocumentEmitter;
const $doc = new DocumentEmitter;
export default $doc;