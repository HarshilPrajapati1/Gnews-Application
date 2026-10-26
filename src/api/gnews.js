import axios from 'axios';
import { API_KEY } from '../config';

const BASE = 'https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=f1315b0f48736fed329cb6d8e8de01ee';

async function request(path, params = {}) {
  const finalParams = { ...params, apikey: API_KEY };
  try {
    const res = await axios.get(`${BASE}${path}`, { params: finalParams });
    return res.data;
  } catch (err) {
    console.error('GNews API request failed', err);
    throw err;
  }
}

export async function getTopHeadlines(category = 'general', lang = 'en', max = 20) {
  const data = await request('/top-headlines', { category, lang, max });
  return data.articles || [];
}

export async function search(query, lang = 'en', max = 20) {
  const data = await request('/search', { q: query, lang, max });
  return data.articles || [];
}
