import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-5 text-center">
      <p className="text-sm font-medium text-purple-500">404</p>
      <h1 className="mt-2 font-heading text-3xl font-bold text-bark-900">
        Page not found
      </h1>
      <p className="mt-2 text-sm text-sand-500">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="mt-6 rounded-full bg-purple-500 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-purple-600"
      >
        Back to Home
      </Link>
    </div>
  );
}
