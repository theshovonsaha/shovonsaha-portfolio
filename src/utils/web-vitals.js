import { getCLS, getFID, getLCP } from "web-vitals"

function sendToAnalytics({ name, delta, id }) {
  // Assumes Google Analytics is already loaded
  gtag("event", name, {
    event_category: "Web Vitals",
    event_label: id,
    value: Math.round(name === "CLS" ? delta * 1000 : delta),
    non_interaction: true,
  })
}

export function reportWebVitals() {
  getCLS(sendToAnalytics)
  getFID(sendToAnalytics)
  getLCP(sendToAnalytics)
}
