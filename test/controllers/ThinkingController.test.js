const ThinkingController = require("./../../lib/controllers/ThinkingController");

describe("Test suit for Thinking Controller", () => {
    test("1) Testing getStudents method", () => {
        const thinkers = ThinkingController.getStudents();

        expect(thinkers[0].name).toBe("Warren");
    });
    test("2) Testing getCertified method", () => {
        const certifieds = ThinkingController.getCertified();

        expect(certifieds[0]).toBe("Todd@visualpartnership.xyz");
    });
    test("3) Testing isEnough method", () => {
        const enoughCredits = ThinkingController.isEnough(900);
        console.log(enoughCredits);
        expect(enoughCredits[0].name).toBe("Phillips");
    });
});