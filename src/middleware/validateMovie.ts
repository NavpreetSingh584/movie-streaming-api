import { Request, Response, NextFunction } from "express";

const validateMovie = (req: Request, res: Response, next: NextFunction): void => {
    const { title, genre, releaseYear, rating, isAvailable } = req.body;

    if (
        !title ||
        !genre ||
        typeof releaseYear !== "number" ||
        typeof rating !== "number" ||
        typeof isAvailable !== "boolean"
    ) {
        res.status(400).json({
            message: "Invalid movie data"
        });
        return;
    }

    if (title.length < 2) {
        res.status(400).json({
            message: "Title must be at least 2 characters long"
        });
        return;
    }

    if (rating < 0 || rating > 10) {
        res.status(400).json({
            message: "Rating must be between 0 and 10"
        });
        return;
    }

    next();
};

export default validateMovie;