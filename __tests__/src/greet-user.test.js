import greetUser from "../../src/greet-user";

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
})
