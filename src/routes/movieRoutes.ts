import { Router } from "express";
import movieController from "../controllers/movieController";

const router: Router = Router();

/**
 * @swagger
 * /api/v1/movies:
 *   get:
 *     summary: Get all movies
 *     responses:
 *       200:
 *         description: Movies retrieved successfully
 */
router.get("/", movieController.getAllMovies);

/**
 * @swagger
 * /api/v1/movies/{id}:
 *   get:
 *     summary: Get a movie by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Movie retrieved successfully
 *       404:
 *         description: Movie not found
 */
router.get("/:id", movieController.getMovieById);

/**
 * @swagger
 * /api/v1/movies:
 *   post:
 *     summary: Create a new movie
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               genre:
 *                 type: string
 *               releaseYear:
 *                 type: number
 *               rating:
 *                 type: number
 *               isAvailable:
 *                 type: boolean
 *     responses:
 *       201:
 *         description: Movie created successfully
 */
router.post("/", movieController.createMovie);

/**
 * @swagger
 * /api/v1/movies/{id}:
 *   put:
 *     summary: Update a movie
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Movie updated successfully
 *       404:
 *         description: Movie not found
 */
router.put("/:id", movieController.updateMovie);

/**
 * @swagger
 * /api/v1/movies/{id}:
 *   delete:
 *     summary: Delete a movie
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Movie deleted successfully
 *       404:
 *         description: Movie not found
 */
router.delete("/:id", movieController.deleteMovie);

export default router;