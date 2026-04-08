import { movies } from "../data/store";
import { Movie } from "../models/movie";

const getAllMovies = (): Movie[] => {
    return movies;
};

const getMovieById = (id: string): Movie | undefined => {
    return movies.find((movie: Movie) => movie.id === id);
};

const createMovie = (movieData: Omit<Movie, "id">): Movie => {
    const newMovie: Movie = {
        id: `m${movies.length + 1}`,
        ...movieData
    };

    movies.push(newMovie);
    return newMovie;
};

const updateMovie = (id: string, movieData: Partial<Omit<Movie, "id">>): Movie | null => {
    const movieIndex: number = movies.findIndex((movie: Movie) => movie.id === id);

    if (movieIndex === -1) {
        return null;
    }

    movies[movieIndex] = {
        ...movies[movieIndex],
        ...movieData
    };

    return movies[movieIndex];
};

const deleteMovie = (id: string): boolean => {
    const movieIndex: number = movies.findIndex((movie: Movie) => movie.id === id);

    if (movieIndex === -1) {
        return false;
    }

    movies.splice(movieIndex, 1);
    return true;
};

export default {
    getAllMovies,
    getMovieById,
    createMovie,
    updateMovie,
    deleteMovie
};