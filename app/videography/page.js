export const metadata = {
  title: "Videography | The Shovon Saha",
}

export default function VideographyPage() {
  const videos = [
    "https://www.youtube.com/embed/GmgZxyuW_kc",
    "https://www.youtube.com/embed/eFPLmUfnG3g",
    "https://www.youtube.com/embed/y2zhEHwYRNE",
  ]

  return (
    <div className="page" style={{ padding: "3rem 0" }}>
      <h1 style={{ fontWeight: 300, letterSpacing: "0.08em" }}>VIDEOGRAPHY</h1>
      <div className="grid" style={{ marginTop: "1.25rem" }}>
        {videos.map(url => (
          <iframe
            key={url}
            src={url}
            style={{ width: "100%", minHeight: 260, border: 0 }}
            title={url}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ))}
      </div>
    </div>
  )
}
