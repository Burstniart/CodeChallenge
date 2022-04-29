const ThinkingController = require("./controllers/ThinkingController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "Visual Thinking Api welcome!"});
});

app.listen(port, () => {
    console.log(`Visual Thinking API in localhost:${port}`);
});