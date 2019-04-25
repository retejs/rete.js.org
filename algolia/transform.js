const VueJest = require('vue-jest');
const vueCompiler = require('vue-template-compiler')

module.exports = {
    process(src) {
        const { code, map } = VueJest.process(...arguments);
        const { customBlocks } = vueCompiler.parseComponent(src, { pad: true })
        const codeWithCustomBlocks = code + ';\n__vue__options__.customBlocks = '+JSON.stringify(customBlocks);
        
        return { code: codeWithCustomBlocks, map }
    }
}