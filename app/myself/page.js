import React from "react"
import Link from "next/link"

export const metadata = {
  title: "Me | The Shovon Saha",
}

export default function MyselfPage() {
  return (
    <div className="page" style={{ padding: "3rem 0" }}>
      <h1 style={{ fontWeight: 300, letterSpacing: "0.08em" }}>
        VISUAL STORYTELLER
      </h1>
      <p style={{ color: "#6b6b6b", lineHeight: 1.9, maxWidth: 850 }}>
        I work at the intersection of software, media, and narrative. My
        creative process focuses on clean compositions, natural light, and
        emotional detail.
      </p>
      <p>
        <Link href="/creativecontact">Let&apos;s create together →</Link>
      </p>
    </div>
  )
}
