const assert = require('assert')
const request = require('supertest')
const app = require('../index.js')

describe('Validate setting the test', () => {
    it('should be ok', () => {
        assert.ok(true)
    })
})

// describe('GET "/item"', ()=> {
//     it('respond Items'), (done) => {
//         request(app).get('/item').expect(done).toBeInstanceOf(Array)
//     }
// })

describe('GET "/item"', ()=>{
    it('Somthing', (done)=>{
        let want = [
            {no: '1', name: 'Iphone 12 Pro Max'},
            {no: '2', name: 'Iphone 12'},
            {no: '3', name: 'Iphone 11'}
        ]

        request(app).get('/item').expect(want, done)
    })
})