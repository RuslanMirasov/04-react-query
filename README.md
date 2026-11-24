# React Query Movies

A web app for searching movies by keyword, powered by the TMDB API. Server data is handled with
TanStack Query, and search results are split into pages.

[Live demo](https://04-react-query-ecru-ten.vercel.app/)

## Features

- Search movies by keyword
- Paginated results with React Paginate
- Cached requests: previously opened pages load instantly
- Previous page stays on screen while the next one loads
- Movie gallery with posters and titles
- Modal window with overview, release date and rating
- Loading indicator, error message and notifications

## Tech stack

- React 19, TypeScript, Vite
- TanStack Query (React Query) and React Query Devtools
- Axios
- React Paginate
- React Hot Toast
- CSS Modules, modern-normalize

## Getting started

Requirements: Node.js 20.19+, 22.13+ or 24+.

1. Clone the repository and install dependencies:

   ```bash
   git clone https://github.com/RuslanMirasov/04-react-query.git
   cd 04-react-query
   npm install
   ```

2. Create a `.env` file:

   ```bash
   cp .env.example .env
   ```

3. Add your [TMDB API Read Access Token](https://www.themoviedb.org/settings/api) to `.env`. Use the
   long token, not the API key:

   ```dotenv
   VITE_TMDB_TOKEN=your_token
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

## Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start development server |
| `npm run build`   | Check types and build    |
| `npm run preview` | Preview production build |
| `npm run lint`    | Run ESLint               |

## Project structure

```text
src/
├── components/
│   ├── App/            # search state, useQuery, pagination
│   ├── SearchBar/      # search form
│   ├── MovieGrid/      # movie gallery
│   ├── MovieModal/     # movie details modal
│   ├── Loader/         # loading indicator
│   └── ErrorMessage/   # request error message
├── services/
│   └── movieService.ts # TMDB request with query and page
├── types/
│   └── movie.ts        # Movie and MoviesResponse interfaces
├── main.tsx            # entry point, QueryClientProvider
└── vite-env.d.ts       # environment variable types
```
