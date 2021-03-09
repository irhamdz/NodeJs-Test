function findFirstStringInBracket(str) {
    stringResult = ''
    if (str.length > 0) {
        let indexFirstBracket = str.indexOf("(");
        let wordsAfterFirstBracket = indexFirstBracket >= 0 ? str.substr(indexFirstBracket) : null;
        let indexLastBracket = wordsAfterFirstBracket.indexOf(")")
        if (wordsAfterFirstBracket != null && indexFirstBracket >= 0 && indexLastBracket >= 0) {
            stringResult = wordsAfterFirstBracket.substring(1, indexLastBracket)
        }
        return stringResult
    } else {
        return stringResult;
    }
}