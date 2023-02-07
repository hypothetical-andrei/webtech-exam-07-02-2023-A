const app = require('./../app')

describe('Testing processString function', () => {

    test('Function throws an Error with the message "Item is not a number" any of the items is not a number', (done) =>{
        try{
            app.processString('this is not a numbered string')
        }
        catch(err){
            expect(err).toBeInstanceOf(Error)
            done()
        }
    })

    test('Function throws an Error with the message "Item is not a number" any of the items is not a number', (done) =>{
        try{
            app.processString('this is not a numbered string')
        }
        catch(err){
            expect(err.message).toBe('Item is not a number')
            done()
        }
    })

    test('Function should return 100', (done) =>{
        let result = app.processString('')
        expect(result).toBe(100)
        done()
    })

    test('Function should ignore odd numbers', (done) => {
        let result = app.processString('1 3')
        expect(result).toBe(100)
        done()
    })

    test('Function should return 100 minus the sum of even numbers', (done) => {
        let result = app.processString('1 2 3 4 5 6 7 100')
        expect(result).toBe(-12)
        done()
    })
})