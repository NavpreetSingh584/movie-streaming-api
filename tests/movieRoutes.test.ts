import request from "supertest";
import app from "../src/app";

describe("Movie Routes", () => {
    it("should return all movies", async () => {
        const response = await request(app).get("/api/v1/movies");

        expect(response.status).toBe(200);
        expect(response.body.message).toBe("Movies retrieved successfully");
        expect(Array.isArray(response.body.data)).toBe(true);
    });

    it("should return one movie by id", async () => {
        const response = await request(app).get("/api/v1/movies/m1");

        expect(response.status).toBe(200);
        expect(response.body.data.id).toBe("m1");
    });

    it("should create a new movie", async () => {
        const response = await request(app).post("/api/v1/movies").send({
            title: "Interstellar",
            genre: "Sci-Fi",
            releaseYear: 2014,
            rating: 8.6,
            isAvailable: true
        });

        expect(response.status).toBe(201);
        expect(response.body.message).toBe("Movie created successfully");
        expect(response.body.data.title).toBe("Interstellar");
    });

    it("should update a movie", async () => {
        const response = await request(app).put("/api/v1/movies/m1").send({
            genre: "Science Fiction"
        });

        expect(response.status).toBe(200);
        expect(response.body.message).toBe("Movie updated successfully");
        expect(response.body.data.genre).toBe("Science Fiction");
    });

    it("should delete a movie", async () => {
        await request(app).post("/api/v1/movies").send({
            title: "Avatar",
            genre: "Fantasy",
            releaseYear: 2009,
            rating: 7.8,
            isAvailable: true
        });

        const response = await request(app).delete("/api/v1/movies/m3");

        expect(response.status).toBe(200);
        expect(response.body.message).toBe("Movie deleted successfully");
    });
});