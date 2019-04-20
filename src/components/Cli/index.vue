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
      Code(lang="bash") npm i -g rete-cli
    .step 
      div Создание плагина
      Code(lang="bash") rete --plugin &lt;name&gt; # {{$t('где')}} &lt;name&gt; - {{$t('имя плагина')}}
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
