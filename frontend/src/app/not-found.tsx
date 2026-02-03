import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <h1 className="font-heading text-6xl font-bold text-purple-500">404</h1>
      <h2 className="mt-4 text-2xl font-semibold text-bark-900">
        Page Not Found
      </h2>
      <p className="mt-2 text-sand-600">
        Looks like this page wandered off. Let&apos;s get you back on track.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-purple-500 px-8 py-3 font-semibold text-white transition-colors hover:bg-purple-600"
      >
        Back to Home
      </Link>
    </div>
  );
}
