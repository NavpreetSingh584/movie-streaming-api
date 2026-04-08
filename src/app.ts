import express, { Application, Request, Response } from "express";
import morgan from "morgan";
import movieRoutes from "./routes/movieRoutes";
import watchlistRoutes from "./routes/watchlistRoutes";
import { HTTP_STATUS } from "./constants/httpStatus";

const app: Application = express();

app.use(express.json());
app.use(morgan("dev"));

app.get("/api/v1/health", (_req: Request, res: Response) => {
    res.status(HTTP_STATUS.OK).json({
        status: "OK",
        message: "Movie Streaming API is running"
    });
});

app.use("/api/v1/movies", movieRoutes);
app.use("/api/v1/watchlists", watchlistRoutes);

export default app;