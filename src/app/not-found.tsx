import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <section className="flex h-screen flex-col items-center justify-center gap-y-4">
      <p className="text-green-600 text-7xl font-bold">404</p>
      <h1 className="text-4xl md:text-5xl font-extrabold">Page not found</h1>
      <p className="text-gray-500">
        The page you are looking for doesn&apos;t exist.
      </p>
      <Button variant="outline" asChild>
        <Link href="/">Back to home</Link>
      </Button>
    </section>
  );
}
