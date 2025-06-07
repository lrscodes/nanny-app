@workflow.md

# Application Workflow

This document outlines the end-to-end workflows for all user roles on the platform: the User (client), the Nanny, and the Admin.

## 1. User (Client) Workflow

1.  **Onboarding:** A user registers for an account with their email and password.
2.  **Search:** The user searches for a nanny by specifying the required date, time, and London location.
3.  **Browse & Select:** The user browses profiles of available nannies, viewing their experience, qualifications, and reviews.
4.  **Book:** The user selects a nanny and proceeds to the booking page. They fill in details about their child, including any special or dietary requirements.
5.  **Payment:** The user pays for the booking via Stripe. The funds are held in escrow until the service is completed.
6.  **Manage:** The user's dashboard displays their upcoming and past bookings. They can communicate with the confirmed nanny via the integrated chat.
7.  **Completion & Review:** After the booking is complete, the user is prompted to leave a review for the nanny.

## 2. Nanny Workflow

1.  **Application:** A prospective nanny signs up and completes a detailed application form, submitting information about their experience and qualifications.
2.  **Vetting:** The nanny is directed to Stripe Identity to upload documents for background and identity checks.
3.  **Approval:** An admin reviews the application and the results of the Stripe verification. On approval, the nanny's account is activated.
4.  **Profile & Availability:** The nanny completes their public profile and sets their working hours and availability on their dashboard calendar.
5.  **Receive Bookings:** The nanny receives notifications for new booking requests that match their availability.
6.  **Manage:** From their dashboard, the nanny can accept or decline booking requests, view confirmed jobs, and chat with clients.
7.  **Payout:** After a booking is successfully completed, the payment is released from escrow and paid out to the nanny’s connected Stripe account.

## 3. Admin Workflow

1.  **Login:** The admin logs into a secure, separate admin dashboard.
2.  **Nanny Management:**
    * **View Applications:** The admin sees a queue of pending nanny applications.
    * **Verify & Approve:** The admin reviews each application, checks the status of the Stripe verification, and approves or rejects the nanny. They can see which nannies are fully approved, pending, or have failed verification.
3.  **Oversight:** The admin has a global view of all users, nannies, and bookings on the platform. They can filter and search for specific records.
4.  **Dispute Resolution:** If a user or nanny raises a dispute, the admin can access all relevant booking details and communication logs to mediate and resolve the issue. The admin can initiate refunds or take other actions as necessary.
5.  **Platform Management:** The admin can manage content on static pages and monitor the overall health of the platform.

