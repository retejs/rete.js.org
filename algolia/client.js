
import algoliasearch from 'algoliasearch';

const { ALGOLIA_API_KEY } = process.env;

export const client = algoliasearch(
    '0S8ITD2OZ2',
    ALGOLIA_API_KEY
);

export const indices = ['ru', 'en', 'ua'].map(lang => ({ lang, index: client.initIndex(lang)}));