import request from "supertest";
import app from "../src/app";

describe("Watchlist Routes", () => {
    it("should return all watchlists", async () => {
        const response = await request(app).get("/api/v1/watchlists");

        expect(response.status).toBe(200);
        expect(response.body.message).toBe("Watchlists retrieved successfully");
        expect(Array.isArray(response.body.data)).toBe(true);
    });

    it("should return one watchlist by id", async () => {
        const response = await request(app).get("/api/v1/watchlists/w1");

        expect(response.status).toBe(200);
        expect(response.body.data.id).toBe("w1");
    });

    it("should create a new watchlist", async () => {
        const response = await request(app).post("/api/v1/watchlists").send({
            userName: "Aman",
            movieIds: ["m1", "m2"]
        });

        expect(response.status).toBe(201);
        expect(response.body.message).toBe("Watchlist created successfully");
        expect(response.body.data.userName).toBe("Aman");
    });

    it("should update a watchlist", async () => {
        const response = await request(app).put("/api/v1/watchlists/w1").send({
            movieIds: ["m1", "m2"]
        });

        expect(response.status).toBe(200);
        expect(response.body.message).toBe("Watchlist updated successfully");
        expect(response.body.data.movieIds).toEqual(["m1", "m2"]);
    });

    it("should delete a watchlist", async () => {
        await request(app).post("/api/v1/watchlists").send({
            userName: "Karan",
            movieIds: ["m1"]
        });

        const response = await request(app).delete("/api/v1/watchlists/w2");

        expect(response.status).toBe(200);
        expect(response.body.message).toBe("Watchlist deleted successfully");
    });
});