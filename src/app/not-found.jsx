import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="relative flex h-full items-center py-36 lg:px-8">
      <div className="relative mx-auto flex w-full max-w-2xl flex-col items-center px-4 sm:px-6 lg:px-0">
        <p className="font-mono text-sm/7 text-stone-300">404</p>
        <h1 className="mt-4 font-bold">Page not found</h1>
        <Link href="/" className="group mt-12 text-sm/6 font-bold text-accent">
          &larr;{' '}
          <span className="group-hover:underline group-hover:decoration-wavy">
            Go back home
          </span>
        </Link>
      </div>
    </main>
  )
}
