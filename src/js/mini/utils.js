export function isFunction(value) {
  return typeof value === 'function';
}

export function getEventName(key) {
  return key.substr(2).toLowerCase();
}

export function isEventCallback(key, value) {
  return isFunction(value) && key.substr(0, 2) === 'on';
}

export function createHTMLElement(HTMLString) {
  const template = document.createElement('template');
  template.innerHTML = HTMLString;
  return template.content.firstElementChild;
}
