import { Children, RedditResponse } from '../interfaces/RedditResponse';

const URLS = [
  'https://www.reddit.com/r/acturnips/new/.json',
  'https://www.reddit.com/r/TurnipExchange/new/.json',
  'https://www.reddit.com/r/ACNHTurnips/new/.json',
];

export async function fetchData(...urls: string[]): Promise<Array<RedditResponse>> {
  try {
    const fetchPromises = urls.map(url => fetch(url));
    const responses = await Promise.all(fetchPromises);
    const jsonPromises = responses.map(r => r.json());
    return Promise.all(jsonPromises);
  } catch (error) {
    console.error(`Failed to fetch data from server: ${error}`);
    throw error;
  }
}

export function parseData() {
  const fetchedData = fetchData(...URLS);
  fetchedData.then(results => {
    const combinedResults: Children[] = [];
    results.forEach(result => {
      const {
        data: { children },
      } = result;
      combinedResults.push(...children);
    });
    return combinedResults.map(r => r.data);
  });
}
