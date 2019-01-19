<template lang="pug">
.plugin
  Code(source="install")
  p Плагин создает 'readonly' и 'isreadonly' события
  p Проверить, что событие существует, то есть плагин установлен
  Code(source="exist")
  p Проверка и изменение состояния
  Code(source="check")
  p Добавление побочных эффектов при включении/выключении режима только для чтения
  Code(source="side")
</template>

<code name="install">
import ReadonlyPlugin from 'rete-readonly-plugin';

editor.use(ReadonlyPlugin, { enabled: false }); // enabled is true by default
</code>

<code name="exist">
this.emitter.exist('isreadonly');
</code>

<code name="check">
let readonlyEnabled = editor.trigger('isreadonly');

editor.trigger('readonly', readonlyEnabled);
</code>

<code name="side">
editor.on('readonly', () => {})
</code>
