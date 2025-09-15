import { h, render } from 'vue';

export function createComponent(component, props) {
  const vNode = h(component, props);
  let container = document.getElementById('loader-root');
  if (!container) {
    container = document.createElement('div');
    container.setAttribute('id', 'loader-root');
    document.body.appendChild(container);
  }
  render(vNode, container);
  return vNode.component;
}

export function deleteComponent(id) {
  render(null, document.getElementById('loader-root'));
}
