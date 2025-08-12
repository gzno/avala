import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import VideoPlayer from "@/components/VideoPlayer"
import StructuredData from "@/components/StructuredData"
import ScrollToTop from "@/components/ScrollToTop"
import AnimatedSection from "@/components/IntersectionObserver"

export default function HomePage() {
  return (
    <>
      <StructuredData />
      <ScrollToTop />
      
      
      <div className="min-h-screen bg-black text-white relative overflow-hidden font-sans">
      {/* Background Images - Using all 5 images for rich layered effect */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Launch%20Page%20Image%201.jpg-pYdDOpF5sNco4v8T2IEeOXY9nfLe77.jpeg"
          alt="AI detection background"
          fill
          className="object-cover opacity-50"
          priority
          quality={85}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Launch%20Page%20Image%202.jpg-tG5J4AzG205IkCBGZseG0Mk0VLiAsL.jpeg"
          alt="AI technology background"
          fill
          className="object-cover opacity-40"
          quality={75}
        />
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Launch%20Page%20Image%205.jpg-paHTdH2illL4yLEmUJTfW7RYZxROsN.jpeg"
          alt="Digital interface background"
          fill
          className="object-cover opacity-35"
          quality={75}
        />
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Launch%20Page%20Image%204.jpg-y6NBbQ7acRiusA1gnESWP9Zj98gEqD.jpeg"
          alt="Modern technology background"
          fill
          className="object-cover opacity-30"
          quality={75}
        />
      </div>

      {/* Header */}
      <header className="relative z-10 p-8" role="banner">
        <nav className="flex items-center" role="navigation" aria-label="Main navigation">
          <Link href="/" aria-label="Avala - Go to homepage">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icon128-XjCfMVctJG9W9ZYrkF8E5RnWwfKNmd.png"
              alt="Avala Logo"
              width={48}
              height={48}
              className="w-12 h-12 hover:opacity-80 transition-opacity"
            />
          </Link>
        </nav>
      </header>

      {/* Hero Section with Launch Page Image 1 Background */}
      <main id="main-content" className="relative z-10 flex flex-col items-center justify-center min-h-[85vh] px-8 text-center" role="main">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Launch%20Page%20Image%201.jpg-pYdDOpF5sNco4v8T2IEeOXY9nfLe77.jpeg"
            alt=""
            fill
            className="object-cover opacity-60"
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto space-y-10 opacity-0 translate-y-4 animate-[heroFadeIn_1s_ease-out_0.3s_forwards]">
          <AnimatedSection animation="slideUp" delay={800}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-[#5c6eff] to-[#b9c6ff] bg-clip-text text-transparent">Truth</span> at your{" "}
              <span className="bg-gradient-to-r from-[#5c6eff] to-[#b9c6ff] bg-clip-text text-transparent">cursor</span>.
            </h1>
          </AnimatedSection>

          <AnimatedSection animation="slideUp" delay={1000}>
            <div className="space-y-5 text-base md:text-lg lg:text-xl text-gray-300">
              <p>AI detection that pops up when you highlight, instantly.</p>
              <p className="font-medium">
                <span className="bg-gradient-to-r from-[#5c6eff] to-[#b9c6ff] bg-clip-text text-transparent">
                  No reports. No effort. Just answers.
                </span>
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="scaleIn" delay={1200}>
            <div className="relative inline-block">
              <Link href="/waitlist" aria-label="Join the Avala waitlist for early access">
                <Button
                  size="lg"
                  className="px-8 py-4 rounded-full text-xl font-medium transition-all duration-300 hover:scale-105 relative overflow-hidden group focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black"
                  style={{
                    backgroundColor: "#1b1b1b",
                    color: "white",
                    border: "1px solid #374151",
                    boxShadow: "rgba(55, 63, 141, 0.7) 0px -5px 12px -5px, rgba(55, 63, 141, 0.7) 0px -7px 22px -10px",
                  }}
                  role="button"
                  tabIndex={0}
                >
                  <span className="relative z-10">Join Waitlist</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#3b4394] to-[#7a82e3] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>

        {/* Video Section */}
        <AnimatedSection animation="slideUp" delay={600} className="relative z-10 mt-16 w-full max-w-4xl mx-auto">
          <VideoPlayer videoId="tcaw6lzYt1Q" title="Avala Demo Video" />
        </AnimatedSection>
      </main>

      {/* Section with Launch Page Image 3 Background */}
      <section className="relative z-10 py-24 px-8" aria-label="Product features">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Launch%20Page%20Image%203.jpg-JmHHNNxUCb30w00tpycvHQpXwaRLMv.jpeg"
            alt=""
            fill
            className="object-cover opacity-40"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center mb-16">
          <AnimatedSection animation="fadeIn">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10">
              You{" "}
              <span className="bg-gradient-to-r from-[#5c6eff] to-[#b9c6ff] bg-clip-text text-transparent">
                highlight
              </span>{" "}
              it, we{" "}
              <span className="bg-gradient-to-r from-[#5c6eff] to-[#b9c6ff] bg-clip-text text-transparent">verify</span>{" "}
              it.
            </h2>
          </AnimatedSection>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            {/* Clear Explanations */}
            <AnimatedSection animation="slideUp" delay={100}>
              <div className="space-y-6">
              <div className="flex justify-center">
                <div className="w-32 h-32 bg-gray-800/50 rounded-full border border-gray-700 flex items-center justify-center">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/detection-MRlryDGKgdrQ8KcqcXUydLaalNKfLv.png"
                    alt="Detection Icon"
                    width={56}
                    height={56}
                    className="w-14 h-14 opacity-80"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold">
                <span className="bg-gradient-to-r from-[#5c6eff] to-[#b9c6ff] bg-clip-text text-transparent">
                  Clear Explanations
                </span>
              </h3>
                <p className="text-gray-400 leading-relaxed text-base">
                  Every result includes a confidence score and a simple explanation so you know why it was flagged.
                </p>
              </div>
            </AnimatedSection>

            {/* Instant Detection */}
            <AnimatedSection animation="slideUp" delay={200}>
              <div className="space-y-6">
              <div className="flex justify-center">
                <div className="w-32 h-32 bg-gray-800/50 rounded-full border border-gray-700 flex items-center justify-center">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/context-4ult72zsTu48vW3WI3TFYl5ytSheRU.png"
                    alt="Context Icon"
                    width={56}
                    height={56}
                    className="w-14 h-14 opacity-80"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold">
                <span className="bg-gradient-to-r from-[#8b5cf6] to-[#c084fc] bg-clip-text text-transparent">
                  Instant Detection
                </span>
              </h3>
                <p className="text-gray-400 leading-relaxed text-base">
                  Get AI results the moment you highlight text. No digging or extra steps required.
                </p>
              </div>
            </AnimatedSection>

            {/* Always in Context */}
            <AnimatedSection animation="slideUp" delay={300}>
              <div className="space-y-6">
              <div className="flex justify-center">
                <div className="w-32 h-32 bg-gray-800/50 rounded-full border border-gray-700 flex items-center justify-center">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/document-SRV48iL52aWww1131BGlBtjwoRadCS.png"
                    alt="Document Icon"
                    width={56}
                    height={56}
                    className="w-14 h-14 opacity-80"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold">
                <span className="bg-gradient-to-r from-[#5c6eff] to-[#b9c6ff] bg-clip-text text-transparent">
                  Always in Context
                </span>
              </h3>
                <p className="text-gray-400 leading-relaxed text-base">
                  Avala runs directly in your browser and shows results right on the page you're reading.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Footer CTA with Launch Page Image 5 Background */}
      <footer className="relative z-10 py-20 px-8 text-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Launch%20Page%20Image%205.jpg-paHTdH2illL4yLEmUJTfW7RYZxROsN.jpeg"
            alt=""
            fill
            className="object-cover opacity-50"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5">
            <span className="bg-gradient-to-r from-[#5d6fff] to-[#99a9ff] bg-clip-text text-transparent">Avala</span>{" "}
            <span className="bg-gradient-to-r from-[#5d6fff] to-[#99a9ff] bg-clip-text text-transparent">fits</span>{" "}
            <span className="bg-gradient-to-r from-[#5d6fff] to-[#99a9ff] bg-clip-text text-transparent">your</span>{" "}
            <span className="bg-gradient-to-r from-[#5d6fff] to-[#99a9ff] bg-clip-text text-transparent">flow</span>
          </h2>

          <p className="text-lg md:text-xl text-gray-300">
            Join the waitlist <span className="font-semibold text-white">now</span> for early access to{" "}
            <span className="font-semibold text-blue-400">real-time AI detection</span> built for the{" "}
            <span className="font-semibold text-white">modern web</span>.
          </p>

          <Link href="/waitlist" aria-label="Join the Avala waitlist now for early access">
            <Button
              size="lg"
              className="px-8 py-4 rounded-full text-xl font-medium transition-all duration-500 ease-out hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/30 text-white border-0 relative overflow-hidden group focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-black"
              style={{
                background: "linear-gradient(135deg, #231d45 0%, #453992 100%)",
              }}
              role="button"
              tabIndex={0}
            >
              <span className="relative z-10">Join Waitlist</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#3b4394] to-[#7a82e3] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"></div>
            </Button>
          </Link>
        </div>
      </footer>
    </div>
    </>
  )
}
