import React from "react"
export const metadata = {
  title: "Privacy | The Shovon Saha",
  robots: {
    index: false,
    follow: false,
  },
}

export default function PrivacyPage() {
  return (
    <div className="page" style={{ padding: "3rem 0", maxWidth: 800 }}>
      <h1>Privacy Policy</h1>
      <p>
        This website collects minimal analytics and contact-form data only for
        portfolio communication and performance understanding.
      </p>
    </div>
  )
}
