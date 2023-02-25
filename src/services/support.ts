import Body from '../components/Support/NoticeBody.vue';
import { patreon } from '../consts/support.json';

export default class SupportService {
    NAME = 'support-notice';

    STORAGE_KEY = 'notice-accepted';

    TRANSITIONS_THRESHOLD = 10;

    DURATION = 12; // seconds

    transitionsNumber = 0;

    constructor(private $router: any, private matchPaths: any) { // , private $notice: any, private $translate: any) {
      this.$router.afterEach((_: any, from: any) => {
        if (this.matchPaths.some((path: any) => from.path.startsWith(path))) {
          if (++this.transitionsNumber === this.TRANSITIONS_THRESHOLD) {
            this.openNotice();
          }
        }
      });
    }

    openNotice() {
      // if (this.isAccepted()) return;

      // this.$notice.open({
      //   name: this.NAME,
      //   title: this.$translate('Вам нравится Rete.js?'),
      //   render: (h) => h(Body, {
      //     props: {
      //       buttonClick: () => {
      //         this.$notice.close(this.NAME);
      //         this.goToPatreon();
      //       },
      //     },
      //   }),
      //   duration: this.DURATION,
      // });
    }

    isAccepted() {
      return Boolean(localStorage.getItem(this.STORAGE_KEY));
    }

    goToPatreon() {
      window.open(patreon, '_blank');
      localStorage.setItem(this.STORAGE_KEY, 'true');
    }
}
