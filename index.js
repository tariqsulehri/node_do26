import express from "express";
import { Pool } from "pg";
// Export the app for testing
export const app = express();

app.use(express.json());

import fs from "fs";

const version = fs.readFileSync("VERSION", "utf8").trim();

const pool = new Pool({
    host: process.env.PG_HOST || "localhost",
    user: process.env.PG_USER || "postgres",
    password: process.env.PG_PASSWORD || "postgres",
    database: process.env.PG_DB || "postgres",
});

app.get("/db", async (req, res) => {
    const r = await pool.query("select now()");
    res.json(r.rows);
});

app.get("/health", (req, res) => {
    res.send("healthy");
});

app.get("/version", (req, res) => {
    res.send(version);
});

// Only start the server if this file is run directly
if (process.argv[1] === import.meta.filename) {
    app.listen(3500, () => {
        console.log("Server started on port 3000");
    });
}


