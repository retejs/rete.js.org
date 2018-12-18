<template lang="pug">
.main(v-t9n.deep="'docs'")
  h1 Введение
  img(:src="preview")
  p Rete.js это модульный фреймворк для визуального программирования. Rete позволяет Вам создавать редакторы узлов прямо в браузере. Вы можете определить узлы и воркеры, которые возволят пользователям создать инструкции для обработки данных в Вашем редакторе без единой строки кода.
  
  h1 Начало работы
  h2 Установка
  p Подключите зависимости в вашу страницу
  Code(lang="html" source="cdn")
  p или установите из npm
  Code(lang="bash" source="install")
  p Импортируйте следующим образом
  Code(lang="javascript" source="importRete")
  p Если вы хотите использовать только движок на серверной стороне, будет достаточно:
  Code(lang="javascript" source="importEngine")

  h2 Создание редактора
  p Для создания редактора необходимо несколько составляющих: Сокеты, Входы, Выходы, Компоненты
  p Создадим экземпляр сокета. Эта часть узла отвечает за коммуникации между узлами.
  Code(lang="javascript" source="socket")
  p Непосредственно для создания и обрабтки узла необходимо определить Компонент.
  Code(lang="javascript" source="component")
  p В своей HTML странице добавьте контейнер для редактора
  Code(lang="html" source="editorHtml")
  p Инициализируйте редактор, подключите минимально необходимые плагины (для отображения узлов и соединений) и зарегестрируйте компоненты.
  Code(lang="javascript" source="editor")
  p Визуальная часть редактора готова. Теперь для обработки схемы нужно инициализировать Движок и подписаться на события Редактора, по которым будет выполняться обработка схемы
  Code(lang="javascript" source="engine")
  p Рассмотрены самые необходимые этапы, которые нужно выполнить для работы редактора. Полный пример смотрите на Codepen
</template>


<script>
import Code from '@/shared/Code.vue';
import preview from '../assets/preview.png';

export default {
  data() {
    return {
      preview
    }
  },
  methods: {
    go(section) {
      this.$router.push(`/docs/${section}`);
    }
  },
  components: {
    Code
  }
};
</script>


<style lang="sass" scoped>
.main
  width: 100%
  text-align: left
  img
    margin: 1em 0
</style>