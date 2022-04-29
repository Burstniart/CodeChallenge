const ThinkingController = require("./../../lib/controllers/ThinkingController");

describe("Test suit for Thinking Controller", () => {
    test("1) Testting getStudents method", () => {
        const thinkers = ThinkingController.getStudents();
        
        expect(thinkers[0].name).toBe("Warren");
    });
});