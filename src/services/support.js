import Body from '../components/Support/NoticeBody.vue';
import { patreon } from '../consts/support.json';

export default class SupportService {
    NAME = 'support-notice';
    STORAGE_KEY = 'notice-accepted';
    TRANSITIONS_THRESHOLD = 10;
    DURATION = 12; //seconds
    transitionsNumber = 0;

    constructor($router, matchPaths, $notice, $translate) {
        this.$router = $router;
        this.$notice = $notice;
        this.$translate = $translate;

        $router.afterEach((_, from) => {
            if (matchPaths.some(path => from.path.startsWith(path))) {
                if (++this.transitionsNumber === this.TRANSITIONS_THRESHOLD) {
                    this.openNotice();
                }
            }
        });
    }

    openNotice() {
        if (this.isAccepted()) return;

        this.$notice.open({
            name: this.NAME,
            title: this.$translate('Вам нравится Rete.js?'),
            render: h => h(Body, {
                props: {
                    buttonClick: () => {
                        this.$notice.close(this.NAME);
                        this.goToPatreon();
                    }
                }
            }),
            duration: this.DURATION
        });
    }

    isAccepted() {
        return Boolean(localStorage.getItem(this.STORAGE_KEY));
    }

    goToPatreon() {
        window.open(patreon, '_blank');
        localStorage.setItem(this.STORAGE_KEY, true); 
    }
}