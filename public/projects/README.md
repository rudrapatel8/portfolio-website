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

### Step-by-step (Windows)

> **Important:** push the videos with the **git command line**, NOT the GitHub
> website. GitHub's web "upload files" / drag-drop caps each file at **25 MB**,
> which is why your push was rejected. Pushing via `git` allows up to **100 MB**
> per file — and your clips (32 MB & 42 MB) are well under that.

```powershell
# 1. Get the repo locally (skip if you already have it cloned)
git clone https://github.com/rudrapatel8/portfolio-website.git
cd portfolio-website
git checkout cursor/immersive-portfolio-f139

# 2. Copy + rename the two videos into public/projects
$src = "C:\Users\fortn\Downloads\Project Media"
Copy-Item "$src\Real Estate Valuation Engine Walkthrough.mp4" "public\projects\real-estate-valuation-engine.mp4"
Copy-Item "$src\Semantic Code Search Engine Walkthrough.mp4"  "public\projects\semantic-code-search-engine.mp4"

# 3. Commit + push via git (NOT the website)
git add public/projects/*.mp4
git commit -m "Add walkthrough videos"
git push
```

That's it — the panels will play the videos automatically.

> If a file is ever **larger than 100 MB**, GitHub will block the push. Two
> options then: (a) compress it with HandBrake/ffmpeg, or (b) use Git LFS:
> `git lfs install && git lfs track "*.mp4"` before adding.
