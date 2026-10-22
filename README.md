# Arnav Nisal — Developer Portfolio

A sleek, responsive, dark-mode-first developer portfolio engineered for **Arnav Nisal** (Machine Learning & Software Developer), featuring subtle neo-brutalism, glassmorphic UI elements, and a high-performance React + Tailwind CSS v4 stack.

---

## ⚡ Key Highlights & Architecture

- **Dark-Mode-First Aesthetics**: High-contrast, technical dark palette (`#08090d`), glowing accents (`#10b981`), technical grid background, and subtle neo-brutalist shadows.
- **Typography**: Inter (modern sans-serif) paired with JetBrains Mono (technical developer aesthetic).
- **Hero Section**:
  - Headline: `Arnav Nisal`
  - Subheadline: `Machine Learning & Software Developer`
  - Tagline: `Specializing in cross-platform mobile development, computer vision, and edge AI.`
  - Call to Action: **"View Projects"** and **"Contact Me"** buttons + quick email copy shortcut.
  - Live technical telemetry daemon showcasing on-device inference speed and active stack status.
- **About Me**:
  - Highlights: 19-year-old B.Tech CSE student at **DES Pune University**.
  - Core Focus: Building intelligent systems ranging from local AI model deployment and quantized neural networks to embedded IoT hardware.
  - Professional Experience: Software Engineering Internship at **Manman Manufacturing**.
- **Featured Projects**:
  - **RetiQ**: Automated health-tech app using Flutter and quantized YOLOv11-seg / TFLite for smartphone-based reticulocyte enumeration. Co-authored research paper whose presenting author (father) received the **Berend Houwen Travel Award at ISLH 2026**.
  - **Hyper-IDE**: Open-source, hybrid AI code editor built with Electron, Monaco, React, and local GGUF LLM inference with automated cloud fallback.
  - **The Trust Juggler (HackForge 2026)**: Real-time identity engine for delivery account sharing detection using React Native, WebAssembly, and voice biometrics.
  - **AgentX Disaster Coordinator (Kurukshetra 2.0)**: Agentic disaster relief monorepo featuring a FastAPI backend, Firebase, and a Google Gemini multi-agent triage pipeline.
  - **Environmental Intelligence Network**: Decentralized IoT mesh using ESP32-S3 sensor nodes and edge AI anomaly detection for localized disaster warning.
  - Interactive **Architecture Specification Modal** to inspect system components and technical implementation highlights.
- **Tech Stack / Skills**:
  - **Languages & Frameworks**: Python, C/C++, Flutter, React, React Native, Tailwind.
  - **AI & ML**: Computer Vision (YOLO/Mask R-CNN), TensorFlow Lite, Local LLM Deployment (node-llama-cpp), Google Gemini APIs.
  - **Hardware & Systems**: ESP32, Linux (Arch/Bazzite), Firebase, Cloudflare Tunnels.
  - Dynamic **animated marquee** of technical capabilities.
- **Footer & Contact**:
  - Interactive email copy to clipboard with toast notification.
  - Direct mailto link and in-browser quick dispatch message composer.
  - Clean links for GitHub and LinkedIn.

---

## 🚀 Running Locally

```bash
# Navigate to the portfolio folder
cd "C:\Users\arnav\.gemini\antigravity-ide\scratch\arnav-portfolio"

# Start the development server
npm run dev
```

Visit [http://localhost:5173/](http://localhost:5173/) in your browser.

---

## 🛠️ Production Build

```bash
# Build optimized static bundle
npm run build

# Preview production build locally
npm run preview
```

The production output will be generated into the `dist/` directory, ready to deploy instantly to Cloudflare Pages, Vercel, Netlify, or GitHub Pages.

---

## 📂 Project Structure

```
arnav-portfolio/
├── index.html                  # SEO metadata & Google Fonts
├── vite.config.js              # Vite config with @tailwindcss/vite
├── package.json
├── src/
│   ├── main.jsx                # React DOM entry point
│   ├── App.jsx                 # Main layout & section orchestrator
│   ├── index.css               # Tailwind v4, neo-brutalism, grid patterns & animations
│   ├── data/
│   │   └── portfolioData.js    # Modular structured data (copy, projects, skills)
│   └── components/
│       ├── Navbar.jsx          # Glassmorphic header with scroll spy & mobile menu
│       ├── Hero.jsx            # Impactful dark hero with interactive terminal
│       ├── About.jsx           # Concise bio, DES Pune & Manman Mfg highlights
│       ├── Projects.jsx        # Project cards, award highlight & architecture modal
│       ├── Skills.jsx          # Categorized badges, animated marquee & stack flow
│       ├── Experience.jsx      # Timeline of internship & education
│       └── Contact.jsx         # Contact links, clipboard helper & mailto composer
```
