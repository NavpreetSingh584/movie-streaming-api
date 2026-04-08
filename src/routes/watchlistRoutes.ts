import { Router } from "express";
import watchlistController from "../controllers/watchlistController";

const router: Router = Router();

router.get("/", watchlistController.getAllWatchlists);
router.get("/:id", watchlistController.getWatchlistById);
router.post("/", watchlistController.createWatchlist);
router.put("/:id", watchlistController.updateWatchlist);
router.delete("/:id", watchlistController.deleteWatchlist);

export default router;