import React from "react"
export const metadata = {
  title: "Creative Contact | The Shovon Saha",
}

export default function CreativeContactPage() {
  return (
    <div className="page" style={{ padding: "3rem 0" }}>
      <h1 style={{ fontWeight: 300, letterSpacing: "0.08em" }}>
        LET&apos;S CONNECT
      </h1>
      <p style={{ color: "#6b6b6b", lineHeight: 1.9, maxWidth: 720 }}>
        For photography, videography, and collaborative creative projects,
        please email{" "}
        <a href="mailto:theshovonsaha@gmail.com">theshovonsaha@gmail.com</a>.
      </p>
    </div>
  )
}
