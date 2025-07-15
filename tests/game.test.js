const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../server"); // make sure app is exported from server.js
const dotenv = require("dotenv");

dotenv.config({ path: ".env" });

beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI);
});

afterAll(async () => {
    await mongoose.connection.close();
});

describe("GET /api/games", () => {
  it("should return list of games", async () => {
    const res = await request(app).get("/api/games");
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  }, 10000); // extend timeout to 10s
});
