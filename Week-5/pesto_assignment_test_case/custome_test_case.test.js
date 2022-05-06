test(`custom test case`, () => {
    expect(2).toBeMyCustomFunc(1,20)
})

expect.extend( {
    toBeMyCustomFunc(value,lower,upper) {
        if(value >= lower && value <= upper) {
            return {
                pass:true,
                message: () => (`the test passed`),
            }
        }
        else {
            return {
                pass:false,
                message: () => (`the test failed`),
            }
        }        
    }
})