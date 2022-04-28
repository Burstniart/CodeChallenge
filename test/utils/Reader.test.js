const Reader = require("./../../lib/utils/Reader")
describe("Test suit for Reader", () => {
    test("1) PLaceholder", () => {
        const explorers = [{"id": "6264d5d89f1df827eb84bb23","name": "Warren","email": "Todd@visualpartnership.xyz",
            "credits": 508,"enrollments": ["Visual Thinking Intermedio","Visual Thinking Avanzado"],
            "previousCourses": 1,"haveCertification": true},
          {"id": "6264d5d85cf81c496446b67f","name": "Lucinda","email": "Sexton@visualpartnership.xyz",
            "credits": 677,"enrollments": ["Visual Thinking Avanzado"],"previousCourses": 6,
            "haveCertification": true
          }];
          const iRead = Reader.readJson("explorers");

        expect(explorers[0].name).toBe("Warren");
        expect(explorers[1].credits).toBe(677);

    });
});