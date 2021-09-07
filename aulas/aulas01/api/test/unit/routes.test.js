import { describe, test, expect, jest } from '@jest/globals';

import Routes from '../../src/routes.js';

describe('#Routes test suite', () => {
    const defaultParams = {
        req: {
            headers: { 'Content-Type': 'multipart/form-data' },
            method: '',
            body: {},
        },
        res: {
            setHeader: jest.fn(),
            writeHead: jest.fn(),
            end: jest.fn()
        },
        values: () => Object.values(defaultParams)
    }
    describe('#setSocketInstance', () => {
        test('setSocket should store io instance', () => {
            const routes = new Routes();
            const ioObj = {
                to: (id) => ioObj,
                emit: (event, message) => { }
            };

            routes.setSocketInstance(ioObj)
            expect(routes.io).toStrictEqual(ioObj)
        });
    });

    describe('#handler', () => {
        test('given an inexistence route it should choose default route', async () => {
            const routes = new Routes()
            const params = { ...defaultParams }

            params.req.method = 'inexistent'
            await routes.handler(...params.values())

            expect(params.res.end).toHaveBeenCalledWith('hello world')
        })

        test('it should set any request with CORS enabled', async () => {
            const routes = new Routes()
            const params = { ...defaultParams }

            params.req.method = 'inexistent';

            await routes.handler(...params.values());

            expect(params.res.setHeader).toHaveBeenCalledWith('Access-Control-Allow-Origin', '*')
        })

        test('given method OPTIONS it should choose option route', async () => {
            const routes = new Routes()
            const params = { ...defaultParams }

            params.req.method = 'OPTIONS'

            await routes.handler(...params.values())

            expect(params.res.writeHead).toHaveBeenCalledWith(204)
            expect(params.res.end).toHaveBeenCalled()
        });
        test('given method GET it should choose option route', async () => {
            const routes = new Routes()
            const params = { ...defaultParams }

            params.req.method = 'POST'
            jest.spyOn(routes, routes.post.name).mockResolvedValue()
            await routes.handler(...params.values())
            expect(routes.post).toHaveBeenCalled()
        });
        test('given method POST it should choose option route', async () => {
            const routes = new Routes()
            const params = { ...defaultParams }

            params.req.method = 'GET'
            jest.spyOn(routes, routes.get.name).mockResolvedValue()
            await routes.handler(...params.values())
            expect(routes.get).toHaveBeenCalled()
        });
    })
    describe('#get', () => {
        test.skip('given method GET it should list all files downloaded', async () => {
            
        })
    })
})
