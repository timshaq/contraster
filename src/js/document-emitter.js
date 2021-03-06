function DocumentEmitter() {
    var $ = this;

    $.isContainerMove = false;
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
    $.off = function(name, listenerToRemove) {
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
        $.isContainerMove = false;
        $.emit('mouseup', event);
    }
    function mousedown(event) {
        $.emit('mousedown', event);
    }
    function mousemove(event) {
        $.emit('mousemove', event);
        return ($.isContainerMove) ? event.preventDefault() : false;
    }
    document.addEventListener('mousedown', mousedown);
    document.addEventListener('mouseup', mouseup);
    document.addEventListener('mousemove', mousemove);

    document.addEventListener('touchstart', mousedown);
    document.addEventListener('touchend', mouseup);
    document.addEventListener('touchcancel', mouseup);
    document.addEventListener('touchmove', mousemove, { passive: false });

    window.addEventListener('resize', resize);
}

const $doc = new DocumentEmitter;
export default $doc;