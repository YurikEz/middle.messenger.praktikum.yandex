import EventBus from "./eventBus";

export default class DefaultComponent {
  _element: any;
  _meta:{
    [key: string]: any,
  };
  props: {
    [key: string]: unknown,
  };

  static EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_CDU: "flow:component-did-update",
    FLOW_RENDER: "flow:render",
  };

  eventBus: EventBus;

  constructor(
    tagName: string = "div",
    props: {
      [key: string]: unknown,
    } = {},
  ) {
    const eventBus = new EventBus();
    this._meta = {
      tagName,
      props
    };

    this.props = this._makePropsProxy(props);

    this.eventBus = eventBus;

    this._registerEvents(eventBus);
    eventBus.emit(DefaultComponent.EVENTS.INIT);
  }

  _makePropsProxy(
    props: {
      [key: string]: unknown,
    },
  ) {
    // Можно и так передать this
    // Такой способ больше не применяется с приходом ES6+
    const self = this;

    return new Proxy(props, {
      get(target: {[key: string]: unknown}, prop: string) {
        const value = target[prop];
        return typeof value === "function" ? value.bind(target) : value;
      },
      set(target: {[key: string]: unknown}, prop: string, value: unknown) {
        target[prop] = value;

        // Запускаем обновление компоненты
        // Плохой cloneDeep, в след итерации нужно заставлять добавлять cloneDeep им самим
        self.eventBus.emit(DefaultComponent.EVENTS.FLOW_CDU, {...target}, target);
        return true;
      },
      deleteProperty() {
        throw new Error("Нет доступа");
      }
    });
  }

  _registerEvents(eventBus: EventBus) {
    eventBus.on(DefaultComponent.EVENTS.INIT, this.init.bind(this));
    eventBus.on(DefaultComponent.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(DefaultComponent.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(DefaultComponent.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  _createResources() {
    this._element = this._createDocumentElement(this._meta.tagName);
  }

  _createDocumentElement(tagName: string) {
    // Можно сделать метод, который через фрагменты в цикле создает сразу несколько блоков
    return document.createElement(tagName);
  }

  init() {
    this._createResources();
    this.eventBus.emit(DefaultComponent.EVENTS.FLOW_CDM);
  }

  _componentDidMount() {
    // this.componentDidMount();
    this.eventBus.emit(DefaultComponent.EVENTS.FLOW_RENDER);
  }

  // componentDidMount(oldProps) {}

  _componentDidUpdate(oldProps: unknown, newProps: unknown) {
    const response: boolean = this.componentDidUpdate(oldProps, newProps);
    if (!response) {
      return;
    }
    this._render();
  }

  componentDidUpdate(oldProps: unknown, newProps: unknown) {
    return oldProps !== newProps;
  }

  setProps = (nextProps: unknown) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  get element() {
    return this._element;
  }

  _render() {
    // Этот небезопасный метод для упрощения логики
    // Используйте шаблонизатор из npm или напиши свой безопасный
    // Нужно не в строку компилировать (или делать это правильно),
    // либо сразу в DOM-элементы превращать из возвращать из compile DOM-ноду
    this._element.innerHTML = this.render();
  }

  render() {}
}