import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center pt-16">
      {/* 404 Text */}
      <div className="mb-6">
        <span className="font-headline text-[120px] leading-none text-[#FF3B3F] opacity-20 select-none">
          404
        </span>
      </div>

      <h1 className="font-headline text-3xl md:text-4xl text-[#111827] mb-4">
        Page Not Found
      </h1>
      <p className="text-[#6B7280] text-lg mb-8 max-w-md">
        Looks like this page doesn&apos;t exist. Let&apos;s get you back on track.
      </p>

      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-[#FF3B3F] hover:bg-[#E63539] transition-all duration-200 shadow-[0_4px_14px_rgba(255,59,63,0.35)] hover:shadow-[0_8px_25px_rgba(255,59,63,0.45)]"
      >
        Back to Homepage
      </Link>
    </div>
  );
}
