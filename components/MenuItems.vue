<template lang="pug">
client-only.menu-items
  Submenu(name="learn")
    template(#title) {{ $t('learn') }}
    MenuItem(name="docs", :to="localePath('/docs/')") {{ $t('docs') }}
    MenuItem(name="examples", :to="localePath('/examples')") {{ $t('examples') }}
  Submenu(name="ecosystem")
    template(#title) {{ $t('ecosystem') }}
    MenuItem(name="components", :to="localePath('/components')") {{ $t('components') }}
    MenuItem(name="issues", :to="localePath('/issues')") {{ $t('issues') }}
    MenuItem(name="cli", :to="localePath('/cli')") Rete CLI
  MenuItem(name="support", :to="localePath('/support')") {{ $t('support') }}
  template(#placeholder)
    SsrSubmenu {{ $t('learn') }}
    SsrSubmenu {{ $t('ecosystem') }}
    SsrMenuItem {{ $t('support') }}
</template>

<script>
import SsrSubmenu from './ssr/SsrSubmenu.vue';
import SsrMenuItem from './ssr/SsrMenuItem.vue';

export default {
  components: {
    SsrSubmenu,
    SsrMenuItem,
  },
};

</script>

<style lang="sass" scoped>
.menu-items
  white-space: nowrap
</style>
