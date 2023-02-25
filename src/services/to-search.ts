import qs from 'query-string';
import LangService from './i18n';

export default class ToSearchService {
  rect: any

  constructor(private router: any, private langService: LangService) {
    this.rect = null;

    router.afterEach((to: any) => {
      const { lang, tosearch } = qs.parse(to.hash);

      if (lang) langService.setLocale(lang as string);
      // if (tosearch) setTimeout(() => window.find(tosearch), 500);
    });
    document.addEventListener('mouseup', () => this.saveText());
    document.addEventListener('touchend', () => this.saveText());
    document.addEventListener('touchcancel', () => this.saveText());
  }

  saveText() {
    const selection = window.getSelection();
    if (!selection) return;
    const text = selection.toString();

    this.rect = text ? selection.getRangeAt(0).getBoundingClientRect() : null;

    if (!text) return;

    this.router.push({
      hash: qs.stringify({
        tosearch: text,
        lang: this.langService.lang,
      }),
    });
  }

  getHash(text: string) {
    return `#${qs.stringify({ tosearch: text, lang: this.langService.lang })}`;
  }
}
