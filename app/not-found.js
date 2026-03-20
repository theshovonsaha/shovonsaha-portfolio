import Link from "next/link"

export default function NotFound() {
  return (
    <div className="page" style={{ padding: "4rem 0" }}>
      <h1>Page not found</h1>
      <p>
        <Link href="/">Go back home</Link>
      </p>
    </div>
  )
}
