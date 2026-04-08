import { watchlists } from "../data/store";
import { Watchlist } from "../models/watchlist";

const getAllWatchlists = (): Watchlist[] => {
    return watchlists;
};

const getWatchlistById = (id: string): Watchlist | undefined => {
    return watchlists.find((watchlist: Watchlist) => watchlist.id === id);
};

const createWatchlist = (watchlistData: Omit<Watchlist, "id">): Watchlist => {
    const newWatchlist: Watchlist = {
        id: `w${watchlists.length + 1}`,
        ...watchlistData
    };

    watchlists.push(newWatchlist);
    return newWatchlist;
};

const updateWatchlist = (
    id: string,
    watchlistData: Partial<Omit<Watchlist, "id">>
): Watchlist | null => {
    const watchlistIndex: number = watchlists.findIndex(
        (watchlist: Watchlist) => watchlist.id === id
    );

    if (watchlistIndex === -1) {
        return null;
    }

    watchlists[watchlistIndex] = {
        ...watchlists[watchlistIndex],
        ...watchlistData
    };

    return watchlists[watchlistIndex];
};

const deleteWatchlist = (id: string): boolean => {
    const watchlistIndex: number = watchlists.findIndex(
        (watchlist: Watchlist) => watchlist.id === id
    );

    if (watchlistIndex === -1) {
        return false;
    }

    watchlists.splice(watchlistIndex, 1);
    return true;
};

export default {
    getAllWatchlists,
    getWatchlistById,
    createWatchlist,
    updateWatchlist,
    deleteWatchlist
};