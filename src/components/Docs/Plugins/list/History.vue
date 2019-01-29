<template lang="pug">
.plugin(v-t9n.deep="'docs'")
  Code(source="install")
  p Управляйте историей программно
  Code(source="handle")
  p Кастомное действие
  Code(source="custom")
  p
    span Пример
    span : 
    span добавление изменений текстового поля в историю
  Code(source="example")
</template>

<code name="install">
import HistoryPlugin from 'rete-history-plugin';

editor.use(HistoryPlugin, { keyboard: true });
</code>

<code name="handle">
editor.trigger('undo');
editor.trigger('redo');
</code>

<code name="custom">
import { Action } from 'rete-history-plugin';

export class YourAction extends Action {
  constructor() {
    super();
  }
  undo() {
    ///
  }
  redo() {
    ///
  }
}

editor.trigger('addhistory', new YourAction());
</code>

<code name="example">
class FieldChangeAction extends HistoryPlugin.Action {
  constructor(prev, next, set) {
    super()
    this.prev = prev;
    this.next = next;
    this.set = set;
  }
  undo() {
    this.set(this.prev);
  }
  redo() {
    this.set(this.next);
  }
}

// inside a "change" method of your Control (called by user action)
// this.value - value before changing
// next - new value
// (v) => this.set(v) - change value of Field by undo/redo
this.emitter.trigger('addhistory', new FieldChangeAction(this.value, next, (v) => this.set(v)));
</code>