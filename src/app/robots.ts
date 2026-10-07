import type { MetadataRoute } from "next"

import { siteUrl } from "@/lib/clinic"

// Required for metadata routes in a static export (`output: "export"`).
export const dynamic = "force-static"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}
