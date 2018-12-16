<template lang="pug">
.issues(v-t9n)
  .section
    p.title {{title}}
    p.description {{description}}
  Repo.repo(v-for="repo in repos", :repo="repo", :key="repo.name")
</template>

<script>
import Repo from './Repo';
import api from './api';
import { title, description } from '../../consts/issues.json';

export default {
  data() {
    return {
      title,
      description,
      repos: []
    }
  },
  async mounted() {
    const allRepos = await api(`orgs/retejs/repos`);
 
    this.repos = allRepos
      .filter(r => r.open_issues_count > 0)
      .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()) 
  },
  components: {
    Repo
  }
}
</script>

<style lang="sass" scoped>
@import '../../assets/styles/media.sass'

.issues
  padding: 20px 0
  .repo
    text-align: left
    max-width: 600px
    margin: auto
</style>
