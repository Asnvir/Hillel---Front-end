const checkContinue = confirm('Tell me three most important words 💚');

if (checkContinue) {

    let index,
        word,
        ifWordNull,
        ifWordEmpty,
        ifWordConsistDigit,
        letterCase,
        ifNotUppercase,
        ifNotLowercase,
        ifNotCapitalize,
        sentence = '';


    for (index = 0; index < 3; index++) {

        //Создал ifWordNull  чтобы код был более читабелен + не хотел загромождать условия внутри while.
        //       ifWordEmpty            Так же в строках 25,26,27 сделал кастинг на булиан так
        //       ifWordConsistDigit     как посчитал, что лучше явно приводить переменную к типу, который я имел в виду.

        do {
            word = prompt(`Enter word #${index + 1}`);
            ifWordNull = Boolean(word === null);
            ifWordEmpty = Boolean(word === '');
            ifWordConsistDigit = Boolean(/\d/.test(word));
        } while (ifWordNull || ifWordEmpty || ifWordConsistDigit);

        console.log(`Word #${index + 1}: ${word}`);

        //Создал ifNotUppercase  чтобы код был более читабелен + не хотел загромождать условия внутри while
        //       ifNotLowercase         Так же в строках 38,39,40 сделал кастинг на булиан так
        //       ifNotCapitalize        как посчитал, что лучше явно приводить переменную к типу, который я имел в виду.

        do {
            letterCase = prompt(`Choose type of transformation for "${word}": uppercase | lowercase | capitalize .`, 'uppercase');
            ifNotUppercase = Boolean(!(letterCase === 'uppercase'));
            ifNotLowercase = Boolean(!(letterCase === 'lowercase'));
            ifNotCapitalize = Boolean(!(letterCase === 'capitalize'));
        } while (ifNotUppercase && ifNotLowercase && ifNotCapitalize);

        switch (letterCase) {
            case 'uppercase':
                word = word.toUpperCase();
                break;

            case 'lowercase':
                word = word.toLowerCase();
                break;

            case 'capitalize':
                if (word.length === 1) {
                    word = word.toUpperCase();
                } else {
                    word = word.charAt(0).toUpperCase() + word.slice(1);
                }
                break;
        }

        console.log(`Transform type for word #${index + 1}: ${letterCase}`);
        console.log(`Transform word #${index + 1}: ${word}`);
        sentence = `${sentence} ${word}`;

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

