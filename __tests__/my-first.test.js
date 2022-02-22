describe.skip('addition and subtraction', () => {
    describe('positive numbers', () => {
        test('it should add 1 + 1', () => {
            expect(1 + 1).toBe(2);
        })
        test('it should add 1 + 2', () => {
            expect(1 + 2).toBe(3);
        })
    })
    
    describe('negative numbers', () => {
        test('it should subtract 1 - 1', () => {
            expect(1 - 1).toBe(0);
        })
        test('it should subtract 1 - 2', () => {
            expect(1 - 2).toBe(-1);
        })
    })
})



