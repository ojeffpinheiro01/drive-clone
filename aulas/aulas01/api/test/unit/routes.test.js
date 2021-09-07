import { describe, test, expect } from '@jest/globals'

describe('#Routes suite test', () => {
    describe('#setSocketInstance', () => {
        test.todo('given an inexistence route it should choose default route')
        test.todo('it should set any request with CORS enabled')
        test.todo('given method OPTIONS it should choose option route')
        test.todo('given method GET it should choose option route')
        test.todo('given method POST it should choose option route')
    })

    test('#teste', () => {
        expect(true).toBeTruthy()
    })
})