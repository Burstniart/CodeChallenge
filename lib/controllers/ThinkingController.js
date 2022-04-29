const ThinkingServices = require("./../../lib/services/ThinkingServices");
const Reader = require("./../../lib/utils/Reader");

class ThinkingController {
    static getStudents() {
        const thinkers = Reader.readJsonFile("visualpartners.json");
        const students = ThinkingServices.getAllStudents(thinkers);
        return students;
    }
    static getCertified() {
        const thinkers = Reader.readJsonFile("visualpartners.json");
        const certificate = ThinkingServices.getAllCertificate(thinkers);
        return certificate;
    }
}
module.exports = ThinkingController;