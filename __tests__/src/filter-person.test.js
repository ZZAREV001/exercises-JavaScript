import { filterByGender } from "/Users/GoldenEagle/Desktop/Divers/Dossier-cours-IT/Cours-JavaScript/Cours-JavaScript-Jest-software-testing/Exercise-JavaScript-testing/src/filter-person.js";

describe('Test filterByGender function', () => {
    test('it should filter people by gender', () => {
        // Given
        const people = [
            {firstName: 'James', gender: 'M'},
            {firstName: 'Ali', gender: 'M'},
            {firstName: 'Samira', gender: 'F'},
            {firstName: 'Anna', gender: 'F'},
            {firstName: 'Sarah', gender: 'F'}
        ]
        const expected = [
            {firstName: 'Samira', gender: 'F'},
            {firstName: 'Anna', gender: 'F'},
            {firstName: 'Sarah', gender: 'F'}
        ]

        // When
        const actual = filterByGender(people, expected);

        // Then
        expect(actual).toHaveLength(3);
        expect(actual).toEqual(expected);

    })

    test('it should test if filter by wrong gender', () => {
        // Given
        const people = [
            {firstName: 'James', gender: 'M'},
            {firstName: 'Ali', gender: 'M'},
            {firstName: 'Samira', gender: 'F'},
            {firstName: 'Anna', gender: 'F'},
            {firstName: 'Sarah', gender: 'F'}
        ]
        const expected = [];

        // When
        const actual = filterByGender(people, 'P');

        // Then
        expect(actual).toHaveLength(0);
        expect(actual).toEqual(expected);
    })
})
