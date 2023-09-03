"use strict";
function getQuestionPart(phrases) {
    if (!Array.isArray(phrases) || phrases.length !== 3) {
        throw new Error("error");
    }
    const questionPart = [];
    const firstPhrase = phrases[0];
    const secondPhrase = phrases[1];
    const thirdPhrase = phrases[2];
    for (let i = 0; i < firstPhrase.length; i++) {
        if (firstPhrase.charAt(i) === secondPhrase.charAt(i) && secondPhrase.charAt(i) === thirdPhrase.charAt(i)) {
            questionPart.push(firstPhrase.charAt(i));
        }
        else {
            break;
        }
    }
    return questionPart;
}
const phrases = ["BATHROOM", "BATH SALTS", "BLOODBATH"];
try {
    const questionPart = getQuestionPart(phrases);
    console.log(`The question part for the "Remote Associates Test" is: ${questionPart}`);
}
catch (error) {
    console.error(`[ERROR] ${error}`);
}
//# sourceMappingURL=test3.js.map