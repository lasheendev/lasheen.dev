# [lasheen.dev](https://lasheen.dev)

The personal site of Youssef Lasheen and his independent studio, lasheen.dev.

Built with SvelteKit. Projects are listed in `json/projects_v2.json`. Their preview images are WebP files in `static/images/projects/` (at most 960px wide), with the full-size originals in `images/`. Browsers cache `/images/*` for a year (see `static/_headers`), so give a replaced image a new filename.

Blog posts are Markdown files in `src/posts/` (images in `static/blog/<slug>/`), published at `/blog/<slug>/` with an RSS feed at `/blog/index.xml`.

The CV is `src/resume/resume.json` (JSON Resume v1.0.0 format), published at `/resume`.
