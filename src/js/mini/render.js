export function isEventCallback(key, value) {
  return typeof value === 'function' && key.substr(0, 2) === 'on';
}

export function addListeners(component, $element) {
  Object.entries(component.props).forEach(([key, value]) => {
    if (isEventCallback(key, value)) {
      const event = key.substr(2).toLowerCase();
      $element.addEventListener(event, value);
    }
  });
}

export function renderChildren(component, $element, placeholder) {
  component.children
    .map(child => renderComponent(child, $element))
    .forEach(childElement => placeholder.parentNode.insertBefore(childElement, placeholder));
  placeholder.parentNode.removeChild(placeholder);
}

export function renderComponent(component, $parent) {
  const template = document.createElement('template');
  const rendered = component.render(component.props);
  template.innerHTML = rendered;
  const $element = template.content.firstElementChild;
  const childrenPlaceholder = $element.querySelector('children');
  if (childrenPlaceholder) {
    renderChildren(component, $element, childrenPlaceholder);
  }
  if (component.$element) {
    component.$parent.replaceChild($element, component.$element);
  }
  addListeners(component, $element);
  Object.assign(component, { $parent, $element, rendered });
  return $element;
}

export function callDidRender(component) {
  if (component.componentDidRender) {
    component.componentDidRender();
  }
  component.children.forEach(child => callDidRender(child));
}

export function render(component, root) {
  const element = renderComponent(component, root);
  root.appendChild(element);
  callDidRender(component);
}
