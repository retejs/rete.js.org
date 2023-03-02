<template lang="pug">
client-only.menu-items
.menu-items
  MenuItem(name="docs", :to="localePath('/docs/')") {{ $t('docs') }}
  MenuItem(name="examples", :to="localePath('/examples')") {{ $t('examples') }}
  MenuItem(name="support", :to="localePath('/support')") {{ $t('support') }}
</template>

<style lang="sass" scoped>
.menu-items
  white-space: nowrap
</style>
