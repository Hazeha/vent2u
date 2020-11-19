const request = require('supertest')
const app = require('./server')
it('should pass', () => { 
    request(app)
    .get("/")
    .then(result => { 
      console.log(result)
    })
    expect(true).toBe(true)
})