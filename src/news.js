const url =
'http://newsapi.org/v2/top-headlines?' +
'country=us&' +
'apiKey=be036077cd7e4dfea7c76f9b933fa43f';

export async function getNews() {
  let result = await fetch(url).then(response => response.json());
  return result.articles;
}