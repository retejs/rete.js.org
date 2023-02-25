import Vue from 'vue';

export default function (container) {
  const list = document.createElement('div');

  container.parentElement.appendChild(list);

  const app = new Vue({
    render: (h) => h(null),
  }).$mount(list);

  return app.$Message;
}
