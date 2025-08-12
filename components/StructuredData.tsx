export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Avala",
    "description": "AI detection that pops up when you highlight text, instantly. Truth at your cursor.",
    "url": "https://avala.ai",
    "applicationCategory": "ProductivityApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/ComingSoon"
    },
    "creator": {
      "@type": "Organization",
      "name": "Avala",
      "url": "https://avala.ai"
    },
    "featureList": [
      "Instant AI content detection",
      "Highlight-to-analyze functionality", 
      "No reports required",
      "Browser-based operation",
      "Real-time results"
    ],
    "screenshot": "https://avala.ai/screenshot.png",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "100"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}