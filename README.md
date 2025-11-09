## Kenzy Food API

Kenzy Food is a full-stack ecommerce platform. This repository houses the Node.js GraphQL service that powers authentication, menu management, checkout, and order fulfillment for the [Kenzy Food frontend](https://github.com/Ekenzy-101/React-Ecommerce-Website).

## Features

- GraphQL API for products, categories, carts, and orders
- JWT-based authentication with refresh-token rotation
- Stripe webhook handling and payment intent orchestration
- Email workflows powered by Nodemailer and dynamic templates
- Seed scripts for bootstrapping demo data from Spoonacular

## Tech Stack

- Node.js 18+
- Express + Apollo Server for GraphQL
- MongoDB with Mongoose ODM
- Stripe Payments API
- Nodemailer Transactional Email

## Prerequisites

- Node.js 18+ and npm (or pnpm/yarn)
- MongoDB Community Edition running locally or accessible remotely
- Stripe and Nodemailer accounts with API credentials

## Getting Started

```bash
git clone <repository-url>
cd Node-Ecommerce-Backend
npm install
npm run dev
```

The dev server listens on `http://localhost:5000` by default. Ensure MongoDB is running before you start the server.

## Environment Variables

Create a `.env` file in the project root and populate it with the following values:

| Variable                   | Description                                                             |
| -------------------------- | ----------------------------------------------------------------------- |
| `MONGODB_URL`              | MongoDB connection string (e.g., `mongodb://localhost:27017/kenzyfood`) |
| `SECRET_KEY`               | Symmetric secret used for form encryption/signatures                    |
| `STRIPE_SECRET_KEY`        | Stripe secret key (e.g., `sk_test_...`)                                 |
| `ACCESS_TOKEN_SECRET_KEY`  | Secret for signing short-lived JWT access tokens                        |
| `REFRESH_TOKEN_SECRET_KEY` | Secret for signing long-lived refresh tokens                            |
| `FRONTEND_ENDPOINT`        | URL of the frontend application                                         |
| `ACTIVATE_EMAIL_ID`        | Nodemailer dynamic template id for account activation                   |
| `PASSWORD_RESET_ID`        | Nodemailer dynamic template id for password resets                      |
| `RECEIPT_EMAIL_ID`         | Nodemailer dynamic template id for receipts                             |
| `EMAIL_API_KEY`            | Nodemailer API key                                                      |
| `EMAIL_SENDER`             | Verified Nodemailer email address                                       |

Restart the server whenever environment variables change.

## Database Seed Data

Run the seed script to populate MongoDB with sample data fetched from Spoonacular:

```bash
npm run seed
```

The script will create collections for products, categories, and initial content. Review `seed.js` if you want to customize the import process.

## npm Scripts

- `npm run dev` – start the development server with hot reload
- `npm start` – run the production build
- `npm run seed` – execute the Spoonacular seed script
- `npm test` – run automated tests (if available)

## Webhooks

Stripe webhooks are required for updating order states post-payment. Expose your local server using a tool like ngrok and configure the endpoint in the Stripe dashboard to point to `/webhook/stripe`.

## Deployment

Deploy the API to Vercel, Render, Railway, or any Node-compatible host. Ensure environment variables are set in the hosting environment and MongoDB is accessible. When deploying alongside the frontend, update `FRONTEND_ENDPOINT` to match your production client URL.

## Contributing

Pull requests are welcome. Please open an issue before major changes, run `npm run lint` (if configured), and include tests or docs where applicable.

## License

Distributed under the MIT License unless otherwise noted. See `LICENSE` for details.
