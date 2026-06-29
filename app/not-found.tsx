import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-5">
      <div className="text-center max-w-md">
        <div className="font-display text-8xl font-semibold text-lav mb-6">404</div>
        <h1 className="font-display text-3xl font-semibold text-ink mb-3">
          Page not found
        </h1>
        <p className="text-muted mb-8">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="bg-ink text-white font-medium px-6 py-3.5 rounded-xl hover:opacity-90 transition-opacity"
          >
            Back to home
          </Link>
          <Link
            href="/#book"
            className="bg-peach text-ink font-medium px-6 py-3.5 rounded-xl hover:brightness-95 transition-all"
          >
            Book a call
          </Link>
        </div>
      </div>
    </div>
  );
}
