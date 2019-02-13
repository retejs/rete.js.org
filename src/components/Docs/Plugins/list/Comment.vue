<template lang="pug">
.plugin
  Code(source="install")
  ul
    li Add inline comment: Shift + C
    li Add frame comment: select nodes, Shift + F
    li Delete comment: Select comment and press Delete
    li Edit comment: Call context menu
</template>

<code name="install">
import CommentPlugin from 'rete-comment-plugin';

editor.use(CommentPlugin, { 
    margin: 20 // по умолчанию отступ для новых кадров равен 30px
});
</code>
