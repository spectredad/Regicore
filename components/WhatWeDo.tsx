const services = [
  {
    name: "Google Ads",
    description: "Show up when someone searches Google for the service you sell. Track which searches turn into calls and enquiries.",
  },
  {
    name: "Meta Ads",
    description: "Run ads on Facebook and Instagram for people in the areas you serve.",
  },
  {
    name: "SEO",
    description: "Make the pages about your services easier to find in Google Search.",
  },
  {
    name: "AI Automation",
    description: "Connect your forms, calendar and CRM so new enquiries get a follow-up and your team has the details.",
  },
  {
    name: "AI SEO",
    description: "Make it easier for tools like ChatGPT to find and cite your business when people ask who to hire.",
  },
];

export default function WhatWeDo() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="scroll-mt-20 border-t border-line-low bg-surface px-5 py-12 text-ink sm:py-16"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="services-heading"
          className="mb-8 text-center font-display text-4xl font-medium leading-tight tracking-tight sm:mb-10 sm:text-5xl"
        >
          What we do
        </h2>
        <div className="grid grid-cols-2 items-start gap-3 sm:gap-4 lg:grid-cols-5">
          {services.map(({ name, description }) => (
            <details key={name} name="homepage-services" className="group rounded-2xl bg-paper">
              <summary className="cursor-pointer list-none rounded-2xl px-4 py-5 transition-colors hover:text-teal sm:px-5 sm:py-6 [&::-webkit-details-marker]:hidden">
                <span className="block text-lg font-semibold sm:text-xl">{name}</span>
                <span className="mt-2 block text-sm text-muted group-open:hidden">
                  Learn more <span aria-hidden="true">→</span>
                </span>
                <span className="mt-2 hidden text-sm text-muted group-open:block">Show less</span>
              </summary>
              <p className="px-4 pb-5 text-sm leading-relaxed text-muted sm:px-5 sm:pb-6">{description}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
