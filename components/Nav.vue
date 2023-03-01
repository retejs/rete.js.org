<template lang="pug">
Menu(width="auto")
  template(v-for="item in list")
    MenuItem(
      v-if="!item.children"
      :name="sanitizePath(item._path)"
      :to="sanitizePath(item._path)"
    ) {{ item.title }}
    Submenu.submenu(v-if="item.children" :name="sanitizePath(item._path)" @mousemove="n(item._path)")
      template(#title) {{ item.title }}
      Nav(:list="item.children")
</template>

<script>
export default {
  props: ['list', 'submenu'],
  methods: {
    sanitizePath(path) {
      return this.localePath(this.omitLocale(path, this.$i18n.locale));
    },
    omitLocale(path, locale) {
      return path.replace(new RegExp(`^/${locale}`), '');
    },
    n(path) {
      console.log('nnnn', path, this.sanitizePath(path), this.omitLocale(path, this.$i18n.locale));
    },
  },
  updated() {
    console.log(this.list);
  },
};
</script>
