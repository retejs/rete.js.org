<template lang="pug">
.main(v-t9n.deep="'docs'")
  h1 Введение
  img(:src="preview")
  p Rete.js это модульный фреймворк для визуального программирования. Rete позволяет Вам создавать редакторы узлов прямо в браузере. Вы можете определить узлы и воркеры, которые возволят пользователям создать инструкции для обработки данных в Вашем редакторе без единой строки кода.
  
  h1 Начало работы
  h2 Установка
  p
    | Главный пакет и его плагины собираются с помощью Rollup.
    | Собранные пакеты предоставляются в трех форматах: 
    span UMD (*.min.js), CommonJS (*.common.js), ES модули (*.esm.js).
    |  Для сборки вашего проекта с помощью Webpack или подобных сборщиков установите пакеты из NPM
  Code(source="install" lang="bash" )
  p Импортируйте следующим образом
  Code(source="importRete")
  p 
    | Для использования плагинов, которые собраны с помощью rete-cli до версии 0.5.0, необходимо импортировать 
    a(href="https://github.com/retejs/rete/issues/249#issuecomment-461757249") следующим образом. 
  p 
    | Модули, транспилированные в CommonJS и ESM не содержат полифилы, поэтому при сборке вашего проекта они должны быть 
    a(href="https://github.com/retejs/rete/issues/249#issuecomment-461755916") подключены отдельно
  h2 Установка без сборщиков (Webpack, Rollup и т.д.)
  p Если вы не используете сборщики, можете подключить зависимости в вашу страницу
  Code(source="cdn" lang="html" :view="versions")
  p и подключить UMD модули:
  Code(source="oldschool_dep")

  h2 Создание редактора
  p Для создания редактора необходимо несколько составляющих: Сокеты, Входы, Выходы, Компоненты
  p Создадим экземпляр сокета. Эта часть узла отвечает за коммуникации между узлами.
  Code(source="socket")
  p Непосредственно для создания и обрабтки узла необходимо определить Компонент.
  Code(source="component")
  p В своей HTML странице добавьте контейнер для редактора. Родительский элемент должен иметь свою ширину и высоту, под которые будет подстраиваться данный элемент 
  Code(source="editorHtml" lang="html")
  p Инициализируйте редактор, подключите минимально необходимые плагины (для отображения узлов и соединений) и зарегестрируйте компоненты.
  Code(source="editor")
  p Визуальная часть редактора готова. Теперь для обработки схемы нужно инициализировать Движок и подписаться на события Редактора, по которым будет выполняться обработка схемы
  Code(source="engine")
  p Рассмотрены самые необходимые этапы, которые нужно выполнить для работы редактора. Полный пример смотрите на Codepen
</template>


<code name="cdn">
<script src="https://cdn.jsdelivr.net/npm/rete@{{rete}}/build/rete.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/rete-vue-render-plugin@{{rete-vue-render-plugin}}/build/vue-render-plugin.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/rete-connection-plugin@{{rete-connection-plugin}}/build/connection-plugin.min.js"></script>
</code>

<code name="install">
npm install rete rete-vue-render-plugin rete-connection-plugin
</code>

<code name="importRete">
import Rete from "rete";
import ConnectionPlugin from 'rete-connection-plugin';
import VueRenderPlugin from 'rete-vue-render-plugin';
</code>

<code name="oldschool_dep">
editor.use(ConnectionPlugin.default)
</code>

<code name="socket">
const numSocket = new Rete.Socket('Number value');
</code>

<code name="component">
class NumComponent extends Rete.Component {
  constructor() {
    super('Number');
  }

  builder(node) {
    let out = new Rete.Output('num', 'Number', numSocket);

    node.addOutput(out);
  }

  worker(node, inputs, outputs) {
    outputs['num'] = node.data.num;
  }
}
</code>

<code name="editorHtml">
<div id="rete"></div>
</code>

<code name="editor">
const container = document.querySelector('#rete');
const editor = new Rete.NodeEditor('demo@0.1.0', container);

editor.use(ConnectionPlugin)
editor.use(VueRenderPlugin)

const numComponent = new NumComponent();
editor.register(numComponent);
</code>

<code name="engine">
const engine = new Rete.Engine('demo@0.1.0');
engine.register(numComponent);

editor.on('process nodecreated noderemoved connectioncreated connectionremoved', async () => {
    await engine.abort();
    await engine.process(editor.toJSON());
});
</code>


<script>
import preview from '../assets/preview.png';

export default {
  data() {
    return {
      preview,
      versions: {
        'rete': '1.1.0',
        'rete-vue-render-plugin': '0.3.0',
        'rete-connection-plugin': '0.4.2'
      }
    }
  },
  methods: {
    go(section) {
      this.$router.push(`/docs/${section}`);
    }
  },
  mounted() {
    Object.keys(this.versions).map(async name => {
      const resp = await fetch(`https://data.jsdelivr.com/v1/package/npm/${name}`);
      const data = await resp.json();
      
      this.versions[name] = data.tags.latest;
    })
  }
};
</script>


<style lang="sass" scoped>
.main
  width: 100%
  text-align: left
</style>
