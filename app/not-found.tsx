import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-midnight flex items-center justify-center px-5">
      <div className="text-center max-w-md">
        <div className="font-display text-8xl font-semibold text-teal mb-6">404</div>
        <h1 className="font-display text-3xl font-semibold text-ink mb-3">
          Page not found
        </h1>
        <p className="text-muted mb-8">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="bg-soft-white text-midnight font-semibold px-6 py-3.5 hover:bg-sand transition-colors duration-300 text-[13px] uppercase tracking-[0.08em]"
          >
            Back to home
          </Link>
          <Link
            href="/#book"
            className="border border-soft-white text-soft-white font-semibold px-6 py-3.5 hover:bg-teal/10 hover:border-teal transition-colors duration-300 text-[13px] uppercase tracking-[0.08em]"
          >
            Book a call
          </Link>
        </div>
      </div>
    </div>
  );
}
