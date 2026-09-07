/**
 * When the site is deployed under a subpath (GitHub Pages project pages
 * serve from github.io/<repo-name>/, not the domain root), every raw
 * "/img/..." or "/audio/..." string needs that subpath in front of it.
 * Next.js does this automatically for its own managed assets, but not for
 * plain strings you write yourself in content.ts or components.
 *
 * This mirrors the `basePath` in next.config.ts. Locally, on Netlify and on
 * Vercel there is no subpath, so NEXT_PUBLIC_BASE_PATH is unset and this is
 * a no-op — only the GitHub Pages workflow sets it.
 */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefixes a root-relative path ("/img/x.jpg") with the deploy's base path. */
export function withBasePath(path: string): string {
  return path.startsWith("/") ? `${basePath}${path}` : path;
}
