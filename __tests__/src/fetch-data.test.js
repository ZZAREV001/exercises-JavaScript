import fetchData from "../../src/fetch-data";

describe('Fetch data', () => {
    test('Can fetch data', () => {
        /*return fetchData().then(data => {
            expect(data).toBe("data back from the server")
        }) */
        return expect(fetchData()).resolves.toBe('data back from the server');
    })

    test('Can fetch data async', async () => {
        await expect(fetchData()).resolves.toBe('data back from the server');
    })

    test('Can catch error while fetching data', () => {
        return expect(fetchData()).reject.toMatch('oops error');
    })

    test('Can catch error while fetching data with async', async () => {
        expect.assertions(1);
        try {
            await fetchData();
        } catch(err) {
            expect(err).toMatch('oops error');
        }
        // await expect(fetchData()).rejects.toMatch('oops error');
    })

    test('mocking promises', () => {
        const myFunc = jest.fn();
        myFunc.mockResolvedValue(["hello", "world"]);

        expect(myFunc()).resolves.toEqual(["hello", "world"]);
    })

    it('should check addition', () => {

    })
})
