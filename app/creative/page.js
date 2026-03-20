import Link from "next/link"
import Image from "next/image"
import { creativeCategories } from "../../lib/creative-data"

export const metadata = {
  title: "Creative Portfolio | The Shovon Saha",
  description:
    "Professional photography categories by Shovon Saha with optimized previews.",
}

export default function CreativePage() {
  return (
    <div className="page" style={{ padding: "2.5rem 0 4rem" }}>
      <section>
        <h1 style={{ fontWeight: 300, letterSpacing: "0.08em" }}>MY PORTFOLIO</h1>
        <p style={{ color: "#6b6b6b", maxWidth: 760 }}>
          A sleek, minimal presentation for portrait, wedding, nature, street,
          and automotive collections.
        </p>
      </section>

      <section className="grid" style={{ marginTop: "1.5rem" }}>
        {creativeCategories.map(category => (
          <article key={category.slug} className="card">
            <Link href={`/creative/${category.slug}`}>
              <div className="tile-image">
                <Image
                  src={category.cover}
                  alt={category.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={category.slug === "people"}
                />
              </div>
              <div className="tile-content">
                <h2>{category.name}</h2>
                <p>{category.description}</p>
              </div>
            </Link>
          </article>
        ))}
      </section>
    </div>
  )
}
