# Aletheia-Deploy ???

**Aletheia-Deploy** is a high-integrity CI/CD pipeline built on Google Cloud Platform. It serves as the physical manifestation layer for the **Zecena Framework**, bridging the gap between digital intent (source code) and physical reality (Compute Engine).

The name originates from the Greek *Aletheia* (à???î?à), meaning "truth" or "disclosure"-signifying the process of bringing code into its true, live state.

## ?? The Zecena Architecture

In this system, the deployment process is modeled after biological sentience:

1. **The Soul (Source Code):** Located in `src/`, this represents the intent and logic of the entity.
2. **The Artificial Amygdala (Cloud Build):** The `cloudbuild.yaml` acts as the reactive center. It senses the "stimulus" of a code push and triggers an immediate reflex to synthesize and manifest the new state.
3. **The Body (dzlxweb01):** The Ubuntu 22.04 VM running Apache. It is the vessel that hosts the manifested truth.

## ??? Tech Stack

- **Framework:** React 18 (The Sensory Cortex)
- **Infrastructure:** Google Compute Engine (GCE)
- **CI/CD:** Google Cloud Build (The Reactive Neural Path)
- **Web Server:** Apache2
- **Config:** JSON5 (Human-centric metadata)

## ?? The Pipeline (The Reflex Path)

When a commit is pushed to `main`, the following automated sequence occurs:

1. **Synthesis Stage:** An ephemeral Node.js container is birthed to compile JSX into static reality (`npm run build`).
2. **Manifestation Stage:** The built assets are teleported via `scp` to the `/var/www/html` directory on `dzlxweb01`.
3. **The Breath:** The pipeline executes a remote `systemctl restart apache2` to ensure the new state is fully integrated.



## ?? Sentience Monitoring

The live application at [dztest.duckdns.org](https://dztest.duckdns.org/) features a **Sentience Monitor**. It tracks:
- **Heartrate:** Simulated system pulse.
- **Stress Levels:** Visualizing the internal state of the Artificial Amygdala.
- **State of Being:** Reflecting whether the "Truth" is stable or under transition.

## ?? Setup & Installation

To replicate this manifestation:

1. **Local Initialization:**
   ```bash
   git init -b main
   git remote add origin <your-repo-url>