const PHONE_MAX_WIDTH = 650;

export default {
    data() {
        return {
            isPhoneScreen: false
        }
    },
    methods: {
        resize() {
            this.isPhoneScreen = window.innerWidth < PHONE_MAX_WIDTH
        }
    },
    mounted(){
        this.resize();
        window.addEventListener('resize', this.resize)
    }
}