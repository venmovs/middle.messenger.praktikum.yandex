import { v4 as makeUUID } from 'uuid';
import { EventBus } from '../event-bus/eventBus';
import { state, State } from '../state/state';

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
    protected _element!: HTMLElement;
    protected _meta: IMeta;
    protected props: Record<string, any>;
    protected eventBus: EventBus;
    protected selector: null | string = null;
    private readonly _id: null | string;

    protected constructor(tagName = 'div', props = {}, selector: string | null = null) {
        this.eventBus = new EventBus();
        this._meta = {
            tagName,
            props,
        };

        this._id = makeUUID();
        let addProps;
        this.selector = selector;
        if (this.selector !== null) {
            addProps = state.get(this.selector);
        }
        this.props = this._makePropsProxy({ ...props, addProps, __id: this._id });
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

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    protected componentDidMount(oldProps: ProxyHandler<object>): void {}

    private _componentDidUpdate(oldProps?: ProxyHandler<object>, newProps?: ProxyHandler<object>) {
        const response = this.componentDidUpdate(oldProps, newProps);
        if (!response) {
            return;
        }
        this._render();
    }

    protected componentDidUpdate(
        oldProps?: ProxyHandler<object>,
        newProps?: ProxyHandler<object>,
    ): boolean {
        return oldProps !== newProps;
    }

    setProps = (nextProps: ProxyHandler<object>): void => {
        if (!nextProps) {
            return;
        }

        Object.assign(this.props, nextProps);
        this.eventBus.emit(EVENTS.FLOW_RENDER);
    };

    protected get element() {
        return this._element;
    }

    private addEvents(): void {
        const { events = {} } = this.props;

        Object.keys(events).forEach((eventName) => {
            let node: HTMLElement | null;
            if (eventName === 'submit') {
                node = this.element.querySelector('form');
            } else {
                node = this.element.querySelector('input');
            }
            if (node) {
                node.addEventListener(eventName, events[eventName].bind(this));
            } else {
                this.element.addEventListener(eventName, events[eventName].bind(this));
            }
        });
    }

    private removeEvents(): void {
        const { events = {} } = this.props;

        Object.keys(events).forEach((eventName) => {
            this.element.removeEventListener(eventName, events[eventName].bind(this));
        });
    }

    private insertInnerComponents(): void {
        if (this.props.components) {
            Object.entries(this.props.components).forEach(([key, value]) => {
                const node = this.element.querySelector(`#${key}`);
                if (!node) return;
                if (Array.isArray(value)) {
                    value.forEach((value) => {
                        node.append(value.getContent());
                    });
                } else {
                    node.append(value.getContent());
                }
            });
        }
    }

    private _render(): void {
        const block = this.render();

        this.removeEvents();

        this._element.innerHTML = block;

        this.addEvents();

        this.insertInnerComponents();
    }

    abstract render(): string;

    getContent() {
        return this.element;
    }

    private _makePropsProxy<T>(target: Record<string, T>): ProxyHandler<object> {
        const self = this;

        return new Proxy(target, {
            get: (target, prop: string): T => {
                const value = target[prop];
                return typeof value === 'function' ? value.bind(target) : value;
            },
            set: (target, prop: string, value: T) => {
                target[prop] = value;
                self.eventBus.emit(EVENTS.FLOW_CDU, { ...target }, target);
                return true;
            },
            deleteProperty: () => {
                throw new Error('Нет доступа');
            },
        });
    }

    private _createDocumentElement(tagName: string): HTMLElement {
        const element = document.createElement(tagName);

        if (this._id !== null) {
            element.setAttribute('data-id', this._id);
        }
        return element;
    }

    protected show() {
        this.getContent().classList.remove('hidden');
    }

    protected hide() {
        this.getContent().classList.add('hidden');
    }
}

export { Block, EVENTS };
