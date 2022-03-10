import { IRedditResponse, Children } from "./interface";

const URLS = [
  "https://www.reddit.com/r/acturnips/new/.json",
  "https://www.reddit.com/r/TurnipExchange/new/.json",
  'https://www.reddit.com/r/ACNHTurnips/new/.json'
];

async function fetchData(...urls: string[]): Promise<Array<IRedditResponse>> {
  try {
    const fetchPromises = urls.map(url => fetch(url));
    const responses = await Promise.all(fetchPromises);
    const jsonPromises = responses.map(r => r.json());
    return await Promise.all(jsonPromises);
  } catch (error) {
    console.error(`Failed to fetch data from server: ${error}`);
    throw error;
  }
}

export function test() {
  const fetchedData = fetchData(...URLS);
  fetchedData.then(results => {
    const combinedResults: Children[] = [];
    results.forEach(result => {
      const { data: { children } } = result;
      combinedResults.push(...children);
    });
    console.log(combinedResults);
  });
}
