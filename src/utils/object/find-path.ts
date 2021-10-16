import { isPlainObject } from './is-plain';

function findPath(path: string, object: Record<string, unknown> | unknown): unknown {
    const keys: string[] = path.split('.');
    const keysCount = keys.length;
    let result;
    // eslint-disable-next-line guard-for-in
    for (const index in keys) {
        const key = keys[index];
        if (isPlainObject(object[key])) {
            object = object[key];
            result = object;
        } else {
            if (+index !== keysCount - 1) {
                throw new Error('path is incorrect');
            }
            result = object[key];
        }
    }
    return result;
}

export { findPath };
