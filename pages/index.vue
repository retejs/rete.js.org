<template lang="pug">
.home
  .section
    p.title {{ $t('main.title') }}
    p.description {{ $t('main.description') }}
  .links
    iframe(:src="gitHubBadge" frameborder="0" scrolling="0" width="160px" height="30px")
  Logo.logo
  .highlights.section
    .highlight
      .title {{ $t('main.highlights.ts.title')}}
      .description {{ $t('main.highlights.ts.description') }}
    .highlight
      .title {{ $t('main.highlights.processing.title')}}
      .description {{ $t('main.highlights.processing.description') }}
    .highlight
      .title {{ $t('main.highlights.tailorable.title')}}
      .description {{ $t('main.highlights.tailorable.description') }}
</template>

<script>
import Logo from '@/components/Logo.vue';
import { highlights } from '@/consts/product.json';

export default {
  data() {
    return {
      highlights,
      gitHubBadge: 'https://ghbtns.com/github-btn.html?user=retejs&repo=rete&type=star&count=true&size=large',
    };
  },
  components: {
    Logo,
  },
};
</script>

<style lang="sass" scoped>
@import '@/assets/styles/common.sass'
@import '@/assets/styles/media.sass'

.home
  .links
    margin-top: 5vh
    text-align: center
  .logo
    max-height: calc(10vh + 20vw)
    max-width: 80vw
    margin: calc(1vw + 3vh)
</style>
