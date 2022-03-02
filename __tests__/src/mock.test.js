describe('Mock', () => {
    describe('Functions', () => {
        test("jest.fn", () => {
            const mock = jest.fn();
            expect(mock()).toBeUndefined();
            expect(mock).toHaveBeenCalled();
            expect(mock).toHaveBeenCalledTimes(1);
        })

        test("jest.fn using mock property", () => {
            const myFunc = jest.fn();
            myFunc();
            myFunc();
            expect(myFunc.mock.results[0].value).toBeUndefined();
            expect(myFunc.mock.results[1].value).toBeUndefined();

            expect(myFunc.mock.calls.length).toBe(2);
        })

        test("jest.fn capturing arguments", () => {
            // Given
            const myFunc = jest.fn();
            
            // When
            myFunc("hello", "foo");
            myFunc("world");

            // Then
            expect(myFunc.mock.calls[0][0]).toBe("hello");
            expect(myFunc.mock.calls[0][1]).toBe("world");
            expect(myFunc).toHaveBeenCalledWith("world");
            expect(myFunc).toHaveBeenCalledTimes(2);
        })
    })

    describe('mock implementation', () => {

        test("with callback", () => {
            const mock = jest.fn((text) => {
                return text.toUpperCase();
            });
            expect(mock('hello')).toBe('HELLO');
            expect(mock('Exercise code')).toBe('EXERCISE CODE');
        })

        test("with .mockImplementation", () => {
            const mock = jest.fn.mockImplementation((text) => {
                return text.toUpperCase();
            });
            expect(mock('hello')).toBe('HELLO');
        })

        test("with callback .mockImplementationOnce", () => {
            const mock = jest.fn.mockImplementationOnce((text) => {
                return text.toUpperCase();
            });
            expect(mock('hello')).toBe('HELLO');
            expect(mock('exercise')).toBeUndefined();
            expect(mock('exercise')).toBeUndefined();
            expect(mock('exercise')).toBeUndefined();
        })

        test("mock return values", () => {
            const myFunc = jest.fn();
            expect(myFunc()).toBeUndefined();  
            
            myFunc.mockReturnValueOnce(1);
            myFunc.mockReturnValueOnce(2);
            myFunc.mockReturnValueOnce(3);
            myFunc.mockReturnValue(-1);
            expect(myFunc()).toBe(1);
            expect(myFunc()).toBe(2);
            expect(myFunc()).toBe(3);
            expect(myFunc()).toBe(-1);
            expect(myFunc()).toBe(-1);
            expect(myFunc()).toBe(-1);
        })

    })
})
