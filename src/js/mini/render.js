import { isFunction, isEventCallback, getEventName, createHTMLElement } from './utils';

export function addListeners(component, $element) {
  Object.entries(component.props).forEach(([key, value]) => {
    if (isEventCallback(key, value)) {
      const event = getEventName(key);
      $element.addEventListener(event, value);
    }
  });
}


export function callComponentDidMount(component) {
  if (isFunction(component.componentDidMount)) {
    component.componentDidMount();
  }
  component.children.forEach(child => callComponentDidMount(child));
}

export function renderComponent(component, $parent) {
  const rendered = component.render(component.props);
  const $element = createHTMLElement(rendered);
  const placeholder = $element.querySelector('children');
  if (component.children && placeholder) {
    component.children.forEach(child => {
      const childComponent = renderComponent(child, $element);
      placeholder.parentNode.insertBefore(childComponent, placeholder);
    });
    placeholder.parentNode.removeChild(placeholder);
  }
  if (component.$element) {
    component.$parent.replaceChild($element, component.$element);
  }
  addListeners(component, $element);
  component.$parent = $parent; // eslint-disable-line
  component.$element = $element; // eslint-disable-line
  component.rendered = rendered; // eslint-disable-line
  return $element;
}


export function render(component, root) {
  const element = renderComponent(component, root);
  root.appendChild(element);
  callComponentDidMount(component);
}
