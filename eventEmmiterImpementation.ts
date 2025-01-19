type Listener = (...args: any[]) => void;


class EventEmitter {
    private events: { [eventName: string]: Listener[] } = {};

    on(eventName: string, callback: Listener): void {
        !this.events[eventName] && (this.events[eventName] = []);
        this.events[eventName].push(callback);
    }

    emit(eventName: string, ...args: any[]): void {
        !this.events[eventName] && this.events[eventName].forEach(listener => {listener(...args); });
    }
    



}


const emitter = new EventEmitter();

const logData = (data: any) => console.log(data);
emitter.on('data', logData);
emitter.emit('data', { message: 'Hello, world!' });

