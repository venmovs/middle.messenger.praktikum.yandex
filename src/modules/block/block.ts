import {EventBus} from '../event-bus/eventBus';

enum EVENTS {
    INIT = 'init',
    FLOW_CDM = 'flow:component-did-mount',
    FLOW_CDU = 'flow:component-did-update',
    FLOW_RENDER = 'flow:render',
}

interface IMeta {
    tagName: string,
    props: object
}

abstract class Block {

    protected _element: HTMLElement;
    protected _meta: IMeta;
    protected props: ProxyHandler<object>;
    protected eventBus: EventBus;

    protected constructor(tagName = 'div', props = {}) {
         this.eventBus = new EventBus();
        this._meta = {
            tagName,
            props
        };

        this.props = this._makePropsProxy(props);

        this._registerEvents();
        this.eventBus.emit(EVENTS.INIT);
    }

    private _registerEvents() {
        this.eventBus.on(EVENTS.INIT, this.init.bind(this));
        this.eventBus.on(EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        this.eventBus.on(EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        this.eventBus.on(EVENTS.FLOW_RENDER, this._render.bind(this));
    }

    private _createResources() {
        const { tagName } = this._meta;
        this._element = this._createDocumentElement(tagName);
    }

    protected init() {
        this._createResources();
        this.eventBus.emit(EVENTS.FLOW_CDM);
    }

    private _componentDidMount(): void {
        this.componentDidMount();
        this.eventBus.emit(EVENTS.FLOW_RENDER);
    }

    protected componentDidMount(oldProps?: ProxyHandler<object>): void {};

    private _componentDidUpdate(oldProps?: ProxyHandler<object>, newProps?: ProxyHandler<object>){
        const response = this.componentDidUpdate(oldProps, newProps);
        if (!response) {
            return;
        }
        this._render();
    }

    protected componentDidUpdate(oldProps?: ProxyHandler<object>, newProps?: ProxyHandler<object>): boolean {
        return oldProps !== newProps;
    };

    setProps = (nextProps: ProxyHandler<object>): void => {
        if (!nextProps) {
            return;
        }

        Object.assign(this.props, nextProps);
    };

    protected get element() {
        return this._element;
    }

    private _render(): void {
        const block = this.render();
        // Этот небезопасный метод для упрощения логики
        // Используйте шаблонизатор из npm или напиши свой безопасный
        // Нужно не в строку компилировать (или делать это правильно),
        // либо сразу в DOM-элементы превращать из возвращать из compile DOM-ноду
        this._element.innerHTML = block;
    }

    abstract render(): string;

    getContent() {
        return this.element;
    }

    private _makePropsProxy<T>(target: Record<string, T>): ProxyHandler<object> {
        const self = this;

        return new Proxy(target, {
            get(target, prop: string): T {
                const value = target[prop];
                return typeof value === 'function' ? value.bind(target) : value;
            },
            set(target, prop: string, value: T) {
                target[prop] = value;

                self.eventBus.emit(EVENTS.FLOW_CDU, {...target}, target);
                return true;
            },
            deleteProperty() {
                throw new Error('Нет доступа');
            }
        });
    }

    private _createDocumentElement(tagName: string): HTMLElement {
        // Можно сделать метод, который через фрагменты в цикле создает сразу несколько блоков
        return document.createElement(tagName);
    }

    protected show() {
        this.getContent().classList.remove('hidden');
    }

    protected hide() {
        this.getContent().classList.add('hidden');
    }
}

export {Block};