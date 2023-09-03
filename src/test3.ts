function getQuestionPart(phrases: string[]): string[] {
    if (!Array.isArray(phrases) || phrases.length !== 3) {
        throw new Error("error");
    }

    const questionPart: string[] = [];
    const firstPhrase: string = phrases[0];
    const secondPhrase: string = phrases[1];
    const thirdPhrase: string = phrases[2];

    for (let i = 0; i < firstPhrase.length; i++) {
        if (firstPhrase.charAt(i) === secondPhrase.charAt(i) && secondPhrase.charAt(i) === thirdPhrase.charAt(i)) {
            questionPart.push(firstPhrase.charAt(i));
        } else {
            break;
        }
    }
    return questionPart;
}

const phrases: string[] = ["BATHROOM", "BATH SALTS", "BLOODBATH"];  
try {
    const questionPart: string[] = getQuestionPart(phrases);
    console.log(`The question part for the "Remote Associates Test" is: ${questionPart}`);
} catch (error) {
    console.error(`[ERROR] ${error}`);
}
