import express from "express";

// Export the app for testing
export const app = express();

app.use(express.json());

import fs from "fs";

const version = fs.readFileSync("VERSION", "utf8").trim();

app.get("/health", (req, res) => {
    res.send("healthy");
});

app.get("/version", (req, res) => {
    res.send(version);
});

// Only start the server if this file is run directly
if (process.argv[1] === import.meta.filename) {
    app.listen(3000, () => {
        console.log("Server started on port 3000");
    });
}


