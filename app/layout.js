import Link from "next/link"
import "./globals.css"

export const metadata = {
  title: "The Shovon Saha",
  description:
    "Portfolio of Shovon Saha - software engineer and visual storyteller.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="site-shell">
          <header className="site-header">
            <nav>
              <Link href="/" className="brand">
                THE SHOVON SAHA
              </Link>
              <div className="nav-links">
                <Link href="/creative">Creative</Link>
                <Link href="/myself">Me</Link>
                <Link href="/creativecontact">Contact</Link>
                <a href="https://github.com/theshovonsaha" target="_blank" rel="noreferrer">GitHub</a>
                <a href="https://www.linkedin.com/in/theshovonsaha/" target="_blank" rel="noreferrer">LinkedIn</a>
              </div>
            </nav>
          </header>
          <main>{children}</main>
          <footer className="site-footer">© {new Date().getFullYear()} Shovon Saha</footer>
        </div>
      </body>
    </html>
  )
}
