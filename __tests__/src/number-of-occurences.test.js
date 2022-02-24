// const underTest = require('/Users/GoldenEagle/Desktop/Divers/Dossier-cours-IT/Cours-JavaScript/Cours-JavaScript-Jest-software-testing/Exercise-JavaScript-testing/src/number-of-occurences.js');
import numberOfOccurrences from '/Users/GoldenEagle/Desktop/Divers/Dossier-cours-IT/Cours-JavaScript/Cours-JavaScript-Jest-software-testing/Exercise-JavaScript-testing/src/number-of-occurences.js';

describe('number of occurrences', () => {
    test('Can find correct number of occurrences for a given number', () => {
        // Given
        const numbers = [1, 2, 3, 3, 3, 4, 4, 5];
        const searchNumber = 3;
        const expected = 3;

        // When
        const actual = numberOfOccurrences(numbers, searchNumber);

        // Then
        expect(actual).toBe(expected);
    })

    test('Can find correct number of occurrences when not find', () => {
        // Given
        const numbers = [1, 2, 3, 3, 3, 4, 4, 5];
        const searchNumber = 10;
        const expected = 0;

        // When
        const actual = numberOfOccurrences(numbers, searchNumber);

        // Then
        expect(actual).toBe(expected);
    })

    test('Can find correct number of occurrences when list is empty', () => {
        // Given
        const numbers = [];
        const searchNumber = 10;
        const expected = 0;

        // When
        const actual = numberOfOccurrences(numbers, searchNumber);

        // Then
        expect(actual).toBe(expected);
    })

    test('Will throw an error when input not a number', () => {
        // Given
        const numbers = [];
        const searchNumber = 'A';

        // When
        // Then
        expect(() => numberOfOccurrences(numbers, searchNumber))
            .toThrow(`${searchNumber} is not a number`);
    })
})

