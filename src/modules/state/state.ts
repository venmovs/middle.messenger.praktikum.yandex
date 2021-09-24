import { set } from '../../utils/object/set';
import { findPath } from '../../utils/object/find-path';
import { EventBus } from '../event-bus/eventBus';
import { EVENTS } from '../block/block';

const stateKey = 'state';

class State {
    private readonly state: Record<string, unknown>;
    private eventBus: EventBus;

    constructor() {
        const localStorageValue: string | null = localStorage.getItem(stateKey);
        this.state = localStorageValue !== null ? JSON.parse(localStorageValue) : {};
        this.eventBus = new EventBus();
    }

    save(path: string, value: unknown): void {
        const updatedState = set(this.state, path, value);
        localStorage.setItem(stateKey, JSON.stringify(updatedState));

        // this.eventBus.emit(EVENTS.FLOW_CDU, path);
    }

    get(path: string): unknown {
        return findPath(path, this.state);
    }
}

const state = new State();

export { state, State };
