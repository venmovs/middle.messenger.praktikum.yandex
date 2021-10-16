enum METHODS {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    PATCH = 'PATCH',
    DELETE = 'DELETE',
}

type TRequestData = Record<string, string | number>;

type TRequestOptions = {
    method?: METHODS
    headers?: Record<string, string>
    timeout?: number
    data?: unknown
};

function queryStringify(data: TRequestData) {
    if (!data) return '';
    return Object.entries(data).reduce((acc, [key, value], index, arr) => {
        return `${acc}${key}=${value}${index < arr.length - 1 ? '&' : ''}`;
    }, '?');
}

class HTTPTransport {
    baseUri: string;
    constructor(baseUri: string) {
        this.baseUri = baseUri;
    }

    public get = (url: string, options = {}) => {
        return this.request(url, { ...options, method: METHODS.GET });
    };

    public post = (url: string, options = {}) => {
        return this.request(url, { ...options, method: METHODS.POST });
    };

    public put = (url: string, options = {}) => {
        return this.request(url, { ...options, method: METHODS.PUT });
    };

    public patch = (url: string, options = {}) => {
        return this.request(url, { ...options, method: METHODS.PATCH });
    };

    public delete = (url: string, options = {}) => {
        return this.request(url, { ...options, method: METHODS.DELETE });
    };

    request = (url: string, options: TRequestOptions) => {
        const {
            method = METHODS.GET,
            headers = {
                'content-type': 'application/json',
            },
            data,
            timeout = 5000,
        } = options;
        let query: string;
        if (method === METHODS.GET) {
            query = queryStringify(data as TRequestData);
        } else {
            query = '';
        }

        return new Promise((resolve, reject) => {
            const isFormData: boolean = data instanceof FormData;
            const xhr = new XMLHttpRequest();
            xhr.withCredentials = true;

            xhr.open(method, this.baseUri + url + query);

            if (isFormData) {
                xhr.setRequestHeader('accept', 'application/json');
            } else {
                Object.entries(headers).forEach(([key, value]) => {
                    xhr.setRequestHeader(key, value);
                });
            }

            xhr.onload = () => {
                if (xhr.status >= 300) {
                    reject(xhr);
                } else {
                    resolve(xhr);
                }
            };

            xhr.onabort = reject;
            xhr.onerror = reject;
            xhr.timeout = timeout;
            xhr.ontimeout = reject;

            if (method === METHODS.GET || !data) {
                xhr.send();
            } else if (data instanceof FormData) {
                xhr.send(data);
            } else {
                xhr.send(JSON.stringify(data));
            }
        });
    };
}

export { HTTPTransport };
