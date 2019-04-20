<template lang="pug">
.cli(v-t9n)
  .section
    p.title {{title}}
  Logo.logo
  .highlights.section
    .highlight(v-for="{ title, description } in highlights")
      .title {{title}}
      .description {{description}}
  .steps
    p.title Начало работы
    .step 
      p Установка
      Code(lang="bash") npm i -g rete-cli
    .step 
      p Создание плагина
      Code(lang="bash") rete --plugin &lt;name&gt; # {{$t('где')}} &lt;name&gt; - {{$t('имя плагина')}}
      div это создаст директорию на основе 
        a(href="https://github.com/retejs/rete-cli/tree/master/bin/plugin/boilerplate") шаблона
    .step
      p Сборка вашего пакета должна выполняться с помощью команды (которая уже записана в package.json)
      Code rete --build rete.config.js
      div в директории build будут созданы бандлы трех форматов: UMD, CommonJS, ES. Сборка выполняется с помощью Rollup, конфигурация которого 
        a(href="https://github.com/retejs/rete-cli/blob/master/bin/build/config.js") расширена.
      p Пример конфигурации:
      Code(source="config_example")
</template>

<script>
import Vue from 'vue';
import Logo from '../Logo';
import { title, highlights } from '../../consts/cli.json';
import Code from '@/shared/Code';

Vue.component('Code', Code); // define for nested components

export default {
  data(){
    return {
      title,
      highlights
    }
  },
  components: {
    Logo
  }
}
</script>

<code name="config_example">
export default {
    input: 'src/index.ts',
    name: 'Rete',
    babelPresets: [
        require('@babel/preset-typescript')
    ],
    babelPlugins: [],
    extensions: ['.js', '.ts'],
    plugins: [],
    globals: {
        'vue': 'Vue'
    },
    ...rollupOptions
}
</code>

<style lang="sass" scoped>
.cli
  .logo
    max-width: 80vw
    height: 240px
  .steps
    text-align: left
    .title
      font-weight: bold
    .step
      fony-size: 1rem
</style>
