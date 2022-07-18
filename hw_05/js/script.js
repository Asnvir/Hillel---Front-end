const checkContinue = confirm('Tell me three most important words 💚');
const NUMBER_OF_WORDS = 3;

if (checkContinue) {
    let index, sentence = '';
    for (index = 0; index < NUMBER_OF_WORDS; index++) {
        let     inputWord,
                isCanceled,
                isWordEmpty,
                isWordConsistDigit,
                isValidWord,
                inputLettercase,
                isUppercase,
                isLowercase,
                isCapitalize,
                isValidLettercase;

        do {
            inputWord = prompt(`Enter word #${index + 1}`);
            isCanceled = inputWord === null;
            isWordEmpty = inputWord === '';
            isWordConsistDigit = /\d/.test(inputWord);
            isValidWord = !isCanceled && !isWordEmpty && !isWordConsistDigit;
        } while (!isValidWord);

        console.log(`Word #${index + 1}: ${inputWord}`);

        do {
            inputLettercase = prompt(`Choose type of transformation for "${inputWord}": uppercase | lowercase | capitalize .`, 'uppercase');
            isUppercase = inputLettercase === 'uppercase';
            isLowercase = inputLettercase === 'lowercase';
            isCapitalize = inputLettercase === 'capitalize';
            isValidLettercase = isUppercase || isLowercase || isCapitalize;
        } while (!isValidLettercase);

        switch (inputLettercase) {
            case 'uppercase':
                inputWord = inputWord.toUpperCase();
                break;

            case 'lowercase':
                inputWord = inputWord.toLowerCase();
                break;

            case 'capitalize':
                inputWord = inputWord.toLowerCase();
                inputWord = inputWord.charAt(0).toUpperCase() + inputWord.slice(1);
                break;
        }

        console.log(`Transform type for word #${index + 1}: ${inputLettercase}`);
        console.log(`Transform word #${index + 1}: ${inputWord}`);
        sentence = `${sentence} ${inputWord}`;

        if (index !== 2) {
            console.log(`Sentence: ${sentence}`)
        } else {
            sentence = `${sentence}!`
            console.log(`Sentence: ${sentence}`);
            console.log('******');
            console.log(`${sentence}`);
        }
    }
} else {
    console.log('You clicked Cancel.\nProgram finished.')
}

