import type { Movie } from '../../types/movie';
import type { ComponentType } from 'react';
import type { ReactPaginateProps } from 'react-paginate';

import { useState, useEffect } from 'react';
import { useQuery, keepPreviousData } from '@tanstack/react-query';
import toast, { Toaster } from 'react-hot-toast';
import { fetchMovies } from '../../services/movieService';
import ReactPaginateModule from 'react-paginate';
import SearchBar from '../SearchBar/SearchBar';
import MovieGrid from '../MovieGrid/MovieGrid';
import MovieModal from '../MovieModal/MovieModal';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import css from './App.module.css';

type PaginateModule = { default?: ComponentType<ReactPaginateProps> };

const ReactPaginate =
  (ReactPaginateModule as unknown as PaginateModule).default ??
  (ReactPaginateModule as unknown as ComponentType<ReactPaginateProps>);

export default function App() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const { data, isLoading, isError, isSuccess, isPlaceholderData } = useQuery({
    queryKey: ['movies', query, page],
    queryFn: () => fetchMovies(query, page),
    enabled: query !== '',
    placeholderData: keepPreviousData,
  });

  const movies = data?.results ?? [];
  const totalPages = Math.max(data?.total_pages ?? 0, page);

  useEffect(() => {
    if (!isSuccess || isPlaceholderData || data.results.length > 0) return;

    if (page === 1) {
      toast.error('No movies found for your request.');
    } else {
      toast('No more movies on this page. Try the previous one.', { icon: '⚠️' });
    }
  }, [isSuccess, isPlaceholderData, page, data]);

  const handleSearch = (newQuery: string) => {
    setQuery(newQuery);
    setPage(1);
  };

  const handleSelect = (movie: Movie) => {
    setSelectedMovie(movie);
  };

  const closeModal = () => {
    setSelectedMovie(null);
  };

  return (
    <div className={css.app}>
      <SearchBar onSubmit={handleSearch} />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {totalPages > 1 && (
        <ReactPaginate
          pageCount={totalPages}
          pageRangeDisplayed={5}
          marginPagesDisplayed={1}
          onPageChange={({ selected }) => setPage(selected + 1)}
          forcePage={page - 1}
          containerClassName={css.pagination}
          activeClassName={css.active}
          nextLabel="→"
          previousLabel="←"
        />
      )}
      {movies.length > 0 && <MovieGrid movies={movies} onSelect={handleSelect} />}
      {selectedMovie && <MovieModal movie={selectedMovie} onClose={closeModal} />}
      <Toaster />
    </div>
  );
}
