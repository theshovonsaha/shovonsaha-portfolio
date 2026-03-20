import Link from "next/link"

export default function HomePage() {
  return (
    <div className="page">
      <section className="hero">
        <h1>SOFTWARE • CREATIVE • STORY</h1>
        <p>
          Welcome to the migrated Next.js edition of Shovon Saha&apos;s portfolio.
          The experience keeps the clean minimalist identity while improving
          performance foundations for modern delivery.
        </p>
        <p>
          Explore the creative portfolio for optimized gallery previews and a
          refined visual presentation.
        </p>
        <p>
          <Link href="/creative">Open Creative Portfolio →</Link>
        </p>
      </section>
    </div>
  )
}
