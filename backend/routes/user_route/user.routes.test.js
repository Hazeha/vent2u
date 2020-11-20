/* eslint-disable no-shadow */
/* eslint-disable camelcase */
/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../../server');

describe('user route', () => {
  it('should get a user', async (done) => {
    await request(app)
      .get('/user/1')
      .then((response) => {
        const {
          id, first_name, last_name, password,
        } = response.body;
        expect([id, first_name, last_name, password])
          .toEqual([
            1,
            'nikolaj',
            'bigDig',
            'assForCash',
          ]);
        done();
      });
  });

  it('should add a user', async (done) => {
    await request(app)
      .post(
        '/user/',
      )
      .send(
        {
          first_name: 'Linh',
          last_name: 'Phan',
          username: 'virginSlayer',
          password: 'maroccan ass',

        },
      )
      .then((response) => {
        const {
          first_name, last_name, username, password,
        } = response.body;

        expect([
          response.status,
          first_name,
          last_name,
          username,
          password,
        ]).toEqual(
          [
            201,
            'Linh',
            'Phan',
            'virginSlayer',
            'maroccan ass',
          ],
        );
        done();
      });
  });

  it('should remove a user', async (done) => {
    await request(app)
      .post(
        '/user/',
      )
      .send(
        {
          first_name: 'Linh',
          last_name: 'Phan',
          username: 'virginSlayer',
          password: 'maroccan ass',

        },
      )
      .then((response) => {
        const { id } = response.body;
        request(app)
          .delete(`/user/${id}`)
          .then((response) => {
            expect([response.status, response.body.id])
              .toEqual([200, id.toString()]);
            done();
          });
      });
  });
});