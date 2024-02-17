import Parser from 'rss-parser';

export const feeds = [
  {
    title: 'xkcd',
    url: 'https://xkcd.com/rss.xml',
    slug: 'xkcd'
  },
  {
    title: 'next.js blog',
    url: 'https://nextjs.org/feed.xml',
    slug: 'nextjs'
  },
  {
    title: 'hacker news',
    url: 'https://news.ycombinator.com/rss',
    slug: 'hn'
  },
];

export async function getFeed(slug: any) {
  const feedConfig = feeds.find(feed => feed.slug === slug);
  if (!feedConfig) {
    throw new Error(`No feed found for slug: ${slug}`);
  }

  const parser = new Parser();
  const feed = await parser.parseURL(feedConfig.url);
  return feed;
}
