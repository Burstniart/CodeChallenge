class ThinkingServices {
    static getAllStudents(dataBase) {
        const allStudents = dataBase;
        return allStudents;
    }
    static getAllCertificate(dataBase) {
        const certifiedStudents = dataBase.filter((thinker) => thinker.haveCertification === true);
        return certifiedStudents.map((thinker) => thinker.email)
    }
    static isItEnough(dataBase, credit) {
        const enoughCredits = dataBase.filter((itsEnough) => itsEnough.credits > credit);
        return enoughCredits;
    }
}
module.exports = ThinkingServices