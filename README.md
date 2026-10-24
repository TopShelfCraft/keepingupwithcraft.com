# "Keeping Up With Craft" Podcast — archive website

_Keeping Up With Craft_ was a collection of short conversations wherein we (Michael Rog & Andrew Welch) helped web developers keep up with the goings-on of the Craft CMS world (and
web development in general) by highlighting stuff that happened that we think is worth a look.

_KUWC_ aired from 2016 to 2017 as a shorter-form sibling to the _[Craft CMS Podcast](https://craftpodcast.com)_.

## Development

```bash
npm run dev
```

## Deployment

Build the static site:

```bash
npm run build
```

Then serve `out/` (_not_ `public/`) as the webroot.

See `nginx/kuwc.conf` for an example of serving the static files from extensionless URL paths.

## License

The _Keeping Up With Craft_ podcast is copyright &copy; 2016–2017 Michael Rog, offered to the community under the Creative Commons [Attribution-ShareAlike 4.0 International](https://creativecommons.org/licenses/by-sa/4.0/) license.