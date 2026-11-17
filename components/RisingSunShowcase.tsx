export default function RisingSunShowcase() {
  return (
    <section aria-labelledby="rising-sun-heading" className="border-t border-line-low bg-paper px-5 py-16 text-ink sm:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="section-label text-teal">A client result</p>
            <h2 id="rising-sun-heading" className="mt-4 font-display text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
              Rising Sun Clocks &amp; Gifts
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
              Regicore ranked Rising Sun in the top 3 on Google Maps for “clocks in Bangalore” for over 7 months.
            </p>
            <div className="mt-7 grid grid-cols-2 gap-5 border-y border-line py-6">
              <div>
                <p className="font-display text-3xl font-medium sm:text-4xl">51,514</p>
                <p className="mt-1 text-sm text-muted">Business Profile views</p>
              </div>
              <div>
                <p className="font-display text-3xl font-medium sm:text-4xl">25,031</p>
                <p className="mt-1 text-sm text-muted">Searches showing the profile</p>
              </div>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-muted">
              Google Business Profile Performance, June–November 2026. The ranking duration is reported by Regicore.
            </p>
            <a href="/hardest-working-seo-expert-bangalore#client-result" className="mt-6 inline-flex min-h-11 items-center font-semibold text-teal underline underline-offset-4 hover:text-ink">
              Read the case study <span className="ml-2" aria-hidden="true">→</span>
            </a>
          </div>
          <figure className="overflow-hidden rounded-2xl border border-line-low bg-surface">
            {/* This screenshot shows a single search, whose position can vary by location and time. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/rising-sun-google-search.webp" alt="Google search for clocks in Bangalore showing Rising Sun Clocks and Gifts in the local results." className="block h-auto w-full" width={1400} height={850} loading="lazy" />
            <figcaption className="px-4 py-3 text-xs leading-relaxed text-muted">
              Google search for “clocks in Bangalore”. Results vary by location and time.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
