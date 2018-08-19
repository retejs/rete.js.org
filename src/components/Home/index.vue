<template lang="pug">
.home
  .section
    p.title {{title | stranslate}}
    p.description
      | {{description | stranslate}}
  .links
    iframe(:src="gitHubBadge" frameborder="0" scrolling="0" width="160px" height="30px")
  Logo.logo
  .highlights.section
    .highlight
      .title {{'Модульный' | translate}}
      .description {{'Основанная на событиях архитектура дает возможность добавлять новые функциональные возможности в виде плагинов' | translate}}
    .highlight
      .title {{'Гибкий' | translate}}
      .description {{'Вы свободны в выборе необходимых компонентов. Подключайте те плагины, которые лучше всего подходят для Вашей задачи' | translate}}
    .highlight
      .title {{'Универсальный' | translate}}
      .description {{'Фреймворк не привязак к какой либо предметной области, а только визуализирует и обрабатывает редактор узлов' | translate}}
</template>

<script>
import Logo from '../Logo';
import { title, description } from '../../consts/product.json';

export default {
  data(){
    return {
      title,
      description,
      gitHubBadge: 'https://ghbtns.com/github-btn.html?user=retejs&repo=rete&type=star&count=true&size=large'
    }
  },
  components: {
    Logo
  }
}
</script>


<style lang="sass" scoped>
@import '../../assets/styles/media.sass'
.section
  margin: 2em 0
.title
  margin: 1em 2em
.description
  font-size: 80%
  margin: 1em 2em

.home
  .links
    margin-top: 5vh
    text-align: center
  .logo
    max-height: 50vh
    max-width: 80vw
    margin: calc(1vw + 3vh)
  .highlights
    display: flex
    +phone
      flex-direction: column
    .highlight
      flex: 1
      font-size: 85%
</style>
