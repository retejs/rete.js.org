<template lang="pug">
.repo
  Card.card(:padding="0")
    a(
      slot="title"
      :href="'https://github.com/retejs/'+repo.name"
      target="_blank"
    ) {{repo.name}}
    div(slot="extra")
      Icon(type="md-star" size="18")
      .stars {{repo.stargazers_count}}
    CellGroup
      Cell(
        v-for="issue in issues"
        :title="issue.title"
        :key="issue.id"
        :to="`https://github.com/retejs/${repo.name}/issues/${issue.number}`"
        target="_blank"
      )
        div(slot="extra")
          Tag(
            v-for="label in issue.labels"
            :color="'#'+label.color"
            :key="label.id"
          ) {{label.name}}
</template>

<script>
import api from './api';

export default {
  props: ['repo'],
  data() {
    return {
      issues: []
    }
  },
  async mounted() {
    this.issues = await api(`repos/retejs/${this.repo.name}/issues`);
  }
}
</script>

<style lang="sass" scoped>
@import '../../assets/styles/media.sass'

.repo
  padding: 20px
  +phone
    padding: 10px
  .stars
    display: inline
    vertical-align: middle
</style>
