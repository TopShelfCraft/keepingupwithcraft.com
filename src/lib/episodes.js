import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { XMLParser } from 'fast-xml-parser'
import { array, object, parse, pipe, string, transform } from 'valibot'

export async function getAllEpisodes() {
  let FeedSchema = object({
    rss: object({
      channel: object({
        item: array(
          object({
            id: pipe(string(), transform(Number)),
            title: string(),
            pubDate: string(),
            'content:encoded': string(),
            enclosure: object({
              '@_url': string(),
              '@_type': string(),
            }),
          }),
        ),
      }),
    }),
  })

  let xml = await readFile(
    path.join(process.cwd(), 'public', 'feeds', 'episodes.rss'),
    'utf8',
  )
  let parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: '@_',
    parseTagValue: false,
  })
  let feed = parser.parse(xml)
  let items = parse(FeedSchema, feed).rss.channel.item

  let episodes = items.map(({ id, title, enclosure, pubDate, ...item }) => ({
    id,
    title: `Episode ${id} — ${title}`,
    published: new Date(pubDate),
    content: item['content:encoded'],
    audio: {
      // Serve audio from this site's public/ folder, not the feed's host
      src: new URL(enclosure['@_url']).pathname,
      type: enclosure['@_type'],
    },
  }))

  return episodes
}
