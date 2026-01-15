import { Nav } from "@/components/Nav";
import { StarsBackground } from "@/components/StarsBackground";
import Image from "next/image";
import { Mail, Phone, MapPin, GraduationCap, Briefcase, Code, ExternalLink, Github, Sparkles, Brain, Zap, Target, Rocket, Gamepad2, BookOpen } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      <StarsBackground />
      <Nav />

      <main className="mx-auto w-[min(1100px,92vw)] pb-28 pt-24 sm:pt-28">
        {/* Hero */}
        <section className="pt-10 sm:pt-16">
          <div className="rounded-3xl border border-[color:var(--surface-border)] bg-[color:var(--surface)] p-6 backdrop-blur-2xl shadow-[0_26px_90px_-56px_rgba(0,0,0,0.75)] sm:p-10">
            <div className="text-center sm:text-left">
              <p className="text-sm font-medium text-[color:var(--muted)]">
                Computer Science &amp; Data Science Student
              </p>
              <h1
                className="name-animated mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-6xl"
                style={{
                  fontFamily: "var(--font-playfair), ui-serif, Georgia, 'Times New Roman', serif",
                }}
              >
                Rudra Patel
          </h1>
              <p className="mt-4 max-w-2xl text-pretty text-base leading-7 text-[color:var(--muted)] sm:text-lg sm:leading-8">
                Bachelor of Arts in Computer Science and Data Science — Rutgers University • Expected 2027.
                Based in New Brunswick, NJ. US Citizen.
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
              <a
                href="mailto:patelrudrab8@gmail.com"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-blue-300/50 bg-gradient-to-r from-blue-500/90 to-indigo-500/90 px-5 text-sm font-medium text-white backdrop-blur-xl shadow-lg shadow-blue-500/30 transition hover:from-blue-600 hover:to-indigo-600 hover:shadow-blue-500/50 hover:scale-105 dark:border-blue-400/50 dark:from-blue-600/90 dark:to-indigo-600/90 dark:hover:from-blue-500 dark:hover:to-indigo-500"
              >
                <Mail className="h-4 w-4" />
                patelrudrab8@gmail.com
              </a>
              <a
                href="mailto:rp1452@scarletmail.rutgers.edu"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-indigo-300/50 bg-gradient-to-r from-indigo-500/90 to-purple-500/90 px-5 text-sm font-medium text-white backdrop-blur-xl shadow-lg shadow-indigo-500/30 transition hover:from-indigo-600 hover:to-purple-600 hover:shadow-indigo-500/50 hover:scale-105 dark:border-indigo-400/50 dark:from-indigo-600/90 dark:to-purple-600/90 dark:hover:from-indigo-500 dark:hover:to-purple-500"
              >
                <Mail className="h-4 w-4" />
                rp1452@scarletmail.rutgers.edu
              </a>
              <a
                href="https://www.linkedin.com/in/rudrapatel8"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-purple-300/50 bg-gradient-to-r from-purple-500/90 to-violet-500/90 px-5 text-sm font-medium text-white backdrop-blur-xl shadow-lg shadow-purple-500/30 transition hover:from-purple-600 hover:to-violet-600 hover:shadow-purple-500/50 hover:scale-105 dark:border-purple-400/50 dark:from-purple-600/90 dark:to-violet-600/90 dark:hover:from-purple-500 dark:hover:to-violet-500"
              >
                <ExternalLink className="h-4 w-4" />
                LinkedIn
              </a>
              <span className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-violet-300/50 bg-gradient-to-r from-violet-500/90 to-purple-500/90 px-5 text-sm font-medium text-white backdrop-blur-xl shadow-lg shadow-violet-500/30 dark:border-violet-400/50 dark:from-violet-600/90 dark:to-purple-600/90">
                <Phone className="h-4 w-4" />
                732-532-7870
              </span>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="mt-14 scroll-mt-28">
          <h2 className="text-sm font-semibold tracking-wide text-[color:var(--muted)]">
            About
          </h2>
          <div className="mt-4 rounded-3xl border border-[color:var(--surface-border)] bg-[color:var(--surface)] p-6 backdrop-blur-2xl sm:p-8">
            <p className="text-base leading-7 text-[color:var(--fg)] sm:text-lg sm:leading-8">
              Hey there! I'm Rudra Patel, a Computer Science and Data Science student at Rutgers University, passionate about building intelligent systems and exploring the intersection of software engineering, data, and AI.
            </p>
            <p className="mt-4 text-base leading-7 text-[color:var(--muted)] sm:text-lg sm:leading-8">
              I enjoy working on projects that combine data-driven insights with scalable engineering, whether it's through designing clean front-end experiences or developing models that uncover meaningful trends from complex datasets.
            </p>

            {/* Current Focus */}
            <div className="mt-8 rounded-2xl border border-[color:var(--hairline)] bg-gradient-to-br from-purple-50/30 to-blue-50/30 p-6 dark:from-purple-950/20 dark:to-blue-950/20">
              <div className="flex items-center gap-2 mb-4">
                <Target className="h-5 w-5 text-[color:var(--glow)]" />
                <h3 className="text-lg font-semibold">Current Focus</h3>
              </div>
              <ul className="space-y-3 text-sm leading-6 text-[color:var(--muted)] sm:text-base">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[color:var(--glow)] flex-shrink-0" />
                  <span>Exploring LLM fine-tuning, RAG pipelines, and multimodal AI applications.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[color:var(--glow)] flex-shrink-0" />
                  <span>Gaining hands-on experience with data science workflows – from data wrangling and visualization to predictive modeling using Python (pandas, scikit-learn, PyTorch).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[color:var(--glow)] flex-shrink-0" />
                  <span>Deepening my understanding of web technologies like React, Node.js, and Next.js to create dynamic, responsive interfaces.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[color:var(--glow)] flex-shrink-0" />
                  <span>Experimenting with cloud tooling for deploying and scaling ML-backed web applications.</span>
                </li>
              </ul>
            </div>

            {/* Projects & Interests */}
            <div className="mt-6 rounded-2xl border border-[color:var(--hairline)] bg-gradient-to-br from-blue-50/30 to-purple-50/30 p-6 dark:from-blue-950/20 dark:to-purple-950/20">
              <div className="flex items-center gap-2 mb-4">
                <Zap className="h-5 w-5 text-[color:var(--glow)]" />
                <h3 className="text-lg font-semibold">Projects &amp; Interests</h3>
              </div>
              <p className="text-sm leading-6 text-[color:var(--muted)] sm:text-base mb-3">
                Some things I love building:
              </p>
              <ul className="space-y-2 text-sm leading-6 text-[color:var(--muted)] sm:text-base">
                <li className="flex items-start gap-3">
                  <Code className="h-4 w-4 mt-0.5 text-[color:var(--glow)] flex-shrink-0" />
                  <span>Data dashboards that transform raw numbers into clear stories.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Brain className="h-4 w-4 mt-0.5 text-[color:var(--glow)] flex-shrink-0" />
                  <span>AI-driven features for web apps using APIs like OpenAI and Hugging Face.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Rocket className="h-4 w-4 mt-0.5 text-[color:var(--glow)] flex-shrink-0" />
                  <span>Chrome extensions or tools that improve productivity or learning.</span>
                </li>
              </ul>
              <p className="mt-4 text-sm text-[color:var(--muted)] sm:text-base">
                You can find highlights of my technical work in my pinned repositories!
              </p>
            </div>
          </div>
        </section>

        {/* Outside of the <main> */}
        <section id="outside" className="mt-14 scroll-mt-28">
          <h2 className="flex items-center gap-2 text-sm font-semibold tracking-wide text-[color:var(--muted)]">
            <Code className="h-4 w-4" />
            Outside of the <span className="font-mono text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-blue-400 dark:to-indigo-400">&lt;main&gt;</span>
          </h2>
          <div className="mt-4 rounded-3xl border-2 border-violet-300/50 dark:border-violet-400/50 bg-gradient-to-br from-indigo-50/80 via-purple-50/80 to-violet-50/80 dark:from-indigo-950/60 dark:via-purple-950/60 dark:to-violet-950/60 p-6 backdrop-blur-2xl shadow-xl shadow-violet-500/20 dark:shadow-violet-500/30 sm:p-8">
            <p className="text-base font-medium leading-6 text-[color:var(--fg)] sm:text-lg mb-6">
              When I'm not writing code, you'll probably find me:
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border-2 border-blue-300/60 dark:border-blue-400/60 bg-gradient-to-br from-blue-100/90 to-indigo-100/90 dark:from-blue-900/70 dark:to-indigo-900/70 p-6 shadow-lg shadow-blue-500/20 dark:shadow-blue-500/30 transition hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="rounded-full bg-gradient-to-r from-blue-400 to-indigo-400 p-2 shadow-lg shadow-blue-500/30">
                    <Gamepad2 className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[color:var(--fg)]">Sports &amp; Anime</h3>
                </div>
                <p className="text-sm leading-7 text-[color:var(--muted)] sm:text-base">
                  Warriors fan. Watching or playing basketball, or volleyball. Catching up on anime (especially <span className="font-semibold text-blue-600 dark:text-blue-400">Demon Slayer</span>, <span className="font-semibold text-blue-600 dark:text-blue-400">One Piece</span><span className="text-blue-600 dark:text-blue-400">*</span>, and <span className="font-semibold text-blue-600 dark:text-blue-400">Black Clover</span>).
                </p>
                <p className="mt-3 text-xs italic text-[color:var(--muted)] sm:text-sm">
                  * fully caught up to One Piece
          </p>
        </div>
              <div className="rounded-2xl border-2 border-purple-300/60 dark:border-purple-400/60 bg-gradient-to-br from-purple-100/90 to-violet-100/90 dark:from-purple-900/70 dark:to-violet-900/70 p-6 shadow-lg shadow-purple-500/20 dark:shadow-purple-500/30 transition hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="rounded-full bg-gradient-to-r from-purple-400 to-violet-400 p-2 shadow-lg shadow-purple-500/30">
                    <BookOpen className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[color:var(--fg)]">Learning &amp; Research</h3>
                </div>
                <p className="text-sm leading-7 text-[color:var(--muted)] sm:text-base mb-4">
                  Reading books that blend science, psychology, and creativity. Tracking the latest in AI advancements, from state-of-the-art transformer architectures to emerging trends in agentic systems and AI alignment research.
                </p>
                <div className="mt-4 pt-4 border-t border-purple-200/50 dark:border-purple-700/50">
                  <p className="text-xs font-semibold text-[color:var(--muted)] mb-2 uppercase tracking-wide">Recent Recommendations:</p>
                  <ul className="space-y-1.5 text-xs leading-6 text-[color:var(--muted)] sm:text-sm">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-purple-500 flex-shrink-0" />
                      <span><span className="font-medium text-purple-700 dark:text-purple-300">Artificial Intelligence: A Modern Approach</span></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-purple-500 flex-shrink-0" />
                      <span><span className="font-medium text-purple-700 dark:text-purple-300">The Alignment Problem: Machine Learning and Human Values</span></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-purple-500 flex-shrink-0" />
                      <span><span className="font-medium text-purple-700 dark:text-purple-300">Life 3.0: Being Human in the Age of Artificial Intelligence</span></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-purple-500 flex-shrink-0" />
                      <span><span className="font-medium text-purple-700 dark:text-purple-300">The Singularity Is Nearer: When We Merge with AI</span></span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="mt-14 scroll-mt-28">
          <h2 className="text-sm font-semibold tracking-wide text-[color:var(--muted)]">
            Experience
          </h2>
          <div className="mt-4 grid gap-4">
            <div className="rounded-3xl border border-[color:var(--surface-border)] bg-[color:var(--surface)] p-6 backdrop-blur-2xl sm:p-8">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <div className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-[color:var(--muted)]" />
                  <p className="text-lg font-semibold">Software Engineering Intern</p>
                </div>
                <p className="text-sm text-[color:var(--muted)]">Jun 2025 – Sep 2025</p>
              </div>
              <p className="mt-1 text-sm text-[color:var(--muted)]">
                United Window and Door • Springfield, NJ
              </p>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-[color:var(--muted)]">
                <li>
                  Built a shipping route unlock tool using Node.js and MSSQL that efficiently enables the logistics
                  process and mitigates bottlenecks in the supply chain process.
                </li>
                <li>
                  Created an automated file-checker using Nodemailer to notify staff members of discrepancies instead
                  of verifying by hand, resulting in drastically reduced time.
                </li>
                <li>
                  Developed and integrated a dynamic template system on the website that allows teams to better
                  organize and share schedules.
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-[color:var(--surface-border)] bg-[color:var(--surface)] p-6 backdrop-blur-2xl sm:p-8">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <div className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-[color:var(--muted)]" />
                  <p className="text-lg font-semibold">Software Engineering Intern</p>
                </div>
                <p className="text-sm text-[color:var(--muted)]">Jun 2024 – Sep 2024</p>
              </div>
              <p className="mt-1 text-sm text-[color:var(--muted)]">
                United Window and Door • Springfield, NJ
              </p>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-[color:var(--muted)]">
                <li>
                  Created a live sales dashboard using Next.js and Chart.js, providing daily performance statistics for
                  2000 clients and sales reps.
                </li>
                <li>
                  Upgraded the company’s internal website with updated, efficient features to improve user experience
                  and speed of business operations.
                </li>
                <li>
                  Collaborated with sales and operations staff on designing tools that improved workflows and reduced
                  manual tasks.
                </li>
                <li>Utilized Git for version control and version releases to ensure consistency and site uptime.</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-[color:var(--surface-border)] bg-[color:var(--surface)] p-6 backdrop-blur-2xl sm:p-8">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-[color:var(--muted)]" />
                  <p className="text-lg font-semibold">Technology + Engineering Lead</p>
                </div>
                <p className="text-sm text-[color:var(--muted)]">Apr 2022 – Nov 2024</p>
              </div>
              <p className="mt-1 text-sm text-[color:var(--muted)]">
                Wheels For All (Non-Profit) • North Brunswick, NJ
              </p>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-[color:var(--muted)]">
                <li>
                  Designed and prototyped 3D-printable components for bicycles in Onshape by modifying an open-source
                  model to reduce cost for the organization.
                </li>
                <li>
                  Developed an inventory tracker with Google Apps Script and Supabase, providing real-time tracking of
                  parts and repairs for volunteers.
                </li>
                <li>
                  Automated onboarding for donors and recipients via Typeform and Zapier to facilitate fast eligibility
                  checks and improved response times.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="mt-14 scroll-mt-28">
          <h2 className="text-sm font-semibold tracking-wide text-[color:var(--muted)]">
            Skills
          </h2>
          <div className="mt-4 rounded-3xl border border-[color:var(--surface-border)] bg-[color:var(--surface)] p-6 backdrop-blur-2xl sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <SkillBlock
                title="Languages"
                items={[
                  "Java",
                  "Python",
                  "C/C++",
                  "SQL (Postgres)",
                  "JavaScript",
                  "HTML/CSS",
                  "R",
                ]}
              />
              <SkillBlock title="Frameworks" items={["Flask", "FastAPI", "JUnit"]} />
              <SkillBlock
                title="Developer Tools"
                items={["Git", "Docker", "TravisCI", "IntelliJ", "Eclipse"]}
              />
              <SkillBlock
                title="Libraries"
                items={["React", "Node.js", "pandas", "NumPy", "Matplotlib", "Material-UI"]}
              />
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mt-14 scroll-mt-28">
          <div className="flex items-center gap-2">
            <Code className="h-5 w-5 text-[color:var(--muted)]" />
            <h2 className="text-sm font-semibold tracking-wide text-[color:var(--muted)]">
              Projects
            </h2>
          </div>
          <div className="mt-4 grid gap-6 sm:grid-cols-2">
            {/* Landscape images row */}
            <ProjectCard
              title="SkillSync"
              description="A responsive web app that provides brief lessons on stock market basics for beginner investors/students. Utilized Chart.js for rendering real-time and historical stock data through interactive graphs. Developed user authentication using JWT and MongoDB for safe tracking of user study progress and tailored learning experiences."
              tech={["MERN", "MongoDB", "Express.js", "React.js", "Node.js", "Chart.js"]}
              period="Jan 2025 – Feb 2025"
              image="/projects/skillsync.png"
              githubLink="https://github.com/rudrapatel8/SkillSync---Stock-Market-Learning-Tool"
              imageAspect="landscape"
            />
            <ProjectCard
              title="Brain Tumor MRI Detection Tool"
              description="Created an end-to-end structured neural network that takes 2D MRI scans of glioma, meningioma, pituitary tumors, and healthy brains. Performed pre-processing steps like resizing, labeling, shuffling, and splitting data for training/testing. Developed and trained a multilayer CNN for 4-class tumor classification, achieving 91.15–93.38% accuracy."
              tech={["TensorFlow/Keras", "NumPy", "Pandas", "Matplotlib", "Seaborn", "scikit-learn"]}
              period="ML Project"
              image="/projects/brain-tumor-mri.png"
              kaggleLink="https://www.kaggle.com/code/rudrapatel846/brain-tumor-classification-detection-tool"
              imageAspect="landscape"
            />
            {/* Portrait images row */}
            <ProjectCard
              title="Reccs"
              description="A cross-platform mobile application for personalized recommendations spanning categories such as media, food, and lifestyle. Implemented Firebase Authentication, Firestore and Cloud functions for secure user data, real-time updates and scalable backend. Built custom categories, group chats and creator channels with React Native Navigation and Redux Toolkit. Currently in production and will be released soon."
              tech={["React Native", "Expo", "Firebase", "Redux Toolkit"]}
              period="In Production"
              image="/projects/reccs.png"
              isInProduction={true}
              imageAspect="portrait"
            />
            <ProjectCard
              title="SamuraiFocus"
              description="Developed a productivity Chrome extension that includes a customizable Pomodoro timer and task manager. Incorporated Chrome Storage API for permanent session storage and Web Audio API for ambient soundscapes to promote increased focus. Employed CSS for custom theming and a personalized user experience."
              tech={["JavaScript", "Chrome Storage API", "Web Audio API", "HTML/CSS"]}
              period="Chrome Extension"
              image="/projects/samuraifocus.png"
              githubLink="https://github.com/rudrapatel8/SamuraiFocus---Chrome-Extension"
              imageAspect="portrait"
            />
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-14 scroll-mt-28">
          <h2 className="text-sm font-semibold tracking-wide text-[color:var(--muted)]">
            Contact
          </h2>
          <div className="mt-4 rounded-3xl border border-[color:var(--surface-border)] bg-[color:var(--surface)] p-6 backdrop-blur-2xl sm:p-8">
            <p className="text-sm text-[color:var(--muted)]">
              Best way to reach me is email. I’m always open to internships and interesting builds.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="mailto:patelrudrab8@gmail.com"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-blue-300/50 bg-gradient-to-r from-blue-500/90 to-indigo-500/90 px-5 text-sm font-medium text-white backdrop-blur-xl shadow-lg shadow-blue-500/30 transition hover:from-blue-600 hover:to-indigo-600 hover:shadow-blue-500/50 hover:scale-105 dark:border-blue-400/50 dark:from-blue-600/90 dark:to-indigo-600/90 dark:hover:from-blue-500 dark:hover:to-indigo-500"
              >
                <Mail className="h-4 w-4" />
                Email me
              </a>
              <a
                href="mailto:rp1452@scarletmail.rutgers.edu"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-indigo-300/50 bg-gradient-to-r from-indigo-500/90 to-purple-500/90 px-5 text-sm font-medium text-white backdrop-blur-xl shadow-lg shadow-indigo-500/30 transition hover:from-indigo-600 hover:to-purple-600 hover:shadow-indigo-500/50 hover:scale-105 dark:border-indigo-400/50 dark:from-indigo-600/90 dark:to-purple-600/90 dark:hover:from-indigo-500 dark:hover:to-purple-500"
              >
                <Mail className="h-4 w-4" />
                Rutgers email
          </a>
          <a
                href="https://linkedin.com/in/rudrapatel8"
            target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-purple-300/50 bg-gradient-to-r from-purple-500/90 to-violet-500/90 px-5 text-sm font-medium text-white backdrop-blur-xl shadow-lg shadow-purple-500/30 transition hover:from-purple-600 hover:to-violet-600 hover:shadow-purple-500/50 hover:scale-105 dark:border-purple-400/50 dark:from-purple-600/90 dark:to-violet-600/90 dark:hover:from-purple-500 dark:hover:to-violet-500"
          >
                <ExternalLink className="h-4 w-4" />
                LinkedIn
          </a>
        </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function SkillBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-[color:var(--hairline)] bg-black/5 p-5 dark:bg-white/5">
      <p className="text-xs font-semibold text-[color:var(--muted)]">{title}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((x) => (
          <span
            key={x}
            className="inline-flex items-center rounded-full border border-[color:var(--hairline)] bg-[color:var(--surface)] px-3 py-1 text-xs font-medium text-[color:var(--fg)] backdrop-blur"
          >
            {x}
          </span>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({
  title,
  description,
  tech,
  period,
  image,
  githubLink,
  kaggleLink,
  isInProduction,
  imageAspect = "landscape",
}: {
  title: string;
  description: string;
  tech: string[];
  period: string;
  image: string;
  githubLink?: string;
  kaggleLink?: string;
  isInProduction?: boolean;
  imageAspect?: "landscape" | "portrait";
}) {
  const aspectClass =
    imageAspect === "landscape"
      ? "aspect-[16/9] sm:aspect-[2/1]"
      : "aspect-[4/5] sm:aspect-[3/4]";

  return (
    <div className="group relative overflow-hidden rounded-3xl border border-[color:var(--surface-border)] bg-[color:var(--surface)] backdrop-blur-2xl transition hover:bg-[color:var(--surface-strong)]">
      {/* Project Image */}
      <div className={`relative w-full overflow-hidden ${aspectClass}`}>
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--surface)] via-transparent to-transparent opacity-80" />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-semibold">{title}</h3>
          {isInProduction && (
            <span className="whitespace-nowrap rounded-full border border-[color:var(--glow)] bg-[color:var(--glow)]/10 px-3 py-1 text-xs font-medium text-[color:var(--glow)]">
              In Production
            </span>
          )}
        </div>
        <p className="mt-2 text-xs text-[color:var(--muted)]">{period}</p>
        <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">{description}</p>

        {/* Tech Stack */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="inline-flex items-center rounded-full border border-[color:var(--hairline)] bg-[color:var(--surface-strong)] px-2.5 py-1 text-xs font-medium text-[color:var(--fg)] backdrop-blur"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-5 flex items-center gap-4">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-[color:var(--muted)] transition hover:text-[color:var(--fg)]"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          )}
          {kaggleLink && (
            <a
              href={kaggleLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-[color:var(--muted)] transition hover:text-[color:var(--fg)]"
            >
              <Brain className="h-4 w-4" />
              <span>Kaggle</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          )}
          {isInProduction && (
            <span className="inline-flex items-center gap-2 text-sm font-medium text-[color:var(--muted)]">
              <Zap className="h-4 w-4" />
              <span>Coming Soon</span>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
