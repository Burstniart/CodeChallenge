const ThinkingController = require("./../../lib/controllers/ThinkingController");

describe("Test suit for Thinking Controller", () => {
    test("1) Testing getStudents method", () => {
        const thinkers = ThinkingController.getStudents();

        expect(thinkers[0].name).toBe("Warren");
    });
    test("2) Testting getCertified method", () => {
        const certifieds = ThinkingController.getCertified();
        console.log(certifieds);
        expect(certifieds[0]).toBe("Todd@visualpartnership.xyz");
    })
});