const assert = require('assert')
const request = require('supertest')
const app = require('../index.js')

describe('Validate setting the test', () => {
    it('should be ok', () => {
        assert.ok(true)
    })
})

describe('GET "/"', () => {
    it('respond with Hello!'), (done) => {
        request(app).get('/').expect('Hello!', done)
    }
})

// describe('GET "/item"', ()=> {
//     it('respond Items'), (done) => {
//         request(app).get('/item'.expect(done).toBeInstanceOf(Array))
//     }
// })

// describe('GET "/item"', ()=> {
//     it('respond Items'), (done) => {
        
//         let want = [
//             {no: '1', name: 'Iphone 12 Pro Max'}
//         ]
//         request(app).get('/item'.expect(want, done)
//         }
// })