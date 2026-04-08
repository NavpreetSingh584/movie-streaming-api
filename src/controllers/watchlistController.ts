import { Request, Response } from "express";
import watchlistService from "../services/watchlistService";
import { HTTP_STATUS } from "../constants/httpStatus";

const getAllWatchlists = (_req: Request, res: Response): void => {
    res.status(HTTP_STATUS.OK).json({
        message: "Watchlists retrieved successfully",
        data: watchlistService.getAllWatchlists()
    });
};

const getWatchlistById = (req: Request, res: Response): void => {
    const watchlist = watchlistService.getWatchlistById(req.params.id as string);

    if (!watchlist) {
        res.status(HTTP_STATUS.NOT_FOUND).json({
            message: "Watchlist not found"
        });
        return;
    }

    res.status(HTTP_STATUS.OK).json({
        message: "Watchlist retrieved successfully",
        data: watchlist
    });
};

const createWatchlist = (req: Request, res: Response): void => {
    const { userName, movieIds } = req.body;

    if (!userName || !Array.isArray(movieIds)) {
        res.status(HTTP_STATUS.BAD_REQUEST).json({
            message: "Invalid watchlist data"
        });
        return;
    }

    const newWatchlist = watchlistService.createWatchlist({
        userName,
        movieIds
    });

    res.status(HTTP_STATUS.CREATED).json({
        message: "Watchlist created successfully",
        data: newWatchlist
    });
};

const updateWatchlist = (req: Request, res: Response): void => {
    const updatedWatchlist = watchlistService.updateWatchlist(req.params.id as string, req.body);

    if (!updatedWatchlist) {
        res.status(HTTP_STATUS.NOT_FOUND).json({
            message: "Watchlist not found"
        });
        return;
    }

    res.status(HTTP_STATUS.OK).json({
        message: "Watchlist updated successfully",
        data: updatedWatchlist
    });
};

const deleteWatchlist = (req: Request, res: Response): void => {
    const deleted = watchlistService.deleteWatchlist(req.params.id as string);

    if (!deleted) {
        res.status(HTTP_STATUS.NOT_FOUND).json({
            message: "Watchlist not found"
        });
        return;
    }

    res.status(HTTP_STATUS.OK).json({
        message: "Watchlist deleted successfully"
    });
};

export default {
    getAllWatchlists,
    getWatchlistById,
    createWatchlist,
    updateWatchlist,
    deleteWatchlist
};