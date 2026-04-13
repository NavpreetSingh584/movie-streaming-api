import { Router } from "express";
import watchlistController from "../controllers/watchlistController";

const router: Router = Router();

/**
 * @swagger
 * /api/v1/watchlists:
 *   get:
 *     summary: Get all watchlists
 *     responses:
 *       200:
 *         description: Watchlists retrieved successfully
 */
router.get("/", watchlistController.getAllWatchlists);

/**
 * @swagger
 * /api/v1/watchlists/{id}:
 *   get:
 *     summary: Get a watchlist by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Watchlist retrieved successfully
 *       404:
 *         description: Watchlist not found
 */
router.get("/:id", watchlistController.getWatchlistById);

/**
 * @swagger
 * /api/v1/watchlists:
 *   post:
 *     summary: Create a new watchlist
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userName:
 *                 type: string
 *               movieIds:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       201:
 *         description: Watchlist created successfully
 */
router.post("/", watchlistController.createWatchlist);

/**
 * @swagger
 * /api/v1/watchlists/{id}:
 *   put:
 *     summary: Update a watchlist
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Watchlist updated successfully
 *       404:
 *         description: Watchlist not found
 */
router.put("/:id", watchlistController.updateWatchlist);

/**
 * @swagger
 * /api/v1/watchlists/{id}:
 *   delete:
 *     summary: Delete a watchlist
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Watchlist deleted successfully
 *       404:
 *         description: Watchlist not found
 */
router.delete("/:id", watchlistController.deleteWatchlist);

export default router;