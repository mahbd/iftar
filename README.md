# Iftar Delights - Ramadan Food Delivery

Iftar Delights is a web application built with Next.js, Tailwind CSS, and Prisma, designed for ordering Iftar food items and packages exclusively during Ramadan. It features a user-friendly interface for browsing items, placing orders, and an admin panel for managing orders and users.

## Features

*   **Browse Products & Packages:** Users can view a variety of individual food items and pre-set Iftar packages.
*   **Customizable Orders:** Users can select items and quantities to create custom orders.
*   **Pre-defined Packages:** Option to order from specially curated Iftar packages.
*   **Order Management:**
    *   Users can place orders with contact information (name, mobile, location).
    *   Session-based order persistence before final submission.
    *   Order success and failure pages.
*   **Admin Panel:**
    *   View all orders with filtering options (status, location).
    *   Search orders.
    *   View individual order details.
    *   Update order status (Pending, Confirmed, Cancelled).
    *   View all users.
    *   Search users.
    *   View individual user details, including their order history.
    *   Mark/unmark users as spammers.
*   **Authentication:** Google OAuth for user sign-in, primarily for the contact/order page and admin access.
*   **Responsive Design:** Adapts to different screen sizes for a seamless experience on desktop and mobile.
*   **Static Pages:** Terms of Service, Privacy Policy, Data Deletion Guidelines.
*   **Image Carousel:** Hero section with an autoplaying carousel for banners.

## Tech Stack

*   **Frontend:**
    *   Next.js (React Framework)
    *   Tailwind CSS (Styling)
    *   Shadcn/ui (UI Components: Avatar, Button, Card, Carousel, Dialog, etc.)
    *   `embla-carousel-react` & `embla-carousel-autoplay` (Carousel functionality)
    *   `lucide-react` (Icons)
*   **Backend:**
    *   Next.js (API Routes)
    *   Prisma (ORM for database interaction)
    *   NextAuth.js (Authentication - Google Provider)
*   **Database:** (Assumed, as Prisma is used - typically PostgreSQL, MySQL, or SQLite)
*   **Linting/Formatting:** ESLint
*   **Package Manager:** npm (as per `package.json`)

## Getting Started

### Prerequisites

*   Node.js (version specified in `package.json` or latest LTS)
*   npm or yarn
*   A database instance compatible with Prisma (e.g., PostgreSQL, MySQL, SQLite)
*   Google Cloud Platform project with OAuth 2.0 credentials configured for NextAuth.js.

### Installation

1.  **Clone the repository (if applicable):**
    ```bash
    git clone <repository-url>
    cd iftar
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Set up environment variables:**
    Create a `.env.local` file in the root directory and add the necessary environment variables. This will include:
    *   `DATABASE_URL`: Your database connection string for Prisma.
    *   `GOOGLE_CLIENT_ID`: Your Google OAuth client ID.
    *   `GOOGLE_CLIENT_SECRET`: Your Google OAuth client secret.
    *   `NEXTAUTH_URL`: The canonical URL of your site (e.g., `http://localhost:3000` for development).
    *   `NEXTAUTH_SECRET`: A secret key for NextAuth.js. You can generate one using `openssl rand -base64 32`.

    Example `.env.local`:
    ```env
    DATABASE_URL="postgresql://user:password@host:port/database?schema=public"
    GOOGLE_CLIENT_ID="YOUR_GOOGLE_CLIENT_ID"
    GOOGLE_CLIENT_SECRET="YOUR_GOOGLE_CLIENT_SECRET"
    NEXTAUTH_URL="http://localhost:3000"
    NEXTAUTH_SECRET="YOUR_NEXTAUTH_SECRET"
    ```

4.  **Initialize Prisma and push the schema to your database:**
    ```bash
    npx prisma migrate dev --name init
    ```
    This command will create the necessary tables in your database based on the `prisma/schema.prisma` file.

### Running the Application

1.  **Start the development server:**
    ```bash
    npm run dev
    ```
    The application will be accessible at `http://localhost:3000`.

2.  **Build for production:**
    ```bash
    npm run build
    ```

3.  **Start the production server:**
    ```bash
    npm run start
    ```

## Usage

### User Flow

1.  **Homepage (`/`):**
    *   Displays a hero section with image carousel.
    *   Sections for "Our Items" and "Our Packages".
    *   Navigation to order page, contact, terms, privacy, etc.
2.  **Order Page (`/order`):**
    *   Users can choose between "Predefined Packages" or "Custom Order".
    *   A date picker is available for pre-orders.
    *   Items are added to a temporary order stored in `sessionStorage`.
    *   Displays an order summary with total price (and potential discounts).
3.  **Contact/Checkout (`/contact`):**
    *   If not signed in, the user is prompted to sign in with Google.
    *   After signing in, users provide their name, mobile number, and location. This information is pre-filled if available from their profile.
    *   The order is then submitted.
4.  **Order Status:**
    *   `/success?orderId=<ID>`: Shown after a successful order placement.
    *   `/failed?message=<MSG>`: Shown if order placement fails.

### Admin Flow

1.  **Admin Login:** Access to the admin section (`/admin`) likely requires an authenticated user with admin privileges (this logic might be in `admin/layout.tsx` or middleware).
2.  **Admin Dashboard (`/admin`):**
    *   Potentially an overview page (current `page.tsx` seems to be a placeholder or redirects).
3.  **Manage Orders (`/admin/orders`):**
    *   Lists all orders, with options to filter by status (Pending, Confirmed, Cancelled) and location.
    *   Search functionality for orders.
    *   Clicking an order ID navigates to `/admin/orders/[id]`.
    *   **Order Details (`/admin/orders/[id]`):**
        *   Shows detailed information about the order, including items, user details, IP address, and order history from the same IP/user.
        *   Actions to change order status (Mark Pending, Mark Confirmed, Mark Cancelled).
        *   Sensitive information can be collapsed/expanded.
4.  **Manage Users (`/admin/users`):**
    *   Lists all registered users.
    *   Search functionality for users (e.g., by name, email).
    *   Clicking a user ID navigates to `/admin/users/[id]`.
    *   **User Details (`/admin/users/[id]`):**
        *   Shows user information and their order history.
        *   Actions to "Mark as spammer" or "Remove spammer" status.

## Folder Structure Overview

```
iftar/
├── app/                      # Next.js App Router
│   ├── (sections)/           # Page sections (OurItems, OurPackages, TeamMembers)
│   ├── admin/                # Admin panel routes and components
│   │   ├── orders/
│   │   └── users/
│   ├── api/                  # API routes (e.g., NextAuth.js)
│   │   └── auth/
│   ├── contact/              # Contact and checkout page
│   ├── order/                # Order creation page
│   ├── privacy/              # Privacy policy page
│   ├── terms/                # Terms of service page
│   ├── globals.css
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Homepage
├── components/               # Reusable UI components
│   └── ui/                   # Shadcn/ui components
├── lib/                      # Utility functions, data, actions
│   ├── data.ts               # Static data (items, packages)
│   ├── order.actions.ts      # Server actions for orders
│   ├── user.actions.ts       # Server actions for users
│   └── utils.ts              # General utility functions
├── prisma/                   # Prisma ORM files
│   ├── auth.ts               # Prisma adapter for NextAuth.js
│   ├── client.ts             # Prisma client instance
│   └── schema.prisma         # Database schema definition
├── public/                   # Static assets (images, fonts, etc.)
├── next.config.ts            # Next.js configuration
├── package.json              # Project dependencies and scripts
├── tailwind.config.ts        # Tailwind CSS configuration
└── tsconfig.json             # TypeScript configuration
```

## API Endpoints

*   **`/api/auth/[...nextauth]`**: Handles Google OAuth authentication via NextAuth.js.
    *   `GET /api/auth/signin`
    *   `POST /api/auth/callback/google`
    *   `GET /api/auth/session`
    *   `GET /api/auth/signout`
*   Other backend logic is primarily handled through Next.js Server Actions located in `lib/order.actions.ts` and `lib/user.actions.ts`.

## Deployment

This Next.js application is well-suited for deployment on platforms like:

*   **Vercel:** (Recommended) Offers seamless deployment for Next.js applications.
*   **Netlify:** Another popular choice for deploying Jamstack sites.
*   **AWS Amplify, Google Cloud Run, Azure Static Web Apps:** Other cloud provider options.

Ensure all environment variables are correctly set up in the deployment environment.

---

This README provides a comprehensive overview. You might want to add more specific details about certain complex features or decision-making processes as the project evolves.
