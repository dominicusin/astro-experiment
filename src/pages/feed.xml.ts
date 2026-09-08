import { getCollection } from 'astro:content';
import { siteUrl } from '../lib/config';

export async function GET() {
  const posts = (await getCollection('blog'))
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
    .slice(0, 30);

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:wfw="http://wellformedweb.org/CommentAPI/" xmlns:dc="http://search.yahoo.com/mrss/" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:sy="http://purl.org/rss/1.0/modules/syndication/" xmlns:slash="http://purl.org/rss/1.0/modules/slash/">
  <channel>
    <title>Dominicus In — Блог</title>
    <description>Инженерный блог о системах и данных</description>
    <link>${siteUrl}</link>
    <language>ru</language>
    <atom:link href="${siteUrl}/feed.xml" rel="self" />
    <sy:updatePeriod>hourly</sy:updatePeriod>
    <sy:updateFrequency>1</sy:updateFrequency>
    ${posts.map((post) => `
    <item>
      <guid isPermaLink="false">${siteUrl}/${post.slug}/</guid>
      <title><![CDATA[${post.data.title}]]></title>
      <description><![CDATA[${post.data.description ?? post.body?.slice(0, 200) ?? ''}]]></description>
      <link>${siteUrl}/${post.slug}/</link>
      <pubDate>${post.data.date.toUTCString()}</pubDate>
      ${post.data.tags.map((tag) => `<category><![CDATA[${tag}]]></category>`).join('')}
    </item>
    `).join('')}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: { 'Content-Type': 'application/xml' },
  });
}
