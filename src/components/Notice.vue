<template lang="pug">
.notice
  | {{ $t('Вы просматриваете документацию для Rete.js версии 1') }}.
  | {{ $t('Ознакомьтесь с') }}
  | !{' '}
  a(href="https://retejs.org" target="_blank") {{ $t('документацией для версии 2 Бета') }}
  | !{' '}
  | {{ $t('или начните работу с текущей версии' )}}
</template>

<style lang="sass" scoped>
.notice
  width: 100%
  background: #697984
  color: white
  padding: 0.2em
  text-align: center
  font-weight: 100
  font-size: 0.9rem
  a
    color: wheat
</style>
