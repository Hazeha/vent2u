/* eslint-disable no-shadow */
/* eslint-disable camelcase */
/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../../server');

describe('user route', () => {
  it('should get a user', async (done) => {
    await request(app)
      .get('/api/user/1')
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
        '/api/user/',
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
        '/api/user/',
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
          .delete(`/api/user/${id}`)
          .then((response) => {
            expect([response.status, response.body.id])
              .toEqual([200, id.toString()]);
            done();
          });
      });
  });

  it('should edit an user', async (done) => {
    await request(app)
      .post(
        '/api/user/',
      )
      .send({
        first_name: 'Linh',
        last_name: 'Phan',
        username: 'virginSlayer',
        password: 'maroccan ass',

      })
      .then((response) => {
        const {
          id
        } = response.body;
        request(app)
          .put(`/api/user/${id}`)
          .send({
            first_name: 'Xinh',
            last_name: 'Xhan',
            username: 'XirginSlayer',
            password: 'Xaroccan ass',
  
          })
          .then((response) => {
            expect([response.status, response.body.message])
              .toEqual([200, 'User was updated successfully.']);
            done();
          });
      });
  });
});
