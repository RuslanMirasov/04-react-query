# React Movies

A web app for searching movies by keyword, powered by the TMDB API.

[Live demo](https://03-react-movies-rho-gilt.vercel.app)

## Features

- Search movies by keyword
- Movie gallery with posters and titles
- Modal window with overview, release date and rating
- Loading indicator, error message and notifications

## Tech stack

- React 19, TypeScript, Vite
- Axios
- React Hot Toast
- CSS Modules, modern-normalize

## Getting started

Requirements: Node.js 20.19+, 22.13+ or 24+.

1. Clone the repository and install dependencies:

   ```bash
   git clone https://github.com/RuslanMirasov/03-react-movies.git
   cd 03-react-movies
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
│   ├── App/            # state and data fetching
│   ├── SearchBar/      # search form
│   ├── MovieGrid/      # movie gallery
│   ├── MovieModal/     # movie details modal
│   ├── Loader/         # loading indicator
│   └── ErrorMessage/   # request error message
├── services/
│   └── movieService.ts # TMDB request
├── types/
│   └── movie.ts        # Movie interface
├── main.tsx            # entry point
└── vite-env.d.ts       # environment variable types
```

## Credits

Data and images are provided by [TMDB](https://www.themoviedb.org/). This product uses the TMDB API
but is not endorsed or certified by TMDB.
