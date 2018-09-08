<template lang="pug">
.cli
  .section
    p.title {{title | translate}}
  Logo.logo
  .highlights.section
    .highlight(v-for="{ title, description } in highlights")
          .title {{title | translate}}
          vue-markdown.description {{description | stranslate}}
  .steps
    p.title {{'Начало работы' | translate}}
    .step 
      div {{'Установка' | translate}}:
      code npm i -g rete-cli
    .step 
      div {{'Создание плагина' | translate}}:
      code rete --plugin &lt;name&gt; 
        .comment # {{'где' | translate}} &lt;name&gt; - {{'имя плагина' | translate}}

</template>

<script>
import VueMarkdown from 'vue-markdown';
import Logo from '../Logo';
import { title, highlights } from '../../consts/cli.json';

export default {
  data(){
    return {
      title,
      highlights
    }
  },
  components: {
    Logo,
    VueMarkdown
  }
}
</script>

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
