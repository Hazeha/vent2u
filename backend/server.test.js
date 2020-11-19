/* eslint-disable no-undef */
const request = require('supertest');
const app = require('./server.js');

it('should pass', () => {
  request(app)
    .get('/')
    .then((result) => {
      expect(result.body.message).toBe('Backend Connected.');
    });
  expect(true).toBe(true);
});
