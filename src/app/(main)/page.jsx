import { EpisodePlayButton } from '@/components/EpisodePlayButton'
import { FormattedDate } from '@/components/FormattedDate'
import { getAllEpisodes } from '@/lib/episodes'

function PauseIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 10 10" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.496 0a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5H2.68a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H1.496Zm5.82 0a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5H8.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H7.316Z"
      />
    </svg>
  )
}

function PlayIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 10 10" {...props}>
      <path d="M8.25 4.567a.5.5 0 0 1 0 .866l-7.5 4.33A.5.5 0 0 1 0 9.33V.67A.5.5 0 0 1 .75.237l7.5 4.33Z" />
    </svg>
  )
}

function DownloadIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 10 10" {...props}>
      <path d="M4.25.5a.75.75 0 0 1 1.5 0v4.69l1.72-1.72a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 0 1 1.06-1.06l1.72 1.72V.5ZM.75 8.5a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5H.75Z" />
    </svg>
  )
}

function EpisodeEntry({ episode }) {
  let date = new Date(episode.published)

  return (
    <article aria-labelledby={`episode-${episode.id}-title`} className="">
      <div className="flex flex-col items-start">
        <h2
          id={`episode-${episode.id}-title`}
          className="mt-2 text-2xl font-extrabold text-accent"
        >
          {episode.title}
        </h2>
        <FormattedDate
          date={date}
          className="order-first font-mono text-sm/7 text-white/80"
        />
        <div
          className="mt-4 text-base/7 [&_a]:font-extrabold [&_a]:underline [&_a:active]:decoration-wavy [&_a:hover]:decoration-wavy"
          dangerouslySetInnerHTML={{ __html: episode.content }}
        />
        <div className="mt-8 flex items-center gap-x-8">
          <EpisodePlayButton
            episode={episode}
            className="flex items-center gap-x-2.5 leading-0 font-extrabold text-accent hover:underline hover:decoration-wavy active:underline active:decoration-wavy"
            playing={
              <>
                <PauseIcon className="h-3 w-3 fill-current" />
                <span aria-hidden="true">Listen</span>
              </>
            }
            paused={
              <>
                <PlayIcon className="h-3 w-3 fill-current" />
                <span aria-hidden="true">Listen</span>
              </>
            }
          />
          <a
            href={episode.audio.src}
            download
            aria-label={`Download episode ${episode.title}`}
            className="flex items-center gap-x-2.5 leading-0 font-extrabold text-accent hover:underline hover:decoration-wavy active:underline active:decoration-wavy"
          >
            <DownloadIcon className="h-3 w-3 fill-current" />
            <span aria-hidden="true">Download</span>
          </a>
        </div>
      </div>
    </article>
  )
}

export default async function Home() {
  let episodes = await getAllEpisodes()

  return (
    <div className="space-y-24">
      {episodes.map((episode) => (
        <EpisodeEntry key={episode.id} episode={episode} />
      ))}
    </div>
  )
}
