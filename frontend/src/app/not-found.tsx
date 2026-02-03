import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <div className="rounded-3xl bg-white border border-sand-100 shadow-lg p-12 max-w-md">
        <p className="text-sm font-bold text-accent">404</p>
        <h1 className="mt-2 text-3xl font-extrabold text-purple-900 tracking-tight">
          Page not found
        </h1>
        <p className="mt-3 text-sm text-sand-500">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-purple-600 hover:shadow-lg transition-all shadow-[0_0_15px_rgba(103,61,230,0.3)]"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
