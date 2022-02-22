import validator from '/Users/GoldenEagle/Desktop/Divers/Dossier-cours-IT/Cours-JavaScript/Cours-JavaScript-Jest-software-testing/Exercise-JavaScript-testing/src/email-validator.js'

describe('Email Validator', () => {

    describe('Table testing', () => {
        describe('Normal Table', () => {
            describe.each([
                ["hello@gmail.com", true],
                ["hello@gmailcom", false],
                ["hellogmail.com", false]
            ])('email %s should be %o'), (email, expected) => {
                test(`Return ${expected}`, () => {
                    // When
                    const actual = validator(email);
                    // Then
                    expect(actual).toBe(expected);
                })
            }
        })

        describe('Tagged Template Literal', () => {
            describe.each`
               email                     | expected
               ${"hello@gmail.com"} | ${true}
               ${"hellogmail.com"}  | ${false}}
               ${"hello@gmailcom"}  | ${false}
               `('email %s should be %o', ({ email, expected }) => {
                   test(`return ${expected}`, () => {
                       // When
                       const actual = validator(email);
                       // Then
                       expect(actual).toBe(expected);
                    })
                })
        })

    })

    

    
    test.skip('True when valid email', () => {
        // Given
        const email = "hello@gmail.com";
        // When
        const actual = validator(email);
        // Then
        expect(actual).toBe(true);
    })

    test.skip('True when valid email 2', () => {
        // Given
        const email = "hello@gmail.com";
        // When
        const actual = validator(email);
        // Then
        expect(actual).toBe(true);
    })

    test/skip('False when not valid email', () => {
        // Given
        const email = "hellogmail.com";
        // When
        const actual = validator(email);
        // Then
        expect(actual).toBe(false);
    })
})
