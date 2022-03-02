import { greetUser, greetUser2 }
 from "../../src/greet-user";

describe('Greet user', () => {
    test('Can greet user callback', (done) => {
        // Given
        const name = "James";
        
        const callback = data => {
            // Then
            try {
                expect(data).toBe(name);
                done();
            } catch(err) {
                done(err);
            }     
        }
        
        // When
        greetUser(name, callback);
    })

    test('Can greet user 2 callback', () => {
        // Given
        const name = "James";
        
        const callback = jest.fn((username) => {
            return `Hola ${username}`;

        })
        
        // When
        const actual = greetUser2(name, callback);
        
        // Then
        expect(actual).toBe('Hola James');
        expect(actual).toHaveBeenCalledTimes(1);
        expect(actual).toHaveBeenCalledWith('James');
    })
})
