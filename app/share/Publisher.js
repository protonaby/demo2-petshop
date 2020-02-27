export class Publisher {
    constructor() {
        this.subscribes = {};
        this.methods = {
            subscribe: this.subscribe.bind(this),
            unsubscribe: this.unsubscribe.bind(this),
            notify: this.notify.bind(this),
        }
    }

    checkEvent(event) {
        if (!this.subscribes.hasOwnProperty(event)) {
            this.subscribes[event] = [];
        }
    }

    subscribe(event, func) {
        this.checkEvent(event);
        this.subscribes[event].push(func);
    }

    notify(event, data) {
        this.checkEvent(event);
        this.subscribes[event].forEach(sb => sb(data));
    }

    unsubscribe(event, func) {
        this.checkEvent(event);
        this.subscribes[event] = this.subscribes[event].filter(fu => fu !== func);
    }

}
