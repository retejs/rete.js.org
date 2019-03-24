<template lang="pug">
.plugin(v-t9n.deep="'docs'")
  Code(source="install")
  p Плагин отвечает только за добавление узлов, поэтому вы сами должны указать его расположение и стили
  Code(source="html_example" lang="html")
  p Стили для расположения док-меню в нижней части редактора горизонтально
  Code(source="css_example" lang="css")
</template>

<code name="install">
import DockPlugin from 'rete-dock-plugin';

editor.use(DockPlugin, {
    container: document.querySelector('.dock'), // html элемент, в который будут добавлены псевдоузлы
    plugins: [VueRenderPlugin], // список с плагинами для рендеринга
    itemClass: 'item' // по умолчанию: dock-item 
});
</code>

<code name="html_example">
<div class="editor">
    <div class="container">
        <div class="node-editor"></div>
    </div>
    <div class="dock"></div>
</div>
</code>

<code name="css_example">
.editor {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    height: 100vh;
}

.dock {
    height: 100px;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
}

.dock-item {
    display: inline-block;
    vertical-align: top;
    transform: scale(0.8);
    transform-origin: 50% 0;
}

.container {
    flex: 1;
    overflow: hidden;
}
</code>