import React from "react"
import Image from "next/image"
import { notFound } from "next/navigation"
import {
  creativeCategories,
  getCategoryBySlug,
} from "../../../lib/creative-data"

export function generateStaticParams() {
  return creativeCategories.map(category => ({ category: category.slug }))
}

export function generateMetadata({ params }) {
  const category = getCategoryBySlug(params.category)

  if (!category) {
    return { title: "Creative Gallery" }
  }

  return {
    title: `${category.name} | Creative Portfolio`,
    description: category.description,
  }
}

export default function CreativeCategoryPage({ params }) {
  const category = getCategoryBySlug(params.category)

  if (!category) {
    notFound()
  }

  return (
    <div className="page" style={{ padding: "2.5rem 0 4rem" }}>
      <h1 style={{ fontWeight: 300, letterSpacing: "0.08em" }}>
        {category.name}
      </h1>
      <p style={{ color: "#6b6b6b" }}>{category.description}</p>
      <section className="gallery-grid" style={{ marginTop: "1.5rem" }}>
        {category.images.map((image, index) => (
          <article className="gallery-item" key={`${category.slug}-${index}`}>
            <div className="gallery-frame">
              <Image
                src={image}
                alt={`${category.name} image ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1400px) 50vw, 33vw"
                priority={index < 2}
                quality={90}
              />
            </div>
          </article>
        ))}
      </section>
    </div>
  )
}
