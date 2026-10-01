import Image from "next/image";
import Link from "next/link";
import { COMPANY } from "@/constants/company";

// Hinweisseite: Das Projekt wurde eingestellt. Der vollständige Stand liegt unverändert auf `main`.
export default function Home() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-4 py-16">
      <div className="max-w-xl w-full text-center">
        <Image
          src="/logo.webp"
          alt={COMPANY.tradingAs}
          width={96}
          height={96}
          priority
          className="mx-auto mb-8 h-24 w-24 object-contain"
        />

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Dieses Projekt wurde eingestellt
        </h1>
        <p className="text-gray-600 mb-10">
          {COMPANY.tradingAs} wird nicht weitergeführt. Vielen Dank für Ihr Interesse.
        </p>

        <p lang="en" className="text-xl font-semibold text-gray-900 mb-2">
          This project has been discontinued
        </p>
        <p lang="en" className="text-gray-600 mb-10">
          {COMPANY.tradingAs} will not be continued. Thank you for your interest.
        </p>

        <p className="text-gray-600 mb-10">
          Kontakt / Contact:{" "}
          <a
            href={`mailto:${COMPANY.contact.email}`}
            className="text-primary underline underline-offset-4 hover:no-underline"
          >
            {COMPANY.contact.email}
          </a>
        </p>

        <nav aria-label="Rechtliches" className="flex justify-center gap-6 text-sm text-gray-500">
          <Link href="/imprint" className="hover:text-gray-900 underline underline-offset-4">
            Impressum
          </Link>
          <Link href="/privacy" className="hover:text-gray-900 underline underline-offset-4">
            Datenschutz
          </Link>
        </nav>
      </div>
    </main>
  );
}
