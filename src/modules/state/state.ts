import { set } from '../../utils/object/set';
import { findPath } from '../../utils/object/find-path';

const stateKey = 'state';

class State {
    private readonly state: Record<string, unknown>;

    constructor() {
        const localStorageValue: string | null = localStorage.getItem(stateKey);
        this.state = localStorageValue !== null ? JSON.parse(localStorageValue) : {};
    }

    save(path: string, value: unknown): void {
        const updatedState = set(this.state, path, value);
        localStorage.setItem(stateKey, JSON.stringify(updatedState));
    }

    get(path: string): unknown {
        return findPath(path, this.state);
    }
}

export { State };
