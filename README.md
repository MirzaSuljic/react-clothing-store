# React Clothing Store

A demo fashion store: browse women's and men's collections, see what's on sale, pick a size, manage your bag and go through a three-step checkout.

Live (previous version): https://rc-clothing-store.netlify.app/

Built with React 19, TypeScript, React Router 7 and Tailwind CSS 4, on Vite.

> Portfolio project. Not affiliated with COS, and no real orders or payments are made.

## Features

- **Collections**: Women, Men and Sale pages, sorted by Featured or by price. The sale page can be filtered by department.
- **Product pages**: a full image gallery (it swipes on phones), size picker, details and material, and related products
- **Bag**: a drawer opens when you add something; the bag page lets you change quantities or remove items. The count in the header updates right away, and the bag is saved in `localStorage`.
- **Checkout**: Information → Payment → Review → Thank you, with field-level validation, a choice of PayPal, card, Apple Pay or Klarna, and an order summary next to each step
- **Sign in and Contact** forms, validated the same way. They don't call a backend.
- **Accessible**: keyboard focus is always visible, a skip link is provided, menus and the bag are real modal dialogs, errors are linked to their fields, and reduced-motion settings are respected
- **Shareable URLs**: sorting and the sale filter are kept in the URL

## Tech stack

| Area | Choice |
|---|---|
| UI | React 19 with function components and hooks; state in `useReducer` and context |
| Language | TypeScript (strict) |
| Routing | React Router 7 |
| Styling | Tailwind CSS 4 with a small custom theme in `src/index.css` |
| Build | Vite |
| Tests | Vitest |
| Linting | ESLint 9 with typescript-eslint, react-hooks and react-refresh |

## Getting started

Requires Node.js 20.19+ or 22.12+.

```bash
npm install
npm run dev
```

Open http://localhost:5173.

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Starts the dev server |
| `npm run build` | Type-checks and builds into `dist/` |
| `npm run preview` | Serves the production build locally |
| `npm test` | Runs the unit tests once |
| `npm run test:watch` | Runs the tests on every change |
| `npm run lint` | Lints the project |

## Project structure

```
src/
├── main.tsx              Entry point: router and cart provider
├── App.tsx               Routes (old /sales, /registration and /detail/:id links redirect)
├── index.css             Tailwind and theme tokens
├── data/products.ts      The product catalogue
├── types/                Product, CartLine, CartItem, ShippingDetails, …, one per file
├── context/              Cart context and provider (saved to localStorage)
├── hooks/                useCart, useForm
├── utils/                Cart reducer, prices, sorting, validation, with tests
├── components/
│   ├── layout/           Header, mobile menu, footer, page layout
│   ├── product/          Product card, grid, price, sort control
│   ├── cart/             Bag drawer, cart line, quantity stepper, totals
│   └── ui/               Drawer, form fields, icons, button styles
└── pages/
    ├── HomePage, CategoryPage, SalePage, ProductPage, CartPage
    ├── SignInPage, ContactPage, NotFoundPage
    └── checkout/         Checkout steps and order summary
```

Product photos are in `public/products` and `public/editorial` as WebP.

## Deployment

`public/_redirects` sends every path to `index.html`, so client-side routes work on Netlify.
