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
        set(this.state, path, value);
    }

    get(path: string): unknown {
        if (findPath(path, this.state) === undefined) return null;
        return findPath(path, this.state);
    }
}

const state = new State();

export { state, State };
