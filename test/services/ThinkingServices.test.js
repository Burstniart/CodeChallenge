const ThinkingServices = require("./../../lib/services/ThinkingServices");

describe("Test suit for ThinkingService", () => {
    test("1) Get all students, full format", () => {
        const thinkers = ThinkingServices.getAllStudents("./test/testRun.json")
        console.log(thinkers[1]);
        expect(thinkers[0].credits).toBe(508);
    });
});