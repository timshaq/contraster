export function on(name, listener) {
    if (!this.eventsListeners[name]) {
        this.eventsListeners[name] = [];
    }

    this.eventsListeners[name].push(listener);
}

export function off(name, listenerToRemove) {
    if (!this.eventsListeners[name]) {
        return;
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