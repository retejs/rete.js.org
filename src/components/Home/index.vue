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
    .highlight(v-for="{ title, description } in highlights")
      .title {{title | translate}}
      .description {{description | translate}}
</template>

<script>
import Logo from '../Logo';
import { title, description, highlights } from '../../consts/product.json';

export default {
  data(){
    return {
      title,
      description,
      highlights,
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
