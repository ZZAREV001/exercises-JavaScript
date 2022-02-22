beforeEach(() => {
    console.log("Populating db ...");
})

afterEach(() => {
    console.log("Deleting db ...");
})

describe('Setup and teardown', () => {
    test('one', () => {
        expect(1 + 1).toBe(2);
    })
    test('two', () => {
        expect(1 + 1).toBe(2);
    })
})