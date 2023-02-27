<template lang="pug">
ContentList(:path="docsPath")
  template(#not-found)
    p No articles found.
  template(v-slot="{ list }")
    MenuItem(
      v-for="article in list"
      :key="article._path"
      :name="article._path"
      :to="sanitizePath(article._path)"
    ) {{article.title}}
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  props: ['docsPath', 'sanitizePath'],
});
</script>
