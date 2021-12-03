import sendError from "../helpers/sendError";

export function on(name, listener) {
    if (!this.eventsListeners[name]) {
        this.eventsListeners[name] = [];
    }

    this.eventsListeners[name].push(listener);
}

export function removeOn(name, listenerToRemove) {
    if (!this.eventsListeners[name]) {
        return sendError("Can't remove a listener. Event \"" + name + "\" doesn't exits.");
    }

    function filterListeners(listener) {
        return listener !== listenerToRemove;
    }

    this.eventsListeners[name] = this.eventsListeners[name].filter(filterListeners);
}

export function emit(name, data) {
    if (!this.eventsListeners[name]) return;

    function fireCallbacks(callback){
        callback(data);
    }

    this.eventsListeners[name].forEach(fireCallbacks);
}