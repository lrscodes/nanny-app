Product Requirements Document: Hotel Nannys
Version: 1.1
Date: 7 June 2025
Author: Gemini
1. Introduction & Vision
1.1. Product Vision
To create a premium, modern, and trustworthy online platform that seamlessly connects busy professionals and travellers in London with elite, vetted, self-employed nannies.
1.2. Project Purpose
The platform will serve as a high-end marketplace focused on reliability, safety, and convenience. It caters to a discerning clientele, including working professionals with demanding lifestyles and affluent tourists who require dependable, last-minute childcare. The service will be exclusive, featuring only professionally vetted nannies. All bookings and payments will be handled securely through the platform.
2. Target Audience
Primary: Working professionals in London with demanding schedules who need flexible and trustworthy childcare.
Secondary: Affluent tourists and travellers visiting London who require high-quality, short-notice nannies at their hotels or residences.
3. User Roles & Workflows
3.1. User (Client)
Workflow: Registers for an account, searches for nannies based on location and time, browses profiles, books a selected nanny, provides child-specific details (e.g., dietary needs), and pays securely via Stripe. The client can manage bookings and communicate with the nanny through their personal dashboard.
3.2. Nanny
Workflow: Applies to join the platform, completes a detailed application, and undergoes a mandatory verification process via Stripe Identity. Once approved by an admin, the nanny sets up their public profile, manages their availability calendar, accepts or declines booking requests, communicates with clients, and receives payouts via Stripe Connect.
3.3. Administrator
Workflow: Manages the entire platform via a secure admin dashboard. Responsibilities include reviewing and approving/rejecting nanny applications, overseeing all user and nanny accounts, monitoring all bookings, and mediating any disputes that arise between clients and nannies.
4. Feature Requirements
4.1. Public Pages & Onboarding
Homepage: A visually stunning landing page with a clear call-to-action, a "How It Works" guide, featured nanny profiles, and trust-building elements.
User Registration & Login: Standard email/password authentication for clients.
Nanny Application: A multi-step application form for nannies, including integration with Stripe Identity for verification.
Pricing Page: A transparent breakdown of hourly rates and any additional fees.
Compliance & Vetting Page: A detailed explanation of the rigorous nanny vetting process to build user trust.
FAQ Page: Two distinct sections for common questions from clients and nannies.
About Us & Contact Pages: Standard pages for brand story and contact information.
4.2. Search & Booking
Nanny Search: Users can search for available nannies based on date, time, and location within London.
Nanny Profiles: Public-facing, detailed profiles for each vetted nanny, showcasing their bio, experience, qualifications, and reviews.
Booking System: An integrated booking flow where clients can select times, confirm details, and proceed to payment.
Payment Integration: Secure payment processing powered by Stripe. Funds are held until the service is complete.
4.3. Dashboards & Management
Client Dashboard:
View and manage upcoming and past bookings.
Access to the chat feature.
Manage saved/favourite nanny profiles.
Update account settings and payment methods.
Add and edit child information (e.g., dietary or medical needs).
Nanny Dashboard:
View and manage booking requests (accept/decline).
Manage availability via an interactive calendar.
Access to the chat feature.
View earnings history and manage Stripe Connect payout details.
Edit their public-facing profile.
Admin Dashboard:
Comprehensive view and management of all users, nannies, and bookings.
A dedicated queue to review and process nanny applications.
Tools to monitor nanny verification statuses (pending, approved, rejected).
A system for logging and resolving user-nanny disputes.
4.4. Communication
Real-time Chat: An integrated, secure messaging system allowing clients and nannies to communicate directly about confirmed bookings.
5. Design & UI/UX Requirements
Core Principles: Modern, visually stunning, simple, intuitive, and trustworthy. The design must be fully responsive and optimized for all screen sizes.
Colour Palette:
Primary: Deep Navy (#001f3f)
Secondary: Soft Cream (#FDFBF7)
Accent: Gold (#D4AF37)
Text: Charcoal (#333333)
Typography:
Headings: "Playfair Display" (Serif)
Body & UI: "Inter" (Sans-serif)
Imagery: High-quality, professional photography. No generic stock photos.
6. Technical Requirements
Application Framework: Next.js
Language: TypeScript
Styling: Tailwind CSS
Backend & Database: Supabase (PostgreSQL, Auth, Storage, Realtime)
Payments & Identity: Stripe (Stripe Connect for payouts, Stripe Identity for vetting)
Deployment: Vercel
7. Assumptions & Out of Scope
7.1. Assumptions
The initial launch will be geo-fenced to the Greater London area.
All nannies are self-employed professionals responsible for their own taxes and insurance.
Users have access to a modern web browser.
7.2. Out of Scope (for Version 1.0)
Dedicated native mobile applications (iOS/Android).
Advanced subscription models.
Real-time location tracking of nannies.
Multi-language support.
