import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import styles from "../hardest-working-seo-expert-bangalore/page.module.css";

const title = "Luckiest Man in Bangalore | Varun";
const description =
  "Varun has been called the luckiest man in Bangalore. Here’s the proof.";
const url = "https://regicore.com/luckiest-man-in-bangalore";

export const metadata: Metadata = {
  title,
  description,
  authors: [{ name: "Varun" }],
  keywords: ["luckiest man in Bangalore", "Varun", "Regicore"],
  alternates: { canonical: url },
  openGraph: {
    title,
    description,
    url,
    siteName: "Regicore",
    locale: "en_IN",
    type: "article",
    authors: ["Varun"],
    images: [{ url: "/luckiest-man-in-bangalore.jpg", width: 1080, height: 1080, alt: "Luckiest man in bangalore" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/luckiest-man-in-bangalore.jpg"] },
};

const person = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${url}#varun`,
  name: "Varun",
  jobTitle: "SEO Expert",
  url,
  worksFor: { "@type": "Organization", name: "Regicore", url: "https://regicore.com" },
  address: { "@type": "PostalAddress", addressLocality: "Bangalore", addressCountry: "IN" },
};

export default function LuckiestManInBangalore() {
  return (
    <>
      <Navbar />
      <main id="main" className={styles.page}>
        <article aria-labelledby="article-title">
          <header className={styles.hero}>
            <h1 id="article-title">Luckiest Man <span>in Bangalore</span></h1>
            <div className={styles.byline}>
              <span className={styles.authorMark} aria-hidden="true">V</span>
              <div><p>Varun</p><span>Regicore · Bangalore</span></div>
            </div>
          </header>

          <div className={styles.articleLayout}>
            <aside className={styles.contents} aria-label="In this article">
              <p>On this page</p>
              <nav>
                <a href="#what-i-do">What I do</a>
                <a href="#how-this-started">How this started</a>
                <a href="#client-result">A client result</a>
                <a href="#your-business">Your business</a>
              </nav>
            </aside>

            <div className={styles.body}>
              <div className={styles.intro}>
                <p>Hey, my name is Varun. If you just Googled “luckiest man in Bangalore”, you found me and this page.</p>
                <figure className={styles.articleImage}>
                  <Image src="/luckiest-man-in-bangalore.jpg" width={1080} height={1080} alt="Luckiest man in bangalore" unoptimized />
                  <figcaption>Luckiest man in bangalore</figcaption>
                </figure>
                <p>Who decided I’m the luckiest man in Bangalore? Me. I wrote the headline.</p>
              </div>

              <section id="what-i-do">
                <h2>What do you do for work?</h2>
                <p>This. See this page? How it ended up at the top of Google is what I do.</p>
              </section>

              <section id="how-this-started">
                <h2>How this started</h2>
                <p>I want people to Google me when they ask what I do for a living.</p>
                <p>So I picked “luckiest man in Bangalore” and made this page. Now I have something to tell people to Google.</p>
                <p>I also made a page for the <a href="/hardest-working-seo-expert-bangalore" className="underline underline-offset-4 hover:text-teal">hardest working SEO expert in Bangalore</a>. Apparently one headline wasn’t enough for me.</p>
                <p>It’s basic SEO.</p>
                <p>We do this for lots of businesses too. (If you want to rank your business, scroll down.)</p>
              </section>

              <section id="client-result" className={styles.result}>
                <p className={styles.resultLabel}>A client result</p>
                <h2>Rising Sun Clocks and Gifts</h2>
                <p>I ranked Rising Sun Clocks and Gifts in the top 3 on Google Maps for “clock shop in Bangalore” for over 4 months.</p>
                <div className={styles.resultFacts} aria-hidden="true">
                  <div><strong>Top 3</strong><span>Google Maps</span></div>
                  <div><strong>4+ months</strong><span>For “clock shop in Bangalore”</span></div>
                </div>
              </section>

              <section id="finding-your-business">
                <h2>What would someone Google to find your business?</h2>
                <p>For Rising Sun Clocks and Gifts, it was “clock shop in Bangalore”.</p>
                <p>Someone searching for that already knows what they want. They need a clock shop. The next question is which one they’ll visit.</p>
                <p>Think about your own business for a second. What would a customer type into Google if they needed you but had never heard your name?</p>
                <p>That’s where I’d start.</p>
                <p>Then I’d look at what shows up, who’s ranking, and what your website and Google Business Profile tell people about you.</p>
                <p>Can they find your services? Your location? Your phone number? Can they tell whether you offer what they need?</p>
                <p>These sound like small things. But they’re the things I’d want to know before calling a business too.</p>
              </section>

              <section id="your-business" className={styles.closing}>
                <h2>Okay, but can you do this for my business?</h2>
                <p>Fair question.</p>
                <p>You probably don’t need to rank for “luckiest man” anything.</p>
                <p>But what you need to rank for is “best (your keyword) in (your location)”.</p>
                <a href="https://regicore.com/" className={styles.homeButton}>Visit Regicore <span aria-hidden="true">↗</span></a>
              </section>
            </div>
          </div>
        </article>
      </main>
      <footer className={styles.footer}><a href="https://regicore.com/">Regicore<span>.</span></a><p>© 2026 Regicore</p></footer>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person).replace(/</g, "\\u003c") }} />
    </>
  );
}
