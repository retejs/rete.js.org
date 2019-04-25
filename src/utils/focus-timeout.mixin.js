
export default (time) => ({
    data() {
        return {
          isFocused: false,
          blurTimeout: null,
        }
    },
    methods: {
      focus() {
        this.isFocused = true;
        if (this.blurTimeout) clearTimeout(this.blurTimeout);
      },
      blur() {
        this.blurTimeout = setTimeout(() => this.isFocused = false, time);
      }
    },
})