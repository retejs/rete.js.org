<template lang="pug">
.search(ref="container")
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import docsearch from '@docsearch/js';
import '@docsearch/css';

const appId = 'Q275UHBHP7';
const indexName = 'rete-js';
const apiKey = 'dac415d28248192348d29069416e0870';

export default defineComponent({
  watch: {
    '$i18n.locale': function () {
      this.refresh();
    },
  },
  methods: {
    refresh() {
      const t = (key: string) => this.$t(['docsearch', key].join('.'));

      docsearch({
        container: this.$refs.container,
        appId,
        indexName,
        apiKey,
        placeholder: t('placeholder'),
        translations: {
          button: {
            buttonText: t('button.buttonText'),
            buttonAriaLabel: t('button.buttonAriaLabel'),
          },
          modal: {
            searchBox: {
              resetButtonTitle: t('modal.searchBox.resetButtonTitle'),
              resetButtonAriaLabel: t('modal.searchBox.resetButtonAriaLabel'),
              cancelButtonText: t('modal.searchBox.cancelButtonText'),
              cancelButtonAriaLabel: t('modal.searchBox.cancelButtonAriaLabel'),
            },
            startScreen: {
              recentSearchesTitle: t('modal.startScreen.recentSearchesTitle'),
              noRecentSearchesText: t('modal.startScreen.noRecentSearchesText'),
              saveRecentSearchButtonTitle: t('modal.startScreen.saveRecentSearchButtonTitle'),
              removeRecentSearchButtonTitle: t('modal.startScreen.removeRecentSearchButtonTitle'),
              favoriteSearchesTitle: t('modal.startScreen.favoriteSearchesTitle'),
              removeFavoriteSearchButtonTitle: t('modal.startScreen.removeFavoriteSearchButtonTitle'),
            },
            errorScreen: {
              titleText: t('modal.errorScreen.titleText'),
              helpText: t('modal.errorScreen.helpText'),
            },
            footer: {
              selectText: t('modal.footer.selectText'),
              selectKeyAriaLabel: t('modal.footer.selectKeyAriaLabel'),
              navigateText: t('modal.footer.navigateText'),
              navigateUpKeyAriaLabel: t('modal.footer.navigateUpKeyAriaLabel'),
              navigateDownKeyAriaLabel: t('modal.footer.navigateDownKeyAriaLabel'),
              closeText: t('modal.footer.closeText'),
              closeKeyAriaLabel: t('modal.footer.closeKeyAriaLabel'),
              searchByText: t('modal.footer.searchByText'),
            },
            noResultsScreen: {
              noResultsText: t('modal.noResultsScreen.noResultsText'),
              suggestedQueryText: t('modal.noResultsScreen.suggestedQueryText'),
              reportMissingResultsText: t('modal.noResultsScreen.reportMissingResultsText'),
              reportMissingResultsLinkText: t('modal.noResultsScreen.reportMissingResultsLinkText'),
            },
          },
        },
      });
    },
  },
  mounted() {
    this.refresh();
  },
});
</script>

<style lang="sass">
:root
  --docsearch-primary-color: #ffd92c
  --docsearch-highlight-color: #8ba0ff

.DocSearch-Button
  border: 1px solid #dcdee2
  border-radius: 4px
  background: white
  height: 32px
  width: 205px
  margin: 14px

.DocSearch-Button-Keys
  transform: scale(0.7)
  transform-origin: 0

.DocSearch-Button-Placeholder
  display: none

.DocSearch-Search-Icon
  --docsearch-text-color: grey
  transform: scale(0.6)

.search > *
  display: inline-flex
  vertical-align: middle
  flex-direction: row-reverse
</style>
