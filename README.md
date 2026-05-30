# UniVerse 🎓

> India's smartest college discovery platform — search, compare, and predict admissions with real data.

## Features

- 🔍 **College Search** — Filter by state, type, fees, and rating with instant search
- 📄 **College Detail Pages** — Overview, courses, placements, and student reviews
- ⚖️ **Compare Colleges** — Side-by-side comparison of 2–3 colleges
- 🎯 **Rank Predictor** — Enter JEE rank + category → get your eligible colleges
- ❤️ **Save Colleges** — Bookmark colleges to your personal list
- ⭐ **Reviews** — Authenticated users can write and read reviews
- 🔐 **Auth** — Email/password login and registration via NextAuth.js

## Tech Stack

| Layer     | Tech                              |
|-----------|-----------------------------------|
| Frontend  | Next.js 14 (App Router), React 18 |
| Styling   | TailwindCSS                       |
| Language  | TypeScript                        |
| Auth      | NextAuth.js (Credentials)         |
| ORM       | Prisma                            |
| Database  | PostgreSQL (Neon.tech)            |
| Deploy    | Vercel + Neon                     |

## Getting Started

### 1. Clone and install

```bash
git clone <your-repo-url>
cd UniVerse
npm install
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

Fill in `.env`:

```env
DATABASE_URL="postgresql://..."   # from neon.tech
NEXTAUTH_SECRET="..."             # run: openssl rand -base64 32
NEXTAUTH_URL="http://localhost:3000"
```

### 3. Set up the database

```bash
# Push schema to your database
npx prisma db push

# Seed with 15 sample Indian colleges
npm run db:seed
```

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Demo Credentials

After seeding, you can log in with:

| Email | Password |
|-------|----------|
| arjun@example.com | password123 |
| priya@example.com | password123 |
| rahul@example.com | password123 |

## Project Structure

```
UniVerse/
├── app/
│   ├── api/
│   │   ├── auth/           # NextAuth + Register
│   │   ├── colleges/       # Listing + Detail APIs
│   │   ├── compare/        # Compare API
│   │   ├── predictor/      # Rank predictor API
│   │   ├── reviews/        # Review submission
│   │   └── saved/          # Save/unsave colleges
│   ├── auth/
│   │   ├── login/          # Login page
│   │   └── register/       # Register page
│   ├── colleges/
│   │   └── [id]/           # College detail page
│   ├── compare/            # Compare page
│   ├── predictor/          # Predictor page
│   ├── saved/              # Saved colleges page
│   └── page.tsx            # Homepage
├── components/
│   ├── CollegeCard.tsx     # Reusable college card
│   ├── Navbar.tsx          # Navigation
│   ├── ReviewForm.tsx      # Review submission form
│   ├── SaveButton.tsx      # Heart/save toggle
│   └── SessionProvider.tsx # NextAuth wrapper
├── lib/
│   ├── auth.ts             # NextAuth options
│   └── prisma.ts           # Prisma client singleton
├── prisma/
│   ├── schema.prisma       # Database schema
│   └── seed.ts             # Sample data (15 colleges)
└── types/
    └── index.ts            # TypeScript interfaces
```

## Deployment

### Vercel + Neon (Recommended)

1. Create a free database at [neon.tech](https://neon.tech)
2. Push to GitHub
3. Import repo in [Vercel](https://vercel.com)
4. Add environment variables in Vercel dashboard
5. Deploy — Vercel auto-detects Next.js

### After deploying

Run the seed from your local machine pointing to the production DB:

```bash
DATABASE_URL="your-neon-url" npm run db:seed
```

## API Reference

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/colleges` | List colleges (search, filter, paginate) |
| GET | `/api/colleges/:id` | College detail with courses, reviews |
| GET | `/api/compare?ids=1,2,3` | Compare 2–3 colleges |
| POST | `/api/predictor` | Predict colleges from rank |
| GET | `/api/saved` | Get user's saved colleges |
| POST | `/api/saved` | Toggle save/unsave |
| POST | `/api/reviews` | Submit a review |
| POST | `/api/auth/register` | Register new user |
