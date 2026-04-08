import { Movie } from "../models/movie";
import { Watchlist } from "../models/watchlist";

export const movies: Movie[] = [
    {
        id: "m1",
        title: "Inception",
        genre: "Sci-Fi",
        releaseYear: 2010,
        rating: 8.8,
        isAvailable: true
    },
    {
        id: "m2",
        title: "The Dark Knight",
        genre: "Action",
        releaseYear: 2008,
        rating: 9.0,
        isAvailable: true
    }
];

export const watchlists: Watchlist[] = [
    {
        id: "w1",
        userName: "Navpreet Singh",
        movieIds: ["m1"]
    }
];