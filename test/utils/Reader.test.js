const Reader = require("./../../lib/utils/Reader");
describe("Test suit for Reader", () => {
    test("1) Test readJsonFile static method", () => {
        const iRead = Reader.readJsonFile("./test/testRun.json");

        expect(iRead[0].name).toBe("Warren");
        expect(iRead[1].credits).toBe(677);

    });
});