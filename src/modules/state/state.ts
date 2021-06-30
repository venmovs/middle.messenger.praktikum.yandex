import { EventBus } from '../event-bus/eventBus';

export default class State {
    private static instance: State;

    props: Record<string, unknown>;

    private eventBus: EventBus;

    private constructor(props: Record<string, unknown>) {
        this.props = new Proxy(props, {
            get(target, prop: string) {
                const value = target[prop];
                return typeof value === 'function' ? value.bind(target) : value;
            },

            set(target, prop: string, value) {
                target[prop] = value;
                return true;
            },

            deleteProperty(target, prop: string) {
                delete target[prop];
                return true;
            },
        });

        this.eventBus = new EventBus();
    }

    static getInstance(props = {}): State {
        if (!State.instance) {
            State.instance = new State(props as Record<string, unknown>);
        }

        return State.instance;
    }

    registerEvent(name: string, callback: <T>(...args: T[]) => void): void {
        this.eventBus.on(name, callback);
    }

    setProps(data: { [key: string]: unknown }): void {
        Object.assign(this.props, data);

        Object.keys(data).forEach((key) => {
            this.eventBus.emit(key, this.props[key]);
        });
    }
}

export { State };
