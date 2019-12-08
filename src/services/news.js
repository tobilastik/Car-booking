import {orderBy} from 'lodash';

import {
  _api_key,
  language,
  category,
  articles_url,
  sources,
} from '../config/rest_config';

export async function getArticles () {
  try {
    let articles = await fetch (
      `${articles_url}?/sources?category=${category}&language=${language}`,
      {
        headers: {
          'X-API-KEY': _api_key,
        },
      }
    );

    let result = await articles.json ();
    articles = null;

    return orderBy (result.articles, 'publishedAt', 'desc');
  } catch (error) {
    throw error;
  }
}
