const ThinkingController = require("./controllers/ThinkingController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "Visual Thinking Api welcome!"});
});

app.get("/v1/students/active", (request, response) => {
    const students = ThinkingController.getStudents();
    response.json(students);
});

app.get("/v1/students/certified", (request, response) => {
    const certificate = ThinkingController.getCertified();
    response.json({haveCertification: true, email: certificate});
});

app.get("/v1/students/filterByCredit/:credit", (request, response) => {
    const credits = request.params.credit;
    const enough = ThinkingController.isEnough(credits);
    response.json({creditsOver: credits, students: enough});
});

app.listen(port, () => {
    console.log(`Visual Thinking API in localhost:${port}`);
});