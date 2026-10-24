export const dynamic = 'force-static'

export default function manifest() {
  return {
    name: 'Keeping Up With #CraftCMS',
    short_name: 'KUWC',
    description:
      'Short conversations wherein we help you keep up with the goings-on of the CraftCMS world (and web development in general) by highlighting stuff that happened that we think is worth a look.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a4b3c',
    theme_color: '#0a4b3c',
    icons: [
      {
        src: '/assets/images/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/assets/images/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/assets/images/icon-maskable-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/assets/images/icon-maskable-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  }
}
