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
      div Установка
      code.highlight npm i -g rete-cli
    .step 
      div Создание плагина
        span :
      code.highlight rete --plugin &lt;name&gt; 
        .comment
          span 
            | # 
          span где
          span 
            | &lt;name&gt; - 
          span имя плагина

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
