export function initEvents(container) {
  return {
    list: [],
    remove(name) {
      this
        .list
        .forEach((h) => {
          container.removeEventListener(name, h);
        });
      this.list = [];
    },
    add(name, h) {
      container.addEventListener(name, h, false);
      this
        .list
        .push(h);
    },
  };
}
