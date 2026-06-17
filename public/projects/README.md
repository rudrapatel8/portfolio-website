# Project media

Drop the media for each project into this folder. The site references these
exact paths (configured in `src/data/projects.ts`).

## Already in the repo (images)

- `brain-tumor-mri.png` — Brain Tumor MRI Detection
- `reccs.png` — Reccs
- `samuraifocus.png` — Samurai Focus
- `skillsync.png` — used for the Stock Market Learning Platform card + as the
  poster frame for the two videos

## You need to add these two videos

The walkthrough `.mp4` files from your local **Project Media** folder are **not**
committed (they're large and were never in git history). Copy them here and
rename to these exact filenames:

| Your local file                                | Rename / copy to                          |
| ---------------------------------------------- | ----------------------------------------- |
| `Real Estate Valuation Engine Walkthrough.mp4` | `real-estate-valuation-engine.mp4`        |
| `Semantic Code Search Engine Walkthrou….mp4`   | `semantic-code-search-engine.mp4`         |

Until those files exist the two video panels gracefully fall back to the
`skillsync.png` poster image, so the site still works.

### Quick copy (Windows PowerShell)

```powershell
$src = "C:\Users\fortn\Downloads\Project Media"
$dst = "public\projects"
Copy-Item "$src\Real Estate Valuation Engine Walkthrough.mp4" "$dst\real-estate-valuation-engine.mp4"
Copy-Item "$src\Semantic Code Search Engine Walkthrough.mp4" "$dst\semantic-code-search-engine.mp4"
```

> Tip: if a video is very large, consider compressing it (e.g. with HandBrake or
> ffmpeg) before committing so the repo stays lean.
