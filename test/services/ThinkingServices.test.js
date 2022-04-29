const ThinkingServices = require("./../../lib/services/ThinkingServices");
const Reader = require("./../../lib/utils/Reader");

describe("Test suit for ThinkingService", () => {
    test("1) Get all students, full format", () => {
        const thinkers = Reader.readJsonFile("./test/testRun.json")
        const theThinkers = ThinkingServices.getAllStudents(thinkers)

        expect(theThinkers[0].credits).toBe(508);
    });
    test("2) Get email from student if 'haceCertification': true on all students", () => {
        const certifieds = Reader.readJsonFile("./test/testRun.json")
        const theCertifieds = ThinkingServices.getAllCertificate(certifieds)

        expect(theCertifieds[0]).toBe("Sexton@visualpartnership.xyz");
    });
});