import Link from "next/link";

export default function notFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-4 min-h-[calc(100vh-100px)]">
      <h1 className="text-8xl font-semibold flex items-center justify-center">
        404 Not Found
      </h1>
      <p className="text-2xl font-semibold flex items-center justify-center">
        The page you are looking for does not exist.
      </p>
      <p className="text-2xl font-semibold flex items-center justify-center">
        Please check the URL and try again.
      </p>
      <Link href="/" className="underline text-2xl font-semibold">
        Back to Home
      </Link>
    </div>
  );
}
