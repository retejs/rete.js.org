<template lang="pug">
.plugin
  Code(source="install")
</template>

<code name="install">
import ProfilerPlugin from 'rete-profiler-plugin';

editor.use(ProfilerPlugin);
</code>
