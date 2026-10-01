const express = require('express');
const app = express();
const fs = require('fs/promises');
const path = require('path');

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello ITMP!");
});

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});

