<template lang="pug">
.plugin
  Code(source="install")
  p По событию connectionpath вы можете модифицировать данные для пути
  Code(source="connectionpath")
  p 
    | Также вы можете контролировать захван новосоздаваемых соединений через событие connectionpick.
    | Например, чтобы предоствратить появление псевдосоединения 
    a(href="https://github.com/retejs/connection-plugin/issues/16") (подробнее)
</template>

<code name="install">
import ConnectionPlugin from 'rete-connection-plugin';

editor.use(ConnectionPlugin);
</code>

<code name="connectionpath">
editor.on('connectionpath', data => {
    const { points, connection, d } = data;
  
    data.d = '' // SVG path's d attribute
});
</code>
