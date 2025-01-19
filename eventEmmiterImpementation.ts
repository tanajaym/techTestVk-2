type Listener = (...args: any[]) => void;


class EventEmitter {
    private events: { [eventName: string]: Listener[] } = {};

    on(eventName: string, callback: Listener): void {
        !this.events[eventName] && (this.events[eventName] = []);
        this.events[eventName].push(callback);
    }

    emit(eventName: string, ...args: any[]): void {
        if (this.events[eventName]) {
            this.events[eventName].forEach(listener => {
                listener(...args);
            });
    }
}
    
    off(eventName: string, listener: Listener): void {
        if (this.events[eventName]) {
            this.events[eventName] = this.events[eventName].filter(currentListener => currentListener !== listener);
        };
    }

}


const emitter = new EventEmitter();

const logData = (data: any) => console.log(data);
emitter.on('data', logData);
emitter.emit('data', { message: 'Hello, world!' });
emitter.off('data', logData);

