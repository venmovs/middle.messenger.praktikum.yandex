import { HTTPTransport } from '../../HTTPTransport/HTTPTransport';

export class BaseAPI {
    baseUrl: string = 'https://ya-praktikum.tech/api/v2';
    http: HTTPTransport = new HTTPTransport(this.baseUrl);

    create() { throw new Error('Not implemented'); }

    request() { throw new Error('Not implemented'); }

    update() { throw new Error('Not implemented'); }

    delete() { throw new Error('Not implemented'); }
}

export { BaseAPI };
