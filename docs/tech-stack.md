@tech-stack.md

# Tech Stack

This document details the technologies chosen for the London Nanny Booking Platform.

* **Application Framework:** **Next.js**
    * A React framework providing Server-Side Rendering (SSR) and Static Site Generation (SSG) for high performance and excellent SEO.

* **Language:** **TypeScript**
    * A typed superset of JavaScript that enhances developer productivity and helps prevent common bugs.

* **Styling:** **Tailwind CSS**
    * A utility-first CSS framework that allows for rapid, custom UI development directly in the markup.

* **Backend & Database:** **Supabase**
    * An open-source Firebase alternative that provides a suite of backend tools using PostgreSQL.
    * **Database:** For all application data.
    * **Auth:** For managing user and nanny authentication.
    * **Storage:** For hosting nanny profile pictures and other uploaded assets.
    * **Realtime:** To power the live chat functionality.

* **Payments & Identity:** **Stripe**
    * **Stripe Connect:** To process payments from users and automate payouts to nannies.
    * **Stripe Identity:** To handle the secure and compliant vetting of nannies by verifying their identity documents.

* **Deployment:** **Vercel**
    * A cloud platform specifically optimized for Next.js applications, providing seamless continuous deployment, automatic scaling, and serverless functions.

* **Primary Development Tool:** **Cursor AI**
    * An AI-powered code editor to accelerate the development and implementation process.
