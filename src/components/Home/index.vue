<template lang="pug">
.home
  p.title {{title | stranslate}}
  p.description
    | {{description | stranslate}}
  .links
    iframe(:src="gitHubBadge" frameborder="0" scrolling="0" width="160px" height="30px")
  Logo.logo
  .highlights
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
.title
  margin: 3em 0 1em 0
.description
  font-size: 80%
  margin: 0 0 3em 0

.home
  .links
    margin-top: 5vh
    text-align: center
  .logo
    max-height: 50vh;
    margin: calc(1vw + 3vh)
  .highlights
    display: flex
    padding: 2vh 0 8vh 0
    .highlight
      flex: 1
      font-size: 85%
      .description
        margin-left: 4vw
        margin-right: 4vw
</style>
