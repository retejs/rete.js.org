<template lang="pug">
.docs(:class="{phone: isPhoneScreen}")
  Menu.menu(width="auto")
    h1.title() {{ $t('docs') }}
      Icon.burger-icon(
        v-if="isPhoneScreen"
        type="md-menu"
        :size="20"
        @click="drawer = true"
      )
    DocsMenu(v-if="!isPhoneScreen" :docsPath="docsPath" :sanitizePath="sanitizePath")
  .content
    ContentDoc(:path="contentPath")
      template(#not-found)
        Alert(type="warning") Docs section not found
  Drawer.drawer(v-model="drawer")
    Menu(width="auto")
      DocsMenu(:docsPath="docsPath" :sanitizePath="sanitizePath")
</template>

<script>
import { defineComponent, computed, ref } from 'vue';
import { useWindowSize } from 'vue-window-size';
import Drawer from '@/components/shared/Drawer.vue';
import DocsMenu from '@/components/DocsMenu.vue';

// import MenuItems from '@/components/Docs/MenuItems.vue';

export default defineComponent({
  setup() {
    const { width } = useWindowSize();

    return {
      drawer: ref(false),
      isPhoneScreen: process.client ? computed(() => width.value < 600) : false,
    };
  },
  computed: {
    contentPath() {
      return `/${this.locale}${this.omitLocale(this.$route.path, this.locale)}`;
    },
    docsPath() {
      return `/${this.locale}/docs`;
    },
    locale() {
      return this.$i18n.locale;
    },
  },
  methods: {
    sanitizePath(path) {
      // eslint-disable-next-line no-underscore-dangle
      return this.localePath(this.omitLocale(path, this.locale));
    },
    omitLocale(path, locale) {
      return path.replace(new RegExp(`^/${locale}`), '');
    },
  },
  components: {
    Drawer,
    DocsMenu,
  },
});
</script>

<style lang="sass" scoped>
@import '@/assets/styles/media.sass'

.docs
  display: flex
  text-align: left
  &.phone
    flex-direction: column
    .menu
      width: 100%
      z-index: 1
  .menu
    text-align: right
    .title
      margin: 1em
      +phone
        margin: 0.5em
  .content
    flex: 1
    position: relative
    padding: 2em
    overflow: auto
    +phone
      padding: 5vw

.burger-icon
  margin: 0 0.5em
</style>

<style lang="sass">
@import '@/assets/styles/media.sass'

.docs .content
  ul
    margin: 1em 3em
    +phone
      margin: 0.5em 1.5em
    li
      margin: 0.2em 0
  img
    margin: 1em 0
    max-width: 100%
</style>
