import type { NextConfig } from "next";

// Eingestellte Unterseiten zeigen auf die Hinweisseite. Bewusst temporär (307),
// damit eine Reaktivierung von `main` nicht an gecachten 308-Redirects scheitert.
const DISCONTINUED_ROUTES = ["/about", "/features", "/pricing", "/technology", "/terms", "/cookies"] as const;

const nextConfig: NextConfig = {
  images: {
    unoptimized: false,
  },
  async redirects() {
    return DISCONTINUED_ROUTES.map((source) => ({ source, destination: "/", permanent: false }));
  },
};

export default nextConfig;
