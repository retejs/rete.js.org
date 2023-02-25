import { Ref, ref } from 'vue';

export default class LangService {
  langs: string[]

  lang: string | null

  lang$: Ref<string | null> = ref(null)

  constructor() {
    this.lang = this.getLocale();
    this.langs = ['ru'];
  }

  getLocale(): string | null {
    if (localStorage.getItem('lang')) { return localStorage.getItem('lang'); }

    if (navigator.language || navigator.language) { return (navigator.language || navigator.language).split('-')[0]; }

    return 'en';
  }

  setLocale(value: string | null) {
    if (!value) return;
    if (!this.langs.includes(value)) {
      console.info(`Translation for language ${value} not found`);
      value = 'en';
    }

    localStorage.setItem('lang', value);
    this.lang = value;
    this.lang$.value = value;
  }

  setLangs(list: string[]) {
    this.langs = list;
  }
}

export function assignSection(list: any, name: any) {
  return list.map(([origin, translation]: any) => ([origin, translation, name]));
}
