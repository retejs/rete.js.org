import * as Sentry from '@sentry/vue';
import { BrowserTracing } from '@sentry/tracing';
import { dsn } from '../config/sentry';

// eslint-disable-next-line no-undef
export default defineNuxtPlugin((nuxtApp) => {
  const app = nuxtApp.vueApp;

  Sentry.init({
    app,
    dsn,
    integrations: [
      new BrowserTracing({
        routingInstrumentation: Sentry.vueRouterInstrumentation(nuxtApp.$router),
        tracePropagationTargets: ['localhost', 'rete.js.org', /^\//],
      }),
    ],
    tracesSampleRate: 1.0, /// process.env.NODE_ENV === 'production'
  });
});
