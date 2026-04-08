import { Request, Response } from "express";
import movieService from "../services/movieService";
import { HTTP_STATUS } from "../constants/httpStatus";

const getAllMovies = (_req: Request, res: Response): void => {
    res.status(HTTP_STATUS.OK).json({
        message: "Movies retrieved successfully",
        data: movieService.getAllMovies()
    });
};

const getMovieById = (req: Request, res: Response): void => {
    const movie = movieService.getMovieById(req.params.id as string);

    if (!movie) {
        res.status(HTTP_STATUS.NOT_FOUND).json({
            message: "Movie not found"
        });
        return;
    }

    res.status(HTTP_STATUS.OK).json({
        message: "Movie retrieved successfully",
        data: movie
    });
};

const createMovie = (req: Request, res: Response): void => {
    const { title, genre, releaseYear, rating, isAvailable } = req.body;

    if (
        !title ||
        !genre ||
        typeof releaseYear !== "number" ||
        typeof rating !== "number" ||
        typeof isAvailable !== "boolean"
    ) {
        res.status(HTTP_STATUS.BAD_REQUEST).json({
            message: "Invalid movie data"
        });
        return;
    }

    const newMovie = movieService.createMovie({
        title,
        genre,
        releaseYear,
        rating,
        isAvailable
    });

    res.status(HTTP_STATUS.CREATED).json({
        message: "Movie created successfully",
        data: newMovie
    });
};

const updateMovie = (req: Request, res: Response): void => {
    const updatedMovie = movieService.updateMovie(req.params.id as string, req.body);

    if (!updatedMovie) {
        res.status(HTTP_STATUS.NOT_FOUND).json({
            message: "Movie not found"
        });
        return;
    }

    res.status(HTTP_STATUS.OK).json({
        message: "Movie updated successfully",
        data: updatedMovie
    });
};

const deleteMovie = (req: Request, res: Response): void => {
    const deleted = movieService.deleteMovie(req.params.id as string);

    if (!deleted) {
        res.status(HTTP_STATUS.NOT_FOUND).json({
            message: "Movie not found"
        });
        return;
    }

    res.status(HTTP_STATUS.OK).json({
        message: "Movie deleted successfully"
    });
};

export default {
    getAllMovies,
    getMovieById,
    createMovie,
    updateMovie,
    deleteMovie
};